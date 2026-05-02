"use client";

import Navbar from "@/src/components/navbar";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffdfa] pt-[6rem] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[#fff0e6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#f47a34]">
              Contact Us
            </span>
            <h1 className="mt-4 text-[2.8rem] font-extrabold leading-tight tracking-tight text-[#111827]">
              Let&apos;s Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#f47a34,#ff5564)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Great Together
              </span>
            </h1>
            <p className="mt-4 text-[16px] text-[#6b7280] max-w-xl mx-auto">
              Have a project in mind? Tell us about it — we&apos;d love to help.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Info */}
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email", value: "craftmediahub@gmail.com", color: "text-[#f47a34]", bg: "bg-[#fff0e6]" },
                { icon: Phone, label: "Phone", value: "+91-9278127184", color: "text-[#2563eb]", bg: "bg-[#eff6ff]" },
                { icon: MapPin, label: "Address", value: "Delhi, India", color: "text-[#059669]", bg: "bg-[#ecfdf5]" },
              ].map(({ icon: Icon, label, value, color, bg }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-[#f0e4d8] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]">{label}</p>
                    <p className="text-[14px] font-semibold text-[#111827]">{value}</p>
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="rounded-2xl border border-[#f0e4d8] bg-gradient-to-br from-[#fff9f4] to-[#fff3ec] p-5">
                <p className="text-[13px] font-bold text-[#111827] mb-2">Working Hours</p>
                <p className="text-[13px] text-[#6b7280]">Monday – Saturday</p>
                <p className="text-[14px] font-semibold text-[#f47a34]">10:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-[#f0e4d8] bg-white p-8 shadow-[0_8px_40px_rgba(244,122,52,0.10)]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-4">
                  <CheckCircle className="h-14 w-14 text-[#059669]" />
                  <h3 className="text-[20px] font-bold text-[#111827]">Message Sent!</h3>
                  <p className="text-[14px] text-[#6b7280] max-w-xs">
                    Thank you for reaching out. We&apos;ll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="mt-2 rounded-full bg-[#fff0e6] px-5 py-2 text-[13px] font-semibold text-[#f47a34] hover:bg-[#ffe4cc] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h2 className="text-[18px] font-bold text-[#111827] mb-1">Send us a message</h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#374151]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#f0ddd0] bg-[#fdf8f5] px-4 py-3 text-[13px] text-[#111827] placeholder-[#c0a898] outline-none focus:border-[#ffaa78] focus:ring-2 focus:ring-[#ffaa78]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#374151]">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#f0ddd0] bg-[#fdf8f5] px-4 py-3 text-[13px] text-[#111827] placeholder-[#c0a898] outline-none focus:border-[#ffaa78] focus:ring-2 focus:ring-[#ffaa78]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#374151]">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#f0ddd0] bg-[#fdf8f5] px-4 py-3 text-[13px] text-[#111827] placeholder-[#c0a898] outline-none focus:border-[#ffaa78] focus:ring-2 focus:ring-[#ffaa78]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#374151]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-[#f0ddd0] bg-[#fdf8f5] px-4 py-3 text-[13px] text-[#111827] placeholder-[#c0a898] outline-none focus:border-[#ffaa78] focus:ring-2 focus:ring-[#ffaa78]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffb327] via-[#ff7e38] to-[#ff5564] px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(255,110,60,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,110,60,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
