"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, ShieldCheck, Zap } from "lucide-react";
import bannerImage from "@/src/assets/craftme_banner.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Brands Trusted" },
  { value: "24/7", label: "Support" },
];

const pills = [
  { icon: Zap, label: "AI Automation" },
  { icon: ShieldCheck, label: "Secure & Scalable" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fffaf4] pb-20 pt-[6.5rem] md:pb-24 md:pt-[7rem]"
    >
      {/* Background Video */}
      <div className="pointer-events-none absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/banner_video2.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1726]/60 via-[#0b1726]/50 to-[#0b1726]/70" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1320px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:gap-10 lg:px-10">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-[640px]"
        >
         

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.85rem] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.9rem] lg:text-[4.6rem]"
          >
            Innovative Solutions.
            <br />
            Stronger{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#ffb327] via-[#ff7d3a] to-[#ff4f67] bg-clip-text text-transparent">
              Businesses.
              <span className="absolute -bottom-1.5 left-0.5 h-2 w-[96%] rounded-full bg-gradient-to-r from-[#ffb327]/45 via-[#ff7d3a]/35 to-[#ff4f67]/45 blur-[3px]" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[540px] text-[1.05rem] leading-[1.85] text-white/90"
          >
            We deliver powerful AI-driven solutions that help startups, SMEs, and
            enterprises grow, automate, and scale with intelligent automation.
          </motion.p>

          {/* Highlight pills */}
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            {pills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md"
              >
                <Icon className="h-4 w-4 text-[#ffb327]" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#ffbe33] via-[#ff8a3c] to-[#ff5965] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(255,127,67,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(255,127,67,0.46)]"
            >
              <motion.span
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-120%", "240%"] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
              <span className="relative z-10">Explore AI Services</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/20 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/30"
            >
              View AI Projects
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1c2434]">
                <Play className="h-3 w-3 fill-[#1c2434]" />
              </span>
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["#ffb327", "#ff8a3c", "#ff5965", "#f47a34"].map((c, i) => (
                  <span
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${c}, #ffd9b8)` }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#ffb020]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs font-medium text-white/80">
                  Loved by 100+ clients
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/30 sm:block" />

            <div className="flex flex-wrap gap-7">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-xs font-medium text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
