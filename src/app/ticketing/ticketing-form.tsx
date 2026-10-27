"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocationSelector } from "@/components/ticketing/location-selector";
import { PassengerSelector } from "@/components/ticketing/passenger-selector";
import { TicketSummary } from "@/components/ticketing/ticket-summary";

type TravelType = "One Way" | "Round Trip";
type FormVariant = "domestic" | "international";

type TravelPreferences = {
  baggage: boolean;
  wheelchair: boolean;
  meal: string;
  seat: string;
};

type FormState = {
  from: string;
  to: string;
  travelType: TravelType;
  classType: string;
  travelDate: string;
  returnDate: string;
  adults: number;
  children: number;
  infants: number;
  requirements: string;
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  specialRequests: string;
  travelPreferences: TravelPreferences;
};

type Errors = Partial<
  Record<
    | "from"
    | "to"
    | "travelType"
    | "classType"
    | "travelDate"
    | "returnDate"
    | "adults"
    | "children"
    | "infants"
    | "fullName"
    | "email"
    | "phone"
    | "countryOfResidence",
    string
  >
>;

const travelTypes: TravelType[] = ["One Way", "Round Trip"];
const ticketClasses = ["Economy", "Premium Economy", "Business", "First Class"];
const travelPreferencesOptions = ["Standard Meal", "Vegetarian", "Vegan", "Halal", "Child Meal", "No Preference"];
const domesticLocations = [
  "Kathmandu, Nepal (KTM)",
  "Pokhara, Nepal (PKR)",
  "Bhairahawa, Nepal (BWA)",
  "Bharatpur, Nepal (BHR)",
  "Biratnagar, Nepal (BIR)",
  "Bhadrapur, Nepal (BDP)",
  "Nepalgunj, Nepal (KEP)",
  "Dhangadhi, Nepal (DHI)",
  "Janakpur, Nepal (JKR)",
  "Simara, Nepal (SIF)",
];

const emptyForm = (): FormState => ({
  from: "",
  to: "",
  travelType: "One Way",
  classType: "Economy",
  travelDate: "",
  returnDate: "",
  adults: 1,
  children: 0,
  infants: 0,
  requirements: "",
  fullName: "",
  email: "",
  phone: "",
  countryOfResidence: "",
  specialRequests: "",
  travelPreferences: {
    baggage: false,
    wheelchair: false,
    meal: "",
    seat: "",
  },
});

const normalizeLocation = (value: string) =>
  value
    .toLowerCase()
    .replace(/\b(airport|international|intl|terminal|city)\b/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

const areLocationsEquivalent = (from: string, to: string) => {
  const left = normalizeLocation(from);
  const right = normalizeLocation(to);

  if (!left || !right) return false;
  if (left === right) return true;

  const aliasMap: Record<string, string[]> = {
    delhi: ["newdelhi"],
    newdelhi: ["delhi"],
    kathmandu: ["ktm"],
    ktm: ["kathmandu"],
    pokhara: ["pkr"],
    pkr: ["pokhara"],
    bhairahawa: ["bwa"],
    bwa: ["bhairahawa"],
    nepalgunj: ["kep"],
    kep: ["nepalgunj"],
    biratnagar: ["bir"],
    bir: ["biratnagar"],
    bharatpur: ["bhr"],
    bhr: ["bharatpur"],
    dhangadhi: ["dhi"],
    dhi: ["dhangadhi"],
    janakpur: ["jkr"],
    jkr: ["janakpur"],
    bhadrapur: ["bdp"],
    bdp: ["bhadrapur"],
    simara: ["sif"],
    sif: ["simara"],
    dubai: ["dxb"],
    dxb: ["dubai"],
    doha: ["doh"],
    doh: ["doha"],
    bangkok: ["bkk"],
    bkk: ["bangkok"],
    kualalumpur: ["kul"],
    kul: ["kualalumpur"],
    singapore: ["sin"],
    sin: ["singapore"],
    london: ["lhr"],
    lhr: ["london"],
    sydney: ["syd"],
    syd: ["sydney"],
  };

  return Boolean(aliasMap[left]?.includes(right) || aliasMap[right]?.includes(left));
};

const todayString = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60 * 1000);
  return localDate.toISOString().slice(0, 10);
};

