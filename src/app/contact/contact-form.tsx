"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Enquiry",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setStatus("submitting");

        // Simulate sending time
        setTimeout(() => {
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "General Enquiry",
                message: ""
            });
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-4xl border border-slate-100 bg-[#F7FAFC] p-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#ECF8EF] text-[#068835] shadow-sm mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">Enquiry Sent Successfully</h3>
                <p className="mt-4 text-base text-slate-600 max-w-sm">
                    Thank you for reaching out! Our travel team will review your message and get back to you shortly.
                </p>
                <Button
                    className="mt-8 bg-[#0091DA] hover:bg-[#004AB8] focus-visible:ring-[#0091DA]"
                    onClick={() => setStatus("idle")}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
                <div className="flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-red-600">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Please fill in all required fields.</p>
                </div>
            )}

            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F7FAFC] px-4 py-3 text-sm text-slate-900 focus:border-[#0091DA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-colors"
                    placeholder="Enter your full name"
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F7FAFC] px-4 py-3 text-sm text-slate-900 focus:border-[#0091DA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F7FAFC] px-4 py-3 text-sm text-slate-900 focus:border-[#0091DA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-colors"
                        placeholder="Optional phone number"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">
                    Subject / Enquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-[#F7FAFC] px-4 py-3 text-sm text-slate-900 focus:border-[#0091DA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-colors"
                >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Tour Information">Tour Information</option>
                    <option value="Booking Assistance">Booking Assistance</option>
                    <option value="Custom Trip">Custom Trip</option>
                    <option value="Destination Information">Destination Information</option>
                    <option value="Group Travel">Group Travel</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-y rounded-2xl border border-slate-200 bg-[#F7FAFC] px-4 py-3 text-sm text-slate-900 focus:border-[#0091DA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-colors"
                    placeholder="Tell us about your travel plans..."
                />
            </div>

            <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto mt-2 h-12 bg-[#0091DA] px-8 text-base font-semibold text-white hover:bg-[#004AB8] focus-visible:ring-[#0091DA] transition-colors"
            >
                {status === "submitting" ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-5 w-5" /> Send Enquiry
                    </>
                )}
            </Button>
        </form>
    );
}
