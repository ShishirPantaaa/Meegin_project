"use client";

import { useState, useCallback, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Compass,
  Mountain,
  MapPin,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── constants ──────────────────────────────────── */

const HERO_IMAGE = "/images/destinations/pokhara/pokhara_intro.jpg";

/* ─── subtle animation variants ──────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
} satisfies Variants;

/* ─── component ──────────────────────────────────── */

export default function LoginPage() {
  /* form state */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* validation */
  const [touched, setTouched] = useState({ email: false, password: false });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const emailError =
    touched.email && !email.trim()
      ? "Email address is required."
      : touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? "Please enter a valid email address."
        : null;

  const passwordError =
    touched.password && !password
      ? "Password is required."
      : touched.password && password.length < 6
        ? "Password must be at least 6 characters."
        : null;

  const isFormValid =
    email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    password.length >= 6;

  /* handlers */
  const handleBlur = useCallback(
    (field: "email" | "password") => () =>
      setTouched((prev) => ({ ...prev, [field]: true })),
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setTouched({ email: true, password: true });
      setFormError(null);
      setFormSuccess(false);

      if (!isFormValid) return;

      setIsSubmitting(true);

      /* Simulate network delay — replace with real auth when available */
      await new Promise((r) => setTimeout(r, 1500));

      /* No backend — show informational message */
      setIsSubmitting(false);
      setFormError(
        "Authentication is not yet configured. Please contact the administrator."
      );
    },
    [isFormValid]
  );

  /* ─── render ──────────────────────────────── */

  return (
    <main className="relative flex min-h-[calc(100vh-160px)] w-full items-stretch">
      {/* ──────── LEFT: Visual panel (desktop only) ──────── */}
      <div className="relative hidden w-[48%] overflow-hidden lg:block">
        {/* hero image */}
        <Image
          src={HERO_IMAGE}
          alt="Scenic view of Annapurna mountain range, Nepal"
          fill
          priority
          className="object-cover"
          sizes="48vw"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004AB8]/80 via-[#0091DA]/60 to-[#004AB8]/70" />

        {/* subtle pattern dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">
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

          {/* main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-white xl:text-4xl">
              Your next Nepal
              <br />
              adventure starts here.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              Sign in to manage your bookings, save your favorite destinations,
              and plan your next journey.
            </p>

            {/* mini feature list */}
            <div className="space-y-3 pt-2">
              {[
                { icon: MapPin, text: "100+ curated destinations" },
                { icon: Mountain, text: "Expert local guides" },
                { icon: CheckCircle2, text: "Trusted by 2,000+ travelers" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-3.5 w-3.5 text-white/90" />
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xs text-white/50"
          >
            Explore Nepal with confidence · meegintravels.com
          </motion.p>
        </div>
      </div>

      {/* ──────── RIGHT: Login form ──────── */}
      <div className="flex w-full flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-[440px]"
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
            className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-lg shadow-slate-200/40 sm:rounded-3xl sm:p-9"
          >
            {/* heading */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Sign in to continue your journey with{" "}
                <span className="font-medium text-[#004AB8]">
                  MEegin Tours & Travels
                </span>
                .
              </p>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* ── Email ── */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur("email")}
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={cn(
                      "w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                      "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                      emailError
                        ? "border-red-300 focus:border-red-400 focus:ring-red-400/15"
                        : "border-slate-200"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {emailError && (
                    <motion.p
                      id="email-error"
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {emailError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Password ── */}
              <div>
                <label
                  htmlFor="login-password"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </span>
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handleBlur("password")}
                    aria-invalid={!!passwordError}
                    aria-describedby={
                      passwordError ? "password-error" : undefined
                    }
                    className={cn(
                      "w-full rounded-xl border bg-white py-3 pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400",
                      "focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                      passwordError
                        ? "border-red-300 focus:border-red-400 focus:ring-red-400/15"
                        : "border-slate-200"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]/40"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {passwordError && (
                    <motion.p
                      id="password-error"
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {passwordError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Remember me / Forgot password ── */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="remember-me"
                  className="flex cursor-pointer items-center gap-2 select-none"
                >
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-[#0091DA] accent-[#0091DA] focus:ring-[#0091DA]/30"
                  />
                  <span className="text-sm text-slate-600">Remember me</span>
                </label>
                <Link
                  href="#"
                  className="text-sm font-medium text-[#0091DA] transition hover:text-[#004AB8] hover:underline"
                >
                  Forgot password?
                </Link>
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
                    Login successful! Redirecting…
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Submit ── */}
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
                    Signing in…
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* ── Divider ── */}
            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            {/* ── Registration prompt ── */}
            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#0091DA] transition hover:text-[#004AB8] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </motion.div>

          {/* bottom tagline (mobile) */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 text-center text-xs text-slate-400 lg:hidden"
          >
            Explore Nepal with confidence · meegintravels.com
          </motion.p>
        </motion.div>
      </div>

      {/* ─── Decorative mountain silhouette (bottom-right, desktop) ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 hidden h-24 w-64 opacity-[0.03] lg:block"
        style={{
          background:
            "linear-gradient(135deg, transparent 33%, #0091DA 33%, #0091DA 66%, transparent 66%)",
          clipPath: "polygon(0% 100%, 20% 40%, 40% 70%, 60% 25%, 80% 55%, 100% 10%, 100% 100%)",
        }}
      />
    </main>
  );
}
