"use client";

import { useState, useCallback, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Compass,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── constants ──────────────────────────────────── */

// Using Mustang hero image as the decorative travel background
const HERO_IMAGE = "/images/destinations/mustang/hero.jpg";

/* ─── subtle animation variants ──────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: "easeOut" as const },
  }),
} satisfies Variants;

/* ─── component ──────────────────────────────────── */

export default function RegisterPage() {
  /* form state */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* validation trackers */
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
    acceptTerms: false,
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  /* field validation logic */
  const errors = {
    name: touched.name && name.trim().length < 2 ? "Full name is required." : null,
    email:
      touched.email && !email.trim() ? "Email address is required." :
        touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address." : null,
    phone: touched.phone && phone.trim().length < 7 ? "Please enter a valid phone number." : null,
    password:
      touched.password && !password ? "Password is required." :
        touched.password && password.length < 6 ? "Password must be at least 6 characters." : null,
    confirmPassword:
      touched.confirmPassword && !confirmPassword ? "Please confirm your password." :
        touched.confirmPassword && confirmPassword !== password ? "Passwords do not match." : null,
    acceptTerms: touched.acceptTerms && !acceptTerms ? "You must agree to the Terms & Conditions." : null,
  };

  const isFormValid =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    phone.trim().length >= 7 &&
    password.length >= 6 &&
    confirmPassword === password &&
    acceptTerms;

  /* handlers */
  const handleBlur = useCallback(
    (field: keyof typeof touched) => () =>
      setTouched((prev) => ({ ...prev, [field]: true })),
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      // Mark all fields as touched
      setTouched({
        name: true,
        email: true,
        phone: true,
        password: true,
        confirmPassword: true,
        acceptTerms: true,
      });
      setFormError(null);
      setFormSuccess(false);

      if (!isFormValid) return;

      setIsSubmitting(true);

      /* Simulate network delay — replace with real integration later */
      await new Promise((r) => setTimeout(r, 1500));

      /* No backend — show informational message */
      setIsSubmitting(false);
      setFormError(
        "Registration is currently unavailable. This is a UI demonstration."
      );
    },
    [isFormValid]
  );

  /* ─── render ──────────────────────────────── */

  return (
    <main className="relative flex min-h-[calc(100vh-160px)] w-full items-stretch">
      {/* ──────── LEFT: Visual panel (desktop only) ──────── */}
      <div className="relative hidden w-[45%] min-w-[400px] overflow-hidden lg:block">
        {/* hero image */}
        <Image
          src={HERO_IMAGE}
          alt="Scenic view of Mustang, Nepal"
          fill
          priority
          className="object-cover"
          sizes="45vw"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#004AB8]/85 via-[#0091DA]/70 to-transparent" />

        {/* subtle pattern dots */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* content */}
        <div className="relative z-10 flex h-full flex-col p-10 xl:p-14">
          {/* top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <Compass className="h-3.5 w-3.5" />
              MEegin Tours & Travels
            </span>
          </motion.div>

          <div className="mt-auto mb-16 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-3xl font-bold leading-tight tracking-tight text-white xl:text-4xl"
            >
              Discover the <br className="hidden xl:block" />
              Himalayas with us.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="max-w-md text-sm leading-relaxed text-white/85"
            >
              Create your account to save bookings, manage your trips, and plan your Nepal adventures with ease.
            </motion.p>

            {/* feature list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="space-y-4 pt-4"
            >
              {[
                "Easy booking management",
                "Save your favorite trips",
                "Personalized travel plans",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </span>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xs text-white/50"
          >
            Explore Nepal with confidence · meegintravels.com
          </motion.p>
        </div>
      </div>

      {/* ──────── RIGHT: Registration form ──────── */}
      <div className="flex w-full flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-[500px]"
        >
          {/* mobile travel header */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 flex items-center gap-2 text-xs font-medium tracking-wide text-[#0091DA] lg:hidden"
          >
            <Compass className="h-4 w-4" />
            MEegin Tours & Travels
          </motion.div>

          {/* card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/40 sm:rounded-3xl sm:p-9"
          >
            {/* heading */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Join MEegin Tours & Travels
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Create an account to start planning your perfect Nepal adventure.
              </p>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* ── Name & Phone Row ── */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="reg-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      id="reg-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={handleBlur("name")}
                      aria-invalid={!!errors.name}
                      className={cn(
                        "w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                        "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                        errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                      >
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="reg-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone className="h-4 w-4" />
                    </span>
                    <input
                      id="reg-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      placeholder="+977..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={handleBlur("phone")}
                      aria-invalid={!!errors.phone}
                      className={cn(
                        "w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                        "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                        errors.phone ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                      >
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ── Email ── */}
              <div>
                <label htmlFor="reg-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    id="reg-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur("email")}
                    aria-invalid={!!errors.email}
                    className={cn(
                      "w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                      "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                      errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Password ── */}
              <div>
                <label htmlFor="reg-password" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </span>
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    required
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handleBlur("password")}
                    aria-invalid={!!errors.password}
                    className={cn(
                      "w-full rounded-xl border bg-white py-2.5 pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                      "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                      errors.password ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]/40"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Confirm Password ── */}
              <div>
                <label htmlFor="reg-confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </span>
                  <input
                    id="reg-confirm"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleBlur("confirmPassword")}
                    aria-invalid={!!errors.confirmPassword}
                    className={cn(
                      "w-full rounded-xl border bg-white py-2.5 pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                      "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                      errors.confirmPassword ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]/40"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.confirmPassword}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Terms & Conditions ── */}
              <div className="pt-2">
                <label className="flex cursor-pointer select-none items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    onBlur={handleBlur("acceptTerms")}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[#0091DA] accent-[#0091DA] focus:ring-[#0091DA]/30"
                  />
                  <span className="text-sm text-slate-600 leading-snug">
                    I agree to the{" "}
                    <Link href="#" className="font-medium text-[#0091DA] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="font-medium text-[#0091DA] hover:underline">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
                <AnimatePresence>
                  {errors.acceptTerms && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 ml-6.5 text-xs text-red-500"
                    >
                      {errors.acceptTerms}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Form-level messages ── */}
              <AnimatePresence>
                {formError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {formError}
                  </motion.div>
                )}
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="status"
                    className="flex items-start gap-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    Account created! Redirecting...
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Submit ── */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-all duration-200",
                    "bg-[#0091DA] shadow-lg shadow-[#0091DA]/15 hover:bg-[#004AB8] active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8] focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-60"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>

            {/* ── Divider ── */}
            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            {/* ── Login prompt ── */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#0091DA] transition hover:text-[#004AB8] hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-100/50 bg-emerald-50/50 px-5 py-4 text-emerald-800"
          >
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold">Your information is secure</p>
              <p className="mt-1 text-xs text-emerald-700/80">
                We respect your privacy. We use industry-standard encryption to protect your personal details and will never share your data.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Decorative right-side accent (desktop) ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 hidden h-64 w-64 opacity-[0.02] lg:block"
        style={{
          background:
            "linear-gradient(45deg, transparent 33%, #0091DA 33%, #0091DA 66%, transparent 66%)",
          backgroundSize: "20px 20px",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
    </main>
  );
}
