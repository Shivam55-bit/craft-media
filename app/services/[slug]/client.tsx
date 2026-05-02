"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  TrendingUp,
  Globe,
  Code2,
  ShoppingCart,
  Smartphone,
  Phone,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useTheme } from "@/src/context/theme-provider";
import type { ServiceDetail } from "@/src/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Globe,
  Code2,
  ShoppingCart,
  Smartphone,
};

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicePageClient({
  service,
  otherServices,
}: {
  service: ServiceDetail;
  otherServices: ServiceDetail[];
}) {
  useTheme();
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 noise-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-accent/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Service {service.number}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                  {service.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Services
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.shortDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Button size="xl" className="group" asChild>
                    <a href="/contact">
                      Get Free Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="xl" asChild>
                    <a href="tel:+919278127184">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Image */}
            <FadeIn delay={0.3} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <FadeIn>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
                  About This Service
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                  Why Choose Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {service.title}
                  </span>{" "}
                  Service?
                </h2>
                <div className="space-y-5">
                  {service.fullDescription.map((para, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.2}>
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  What&apos;s Included
                </h3>
                <div className="space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border/30 noise-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
                Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Key Benefits
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <motion.div
                  className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden h-full"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-5`}
                    >
                      <span className="text-lg font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-600 to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title} services can help grow
              your business. Get a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold h-14 px-10 text-base bg-white text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919278127184"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold h-14 px-10 text-base bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 border-t border-border/30 noise-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
                Explore More
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Other Services
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {otherServices.map((s, i) => {
              const SIcon = iconMap[s.icon] || Sparkles;
              return (
                <FadeIn key={s.slug} delay={i * 0.05}>
                  <Link href={`/services/${s.slug}`}>
                    <div className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden h-full cursor-pointer">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${s.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="relative z-10">
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg mb-6`}
                        >
                          <SIcon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {s.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {s.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer-like bottom bar */}
      <div className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back to Home
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Craft Media Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
