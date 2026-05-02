"use client";

import { Section, Container } from "@/src/components/ui/section";
import { FadeIn } from "@/src/components/ui/motion";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const services = [
  "SEO",
  "Digital Marketing",
  "Web Designing",
  "Web Development",
  "SMO",
  "PPC",
  "Content Writing",
];

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6"
              animate={{ boxShadow: ["0 0 0px rgba(124,58,237,0)", "0 0 15px rgba(124,58,237,0.1)", "0 0 0px rgba(124,58,237,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Get In Touch
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-3xl mx-auto">
              Ready to start your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
                digital journey
              </span>
              ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <h3 className="text-lg font-bold text-foreground">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Head Office</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Office No 10114, Gour City Mall,<br />Greater Noida, U.P.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Email</div>
                      <a href="mailto:craftmediahub@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        craftmediahub@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Phone / WhatsApp</div>
                      <a href="tel:+919278127184" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        +91-9278127184
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: "Facebook", href: "https://www.facebook.com/craftmediahub/" },
                    { name: "Instagram", href: "https://www.instagram.com/craftmediahub/" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/craftmediahub/" },
                    { name: "YouTube", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Select Service</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Choose a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="xl" className="w-full group" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-500 justify-center mt-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-500 justify-center mt-3">
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
