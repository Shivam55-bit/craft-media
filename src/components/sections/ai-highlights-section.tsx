"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  CloudLightning,
  ShieldCheck,
  Zap,
  Code2,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import laptopImage from "@/src/assets/AIsection_image.png";

const highlights = [
  {
    title: "Generative intelligence",
    text: "AI that learns and responds in real time.",
    icon: Brain,
    accent: "from-[#ff9a62] to-[#f47a34]",
    glow: "group-hover:shadow-[0_18px_45px_-12px_rgba(244,122,52,0.55)]",
  },
  {
    title: "AI-first automation",
    text: "Intelligent workflows & predictive decisioning.",
    icon: CloudLightning,
    accent: "from-[#ff9a62] to-[#f47a34]",
    glow: "group-hover:shadow-[0_18px_45px_-12px_rgba(244,122,52,0.45)]",
  },
  {
    title: "Secure AI operations",
    text: "Scalable, compliant systems that protect data.",
    icon: ShieldCheck,
    accent: "from-[#ff9a62] to-[#f47a34]",
    glow: "group-hover:shadow-[0_18px_45px_-12px_rgba(244,122,52,0.45)]",
  },
];

export default function AIHighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-20 md:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[#ffd7a3]/40 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-[#93c5fd]/40 to-transparent blur-3xl"
        />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-[#c4b5fd]/25 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 items-center lg:grid-cols-2">
          {/* Left Side - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[640px] sm:h-[760px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/80 bg-white/80 shadow-[0_50px_140px_-50px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <div className="absolute inset-y-0 right-0 w-24 rounded-l-full bg-white/90 shadow-[inset_0_0_0_1px_rgba(255,153,82,0.18)]" />
              <div className="relative h-full overflow-hidden">
                <Image
                  src={laptopImage}
                  alt="AI Technology"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute -left-12 top-8 h-24 w-24 rounded-full border-8 border-[#ff9a34]/25 bg-[#ff9a34]/10 blur-2xl" />
              <div className="pointer-events-none absolute right-8 bottom-8 h-20 w-20 rounded-full border border-[#ff9a34]/30 bg-[#ff9a34]/10 shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0e6da] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f47a34] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#f47a34] to-[#2980b9]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f47a34]">
                AI Capabilities
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-[#0f1724] sm:text-5xl lg:text-6xl">
              Intelligent solutions
              <br />
              <span className="inline-block">built for</span>{" "}
              <span className="relative inline-block text-[#f47a34]">
                modern growth
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 h-2.5 w-full origin-left rounded-full bg-gradient-to-r from-[#ff9a62]/70 to-[#f47a34]/90 drop-shadow-[0_6px_14px_rgba(244,122,52,0.18)]"
                />
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#525f7f] leading-relaxed">
                We combine AI, automation, and data strategy to deliver actionable results that keep your business ahead.
              </p>
              <p className="text-base text-[#666d8f] leading-relaxed">
                From AI-powered field operations and intelligent compliance platforms to cloud-native application modernisation, we bring deep sector expertise and advanced technology capability.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -8 }}
                    className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-5 shadow-[0_8px_30px_-12px_rgba(17,24,39,0.18)] backdrop-blur-xl transition-all duration-300 ${item.glow}`}
                  >
                    {/* Top gradient accent line */}
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                    <div className={`inline-flex w-fit rounded-xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-[#111827]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-[#6b7280]">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#f47a34] via-[#2980b9] to-[#2980b9] px-8 py-4 font-semibold text-white shadow-[0_15px_40px_-10px_rgba(41,128,185,0.6)] transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(41,128,185,0.7)]">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2980b9] to-[#f47a34] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Sparkles className="relative h-4 w-4" />
                <span className="relative">Explore Our Solutions</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