const validateForm = (form: FormState, variant: FormVariant): Errors => {
  const errors: Errors = {};

  if (!form.from.trim()) errors.from = "Departure city is required.";
  if (!form.to.trim()) errors.to = "Destination is required.";
  if (form.from.trim() && form.to.trim() && areLocationsEquivalent(form.from, form.to)) {
    errors.from = "Departure and destination cannot be the same.";
    errors.to = "Departure and destination cannot be the same.";
  }
  if (!form.travelType) errors.travelType = "Please choose a travel type.";
  if (!form.classType) errors.classType = "Please choose a travel class.";

  if (!form.travelDate) {
    errors.travelDate = "Departure date is required.";
  } else {
    const travelDate = new Date(`${form.travelDate}T00:00:00`);
    const minimumDate = new Date(`${todayString()}T00:00:00`);
    if (travelDate < minimumDate) errors.travelDate = "Departure date cannot be in the past.";
  }

  if (form.travelType === "Round Trip" && !form.returnDate) {
    errors.returnDate = "Return date is required for round trip bookings.";
  }

  if (form.travelDate && form.returnDate) {
    const departure = new Date(`${form.travelDate}T00:00:00`);
    const returnDate = new Date(`${form.returnDate}T00:00:00`);
    if (returnDate < departure) errors.returnDate = "Return date cannot be earlier than departure date.";
  }

  if (!Number.isInteger(form.adults) || form.adults < 1) {
    errors.adults = "Adults must be at least 1.";
  }
  if (!Number.isInteger(form.children) || form.children < 0) {
    errors.children = "Children cannot be negative.";
  }
  if (!Number.isInteger(form.infants) || form.infants < 0) {
    errors.infants = "Infants cannot be negative.";
  }
  if (form.infants > form.adults) {
    errors.infants = "Infants cannot exceed the number of adults.";
  }

  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+0-9()\s-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (variant === "international" && !form.countryOfResidence.trim()) {
    errors.countryOfResidence = "Country of residence is required.";
  }

  return errors;
};

