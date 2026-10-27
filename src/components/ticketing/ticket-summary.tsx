type Props = {
  from: string;
  to: string;
  travelType: string;
  classType: string;
  travelDate: string;
  returnDate: string;
  adults: number;
  childCount: number;
  infants?: number;
};

export function TicketSummary({
  from,
  to,
  travelType,
  classType,
  travelDate,
  returnDate,
  adults,
  childCount,
  infants = 0,
}: Props) {
  const passengerSummary = [
    adults > 0 ? `${adults} Adult${adults > 1 ? "s" : ""}` : null,
    childCount > 0 ? `${childCount} Child${childCount > 1 ? "ren" : ""}` : null,
    infants > 0 ? `${infants} Infant${infants > 1 ? "s" : ""}` : null,
  ].filter(Boolean).join(", ") || "0 Adults";

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004AB8]">Ticket Enquiry Summary</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div><p className="text-slate-500">From</p><p className="font-semibold text-slate-900">{from || "Not selected"}</p></div>
        <div><p className="text-slate-500">To</p><p className="font-semibold text-slate-900">{to || "Not selected"}</p></div>
        <div><p className="text-slate-500">Travel type</p><p className="font-semibold text-slate-900">{travelType}</p></div>
        <div><p className="text-slate-500">Cabin</p><p className="font-semibold text-slate-900">{classType}</p></div>
        <div><p className="text-slate-500">Departure</p><p className="font-semibold text-slate-900">{travelDate || "Not selected"}</p></div>
        <div><p className="text-slate-500">Return</p><p className="font-semibold text-slate-900">{travelType === "Round Trip" ? returnDate || "Not selected" : "Not required"}</p></div>
        <div className="sm:col-span-2">
          <p className="text-slate-500">Passengers</p>
          <p className="font-semibold text-slate-900">{passengerSummary}</p>
        </div>
      </div>
    </div>
  );
}