export function TicketingForm({ variant = "domestic" }: { variant?: FormVariant }) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const isInternational = variant === "international";

  const travelDateMin = useMemo(() => todayString(), []);

  const updateField = (name: keyof FormState, value: string | number | TravelPreferences) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const buildMessage = () => {
    const preferenceSummary = [
      form.travelPreferences.baggage ? "Baggage Assistance" : null,
      form.travelPreferences.wheelchair ? "Wheelchair Assistance" : null,
      form.travelPreferences.meal ? `Meal: ${form.travelPreferences.meal}` : null,
      form.travelPreferences.seat ? `Seat: ${form.travelPreferences.seat}` : null,
    ].filter(Boolean).join("; ") || "Not specified";

    const lines = [
      `${isInternational ? "INTERNATIONAL" : "DOMESTIC"} TICKET ENQUIRY`,
      "",
      "Passenger Information",
      "---------------------",
      `Name: ${form.fullName || "Not specified"}`,
      `Email: ${form.email || "Not specified"}`,
      `Phone: ${form.phone || "Not specified"}`,
      ...(isInternational ? [`Country of Residence: ${form.countryOfResidence || "Not specified"}`] : []),
      "",
      "Journey Details",
      "---------------------",
      `From: ${form.from || "Not specified"}`,
      `To: ${form.to || "Not specified"}`,
      `Travel Type: ${form.travelType}`,
      `Cabin Class: ${form.classType}`,
      `Departure Date: ${form.travelDate || "Not specified"}`,
      `Return Date: ${form.travelType === "Round Trip" ? form.returnDate || "Not specified" : "Not applicable"}`,
      `Passengers: Adults ${form.adults}, Children ${form.children}, Infants ${form.infants}`,
      ...(isInternational ? [`Travel Preferences: ${preferenceSummary}`] : []),
      `Special Requests: ${form.specialRequests || "Not specified"}`,
      "",
      "Please assist with this enquiry.",
    ];

    return lines.join("\n");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(form, variant);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const whatsappHref = `https://wa.me/9779748809397?text=${encodeURIComponent(buildMessage())}`;
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full border border-[#0091DA]/20 bg-[#EAF7FD] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#004AB8]">
          {isInternational ? "International travel" : "Domestic travel within Nepal"}
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <LocationSelector
          label="From"
          id={`${variant}-ticket-from`}
          value={form.from}
          onChange={(value) => updateField("from", value)}
          placeholder={isInternational ? "Search city, country or airport" : "Search a Nepal departure city"}
          error={errors.from}
          suggestionsSource={isInternational ? undefined : domesticLocations.map((label) => ({
            value: label,
            label,
            country: "Nepal",
            kind: "city" as const,
          }))}
        />

        <div className="relative flex items-end">
          <div className="w-full">
            <LocationSelector
              label="To"
              id={`${variant}-ticket-to`}
              value={form.to}
              onChange={(value) => updateField("to", value)}
              placeholder={isInternational ? "Search destination city or airport" : "Search a Nepal destination city"}
              error={errors.to}
              suggestionsSource={isInternational ? undefined : domesticLocations.map((label) => ({
                value: label,
                label,
                country: "Nepal",
                kind: "city" as const,
              }))}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setForm((current) => ({ ...current, from: current.to, to: current.from }));
              setErrors({});
            }}
            className="ml-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#0091DA] hover:text-[#0091DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
            aria-label="Swap from and to"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Travel Type
          <select
            name="travelType"
            value={form.travelType}
            onChange={(event) => updateField("travelType", event.target.value as TravelType)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
          >
            {travelTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.travelType && <p className="mt-2 text-xs text-red-600">{errors.travelType}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Cabin Class
          <select
            name="classType"
            value={form.classType}
            onChange={(event) => updateField("classType", event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
          >
            {ticketClasses.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          {errors.classType && <p className="mt-2 text-xs text-red-600">{errors.classType}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Departure Date
          <Input
            type="date"
            name="travelDate"
            value={form.travelDate}
            min={travelDateMin}
            onChange={(event) => {
              const nextDate = event.target.value;
              updateField("travelDate", nextDate);
              if (form.returnDate && form.travelType === "Round Trip") {
                const departure = new Date(`${nextDate}T00:00:00`);
                const returnDate = new Date(`${form.returnDate}T00:00:00`);
                if (returnDate < departure) {
                  setForm((current) => ({ ...current, returnDate: "" }));
                }
              }
            }}
            className={errors.travelDate ? "mt-2 border-red-300 focus:border-red-500 focus:ring-red-200" : "mt-2"}
            required
          />
          {errors.travelDate && <p className="mt-2 text-xs text-red-600">{errors.travelDate}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Return Date
          <Input
            type="date"
            name="returnDate"
            value={form.returnDate}
            min={form.travelDate || travelDateMin}
            onChange={(event) => updateField("returnDate", event.target.value)}
            disabled={form.travelType !== "Round Trip"}
            className={`${form.travelType !== "Round Trip" ? "mt-2 cursor-not-allowed bg-slate-100 text-slate-400" : "mt-2"} ${errors.returnDate ? "border-red-300 focus:border-red-500 focus:ring-red-200" : ""}`}
          />
          {form.travelType !== "Round Trip" && (
            <p className="mt-2 text-xs text-slate-500">Return date is only required for round trip tickets.</p>
          )}
          {errors.returnDate && <p className="mt-2 text-xs text-red-600">{errors.returnDate}</p>}
        </label>

        <PassengerSelector
          label="Adults"
          value={form.adults}
          min={1}
          max={9}
          onChange={(value) => updateField("adults", value)}
          error={errors.adults}
        />

        <PassengerSelector
          label="Children"
          value={form.children}
          min={0}
          max={9}
          onChange={(value) => updateField("children", value)}
          error={errors.children}
        />

        <PassengerSelector
          label="Infants"
          value={form.infants}
          min={0}
          max={9}
          onChange={(value) => updateField("infants", value)}
          error={errors.infants}
        />
      </div>

      <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004AB8]">
              Passenger Information
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 md:col-span-2">
              Full Name
              <Input
                type="text"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                placeholder="Enter full name"
                className={errors.fullName ? "mt-2 border-red-300 focus:border-red-500 focus:ring-red-200" : "mt-2"}
              />
              {errors.fullName && <p className="mt-2 text-xs text-red-600">{errors.fullName}</p>}
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Email Address
              <Input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="your@email.com"
                className={errors.email ? "mt-2 border-red-300 focus:border-red-500 focus:ring-red-200" : "mt-2"}
              />
              {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Phone Number
              <Input
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+977 9812345678"
                className={errors.phone ? "mt-2 border-red-300 focus:border-red-500 focus:ring-red-200" : "mt-2"}
              />
              {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
            </label>

            {isInternational && (
              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Country of Residence
                <Input
                  type="text"
                  value={form.countryOfResidence}
                  onChange={(event) => updateField("countryOfResidence", event.target.value)}
                  placeholder="Enter country"
                  className={errors.countryOfResidence ? "mt-2 border-red-300 focus:border-red-500 focus:ring-red-200" : "mt-2"}
                />
                {errors.countryOfResidence && <p className="mt-2 text-xs text-red-600">{errors.countryOfResidence}</p>}
              </label>
            )}

            <label className="block text-sm font-medium text-slate-700 md:col-span-2">
              Special Requests
              <textarea
                rows={3}
                value={form.specialRequests}
                onChange={(event) => updateField("specialRequests", event.target.value)}
                placeholder="Any specific requirement or request"
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
              />
            </label>
          </div>
      </div>

      {isInternational && (
        <div className="space-y-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004AB8]">
            International Travel Preferences
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {(["baggage", "wheelchair"] as const).map((preference) => (
              <label key={preference} className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={form.travelPreferences[preference]}
                  onChange={(event) =>
                    updateField("travelPreferences", {
                      ...form.travelPreferences,
                      [preference]: event.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-slate-300 text-[#0091DA] focus:ring-[#0091DA]"
                />
                {preference === "baggage" ? "Baggage Assistance" : "Wheelchair Assistance"}
              </label>
            ))}

            <label className="block text-sm font-medium text-slate-700">
              Meal Preference
              <select
                value={form.travelPreferences.meal}
                onChange={(event) => updateField("travelPreferences", { ...form.travelPreferences, meal: event.target.value })}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
              >
                <option value="">No preference</option>
                {travelPreferencesOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Seat Preference
              <select
                value={form.travelPreferences.seat}
                onChange={(event) => updateField("travelPreferences", { ...form.travelPreferences, seat: event.target.value })}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
              >
                <option value="">No preference</option>
                <option value="Window">Window</option>
                <option value="Aisle">Aisle</option>
                <option value="Middle">Middle</option>
              </select>
            </label>
          </div>
        </div>
      )}

      <TicketSummary
        from={form.from}
        to={form.to}
        travelType={form.travelType}
        classType={form.classType}
        travelDate={form.travelDate}
        returnDate={form.returnDate}
        adults={form.adults}
        childCount={form.children}
        infants={form.infants}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          This is a ticket enquiry request. No booking is created until confirmed by the team.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {isInternational ? "Send International Enquiry" : "Send via WhatsApp"}
        </Button>
      </div>
    </form>
  );
}
