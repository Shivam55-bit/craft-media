"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Layers,
  Monitor,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import laptopMobileImg from "@/src/assets/laptop_mobile_image.png";
import craftHubLogo from "@/src/assets/Carft_hub_logo.png";

const stats = [
  { value: "150+", label: "Projects Delivered", icon: Monitor, iconBg: "bg-[#fff0e6]", iconColor: "text-[#f47a34]", numColor: "text-[#f47a34]", arcColor: "#f47a34" },
  { value: "85+", label: "Happy Clients", icon: Users, iconBg: "bg-[#e8f5ff]", iconColor: "text-[#2d9cdb]", numColor: "text-[#2d9cdb]", arcColor: "#2d9cdb" },
  { value: "4+", label: "Years Experience", icon: Layers, iconBg: "bg-[#f0f8ee]", iconColor: "text-[#27ae60]", numColor: "text-[#27ae60]", arcColor: "#27ae60" },
  { value: "24/7", label: "Support Available", icon: Zap, iconBg: "bg-[#fdf0ff]", iconColor: "text-[#9b59b6]", numColor: "text-[#9b59b6]", arcColor: "#9b59b6" },
];

const floatingCards = [
  {
    title: "Scalable Solutions",
    icon: TrendingUp,
    pos: "top-[4%] right-[8%]",
    iconBg: "bg-[#fff0e8] text-[#f47a34]",
    floatY: [0, -8, 0],
    duration: 4.5,
    delay: 0.2,
  },
  {
    title: "Modern Technology",
    icon: Sparkles,
    pos: "top-[36%] -left-[1%]",
    iconBg: "bg-[#e8f3ff] text-[#2980b9]",
    floatY: [0, -6, 0],
    duration: 5.2,
    delay: 0.65,
  },
  {
    title: "Results Driven",
    icon: Target,
    pos: "bottom-[20%] right-[1%]",
    iconBg: "bg-[#fff0f0] text-[#e74c3c]",
    floatY: [0, -7, 0],
    duration: 4.8,
    delay: 1.0,
  },
];

const particles = [
  { pos: "top-[18%] left-[12%]", size: "h-3 w-3", shape: "rounded-sm", colors: "from-[#ffd761] to-[#ff8751]", delay: 0, dur: 4.2 },
  { pos: "top-[26%] right-[16%]", size: "h-2 w-2", shape: "rounded-full", colors: "from-[#ff9a7a] to-[#ff5f62]", delay: 0.5, dur: 5.0 },
  { pos: "top-[62%] right-[6%]", size: "h-2.5 w-2.5", shape: "rotate-45", colors: "from-[#ffd761] to-[#ff7f3f]", delay: 0.8, dur: 3.8 },
  { pos: "bottom-[30%] left-[6%]", size: "h-2 w-2", shape: "rounded-full", colors: "from-[#ffb347] to-[#ff6b6b]", delay: 1.2, dur: 4.5 },
  { pos: "bottom-[16%] right-[24%]", size: "h-3.5 w-3.5", shape: "rounded-sm rotate-12", colors: "from-[#ffe082] to-[#ff8c42]", delay: 0.3, dur: 5.5 },
  { pos: "top-[8%] right-[38%]", size: "h-1.5 w-1.5", shape: "rounded-full", colors: "from-[#ffc0cb] to-[#ff6080]", delay: 1.5, dur: 4.0 },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fffdfa] pb-16 pt-[5.5rem] md:pb-20 md:pt-[6rem]">

      {/* ── Background Layer ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.038]"
          style={{ backgroundImage: "radial-gradient(circle, #c87941 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Ambient blobs */}
        <div className="absolute -left-52 -top-24 h-[540px] w-[540px] rounded-full bg-[#ffd7a6]/55 blur-[160px]" />
        <div className="absolute -right-24 -top-10 h-[540px] w-[540px] rounded-full bg-[#ffe4c6]/55 blur-[170px]" />
        <div className="absolute -bottom-24 left-1/4 h-[400px] w-[400px] rounded-full bg-[#ffd9d3]/50 blur-[140px]" />
        <div className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-[#ffe0b2]/35 blur-[130px]" />

        {/* ── Background logo watermark ── */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.065]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={craftHubLogo}
            alt=""
            width={820}
            height={820}
            className="h-[820px] w-[820px] object-contain"
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Floating Laptop – left side ── */}
        <motion.div
          className="absolute left-[3%] top-[22%] opacity-[0.13]"
          animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="110" height="82" viewBox="0 0 110 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* screen lid */}
            <rect x="12" y="4" width="86" height="56" rx="5" stroke="url(#lapGrad1)" strokeWidth="2.5" fill="none"/>
            {/* screen inner bezel */}
            <rect x="18" y="10" width="74" height="44" rx="3" stroke="url(#lapGrad1)" strokeWidth="1.2" fill="url(#lapFill)" fillOpacity="0.18"/>
            {/* small screen content lines */}
            <line x1="26" y1="22" x2="82" y2="22" stroke="url(#lapGrad1)" strokeWidth="1.4" strokeLinecap="round"/>
            <line x1="26" y1="30" x2="64" y2="30" stroke="url(#lapGrad1)" strokeWidth="1.1" strokeLinecap="round"/>
            <line x1="26" y1="38" x2="74" y2="38" stroke="url(#lapGrad1)" strokeWidth="1.1" strokeLinecap="round"/>
            <line x1="26" y1="46" x2="56" y2="46" stroke="url(#lapGrad1)" strokeWidth="1.1" strokeLinecap="round"/>
            {/* base */}
            <path d="M4 63 L8 63 L12 63 L98 63 L102 63 L106 63 Q109 63 109 66 L109 68 Q109 70 107 70 L3 70 Q1 70 1 68 L1 66 Q1 63 4 63Z" stroke="url(#lapGrad1)" strokeWidth="2" fill="url(#lapFill)" fillOpacity="0.12"/>
            {/* hinge */}
            <line x1="12" y1="62" x2="12" y2="64" stroke="url(#lapGrad1)" strokeWidth="1.5"/>
            <line x1="98" y1="62" x2="98" y2="64" stroke="url(#lapGrad1)" strokeWidth="1.5"/>
            {/* trackpad */}
            <rect x="44" y="64.5" width="22" height="4" rx="1.5" stroke="url(#lapGrad1)" strokeWidth="1" fill="none"/>
            <defs>
              <linearGradient id="lapGrad1" x1="0" y1="0" x2="110" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffb347"/>
                <stop offset="1" stopColor="#ff6b35"/>
              </linearGradient>
              <linearGradient id="lapFill" x1="0" y1="0" x2="110" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffd190"/>
                <stop offset="1" stopColor="#ff8c50"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* ── Floating Mobile – right side top ── */}
        <motion.div
          className="absolute right-[4%] top-[12%] opacity-[0.12]"
          animate={{ y: [0, -22, 0], rotate: [6, -6, 6] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <svg width="46" height="82" viewBox="0 0 46 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* body */}
            <rect x="2" y="2" width="42" height="78" rx="8" stroke="url(#mobGrad1)" strokeWidth="2.2" fill="url(#mobFill)" fillOpacity="0.14"/>
            {/* screen */}
            <rect x="6" y="12" width="34" height="54" rx="3" stroke="url(#mobGrad1)" strokeWidth="1.2" fill="none"/>
            {/* notch */}
            <rect x="16" y="5" width="14" height="4" rx="2" stroke="url(#mobGrad1)" strokeWidth="1" fill="url(#mobFill)" fillOpacity="0.3"/>
            {/* home bar */}
            <rect x="16" y="72" width="14" height="3" rx="1.5" fill="url(#mobGrad1)"/>
            {/* mini screen content */}
            <line x1="12" y1="26" x2="34" y2="26" stroke="url(#mobGrad1)" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="12" y1="34" x2="28" y2="34" stroke="url(#mobGrad1)" strokeWidth="1" strokeLinecap="round"/>
            <rect x="12" y="42" width="10" height="10" rx="2" stroke="url(#mobGrad1)" strokeWidth="1" fill="url(#mobFill)" fillOpacity="0.22"/>
            <rect x="26" y="42" width="10" height="10" rx="2" stroke="url(#mobGrad1)" strokeWidth="1" fill="url(#mobFill)" fillOpacity="0.22"/>
            <line x1="12" y1="58" x2="34" y2="58" stroke="url(#mobGrad1)" strokeWidth="1" strokeLinecap="round"/>
            <defs>
              <linearGradient id="mobGrad1" x1="0" y1="0" x2="46" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffc87a"/>
                <stop offset="1" stopColor="#ff5f62"/>
              </linearGradient>
              <linearGradient id="mobFill" x1="0" y1="0" x2="46" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffd9a0"/>
                <stop offset="1" stopColor="#ff8c72"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* ── Floating Laptop (small) – right side bottom ── */}
        <motion.div
          className="absolute bottom-[14%] right-[6%] opacity-[0.10]"
          animate={{ y: [0, -14, 0], rotate: [3, -5, 3] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <svg width="78" height="58" viewBox="0 0 78 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="3" width="62" height="40" rx="4" stroke="url(#lapGrad2)" strokeWidth="2" fill="none"/>
            <rect x="13" y="8" width="52" height="30" rx="2.5" stroke="url(#lapGrad2)" strokeWidth="1" fill="url(#lapFill2)" fillOpacity="0.15"/>
            <line x1="19" y1="16" x2="59" y2="16" stroke="url(#lapGrad2)" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="19" y1="22" x2="46" y2="22" stroke="url(#lapGrad2)" strokeWidth="1" strokeLinecap="round"/>
            <line x1="19" y1="28" x2="52" y2="28" stroke="url(#lapGrad2)" strokeWidth="1" strokeLinecap="round"/>
            <path d="M2 45 L76 45 Q78 45 78 47 L78 49 Q78 51 76 51 L2 51 Q0 51 0 49 L0 47 Q0 45 2 45Z" stroke="url(#lapGrad2)" strokeWidth="1.5" fill="url(#lapFill2)" fillOpacity="0.10"/>
            <rect x="32" y="46" width="14" height="3" rx="1" stroke="url(#lapGrad2)" strokeWidth="0.8" fill="none"/>
            <defs>
              <linearGradient id="lapGrad2" x1="0" y1="0" x2="78" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffc066"/>
                <stop offset="1" stopColor="#ff7043"/>
              </linearGradient>
              <linearGradient id="lapFill2" x1="0" y1="0" x2="78" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffd9a0"/>
                <stop offset="1" stopColor="#ff8c60"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* ── Floating Mobile (small) – left side bottom ── */}
        <motion.div
          className="absolute bottom-[18%] left-[5%] opacity-[0.09]"
          animate={{ y: [0, -16, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 7.0, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
        >
          <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="30" height="56" rx="6" stroke="url(#mobGrad2)" strokeWidth="2" fill="url(#mobFill2)" fillOpacity="0.12"/>
            <rect x="5" y="10" width="24" height="38" rx="2" stroke="url(#mobGrad2)" strokeWidth="1" fill="none"/>
            <rect x="11" y="4.5" width="12" height="3" rx="1.5" stroke="url(#mobGrad2)" strokeWidth="0.9" fill="none"/>
            <rect x="11" y="52" width="12" height="2.5" rx="1.2" fill="url(#mobGrad2)"/>
            <line x1="9" y1="20" x2="25" y2="20" stroke="url(#mobGrad2)" strokeWidth="1" strokeLinecap="round"/>
            <line x1="9" y1="27" x2="20" y2="27" stroke="url(#mobGrad2)" strokeWidth="0.9" strokeLinecap="round"/>
            <rect x="9" y="33" width="7" height="7" rx="1.5" stroke="url(#mobGrad2)" strokeWidth="0.8" fill="url(#mobFill2)" fillOpacity="0.2"/>
            <rect x="18" y="33" width="7" height="7" rx="1.5" stroke="url(#mobGrad2)" strokeWidth="0.8" fill="url(#mobFill2)" fillOpacity="0.2"/>
            <defs>
              <linearGradient id="mobGrad2" x1="0" y1="0" x2="34" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffc46e"/>
                <stop offset="1" stopColor="#ff6050"/>
              </linearGradient>
              <linearGradient id="mobFill2" x1="0" y1="0" x2="34" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffd9a0"/>
                <stop offset="1" stopColor="#ff8c72"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Animated SVG curves */}
        <svg className="absolute left-0 top-1/4 w-full opacity-60" viewBox="0 0 1440 480" fill="none">
          <motion.path
            d="M-80 360C180 130 400 420 680 270C900 150 1020 165 1280 260C1380 298 1540 280 1600 275"
            stroke="url(#lg1)"
            strokeWidth="1.4"
            strokeDasharray="10 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
          />
          <motion.path
            d="M-80 240C160 400 360 120 640 300C840 420 1000 160 1260 310C1380 360 1500 290 1600 320"
            stroke="url(#lg2)"
            strokeWidth="1.0"
            strokeDasharray="6 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffd28d" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#ff9956" stopOpacity="0.90" />
              <stop offset="1" stopColor="#ff5b64" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="lg2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffb347" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#ff7043" stopOpacity="0.60" />
              <stop offset="1" stopColor="#ff5252" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-4">

          {/* ── LEFT COLUMN ──────────────────────────────── */}
          <div>
            {/* Badge with shimmer sweep */}
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#f5d7bc] bg-white px-4 py-2 text-xs font-semibold text-[#e66b2e] shadow-[0_8px_20px_rgba(255,137,64,0.10)]"
            >
              <motion.span
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <Sparkles className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">We Build Digital Excellence</span>
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="mt-7 text-[2.45rem] font-bold leading-[1.06] tracking-[-0.025em] text-[#111927] sm:text-5xl lg:text-[4.1rem]"
            >
              Innovative Solutions.
              <br />
              Stronger{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#ffb327] via-[#ff7d3a] to-[#ff4f67] bg-clip-text text-transparent">
                Businesses.
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#ffb327] via-[#ff7d3a] to-[#ff4f67]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.6 }}
              className="mt-6 max-w-[500px] text-[1.03rem] leading-[1.88] text-[#59657a]"
            >
              We deliver powerful IT solutions that help startups, SMEs and enterprises
              grow, automate and scale effortlessly.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#services"
                className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#ffbe33] via-[#ff8a3c] to-[#ff5965] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,127,67,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(255,127,67,0.44)]"
              >
                <motion.span
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/28 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 2.0, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                />
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#ecdccd] bg-white px-6 text-sm font-semibold text-[#1c2434] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f0a97a] hover:shadow-[0_10px_24px_rgba(244,122,52,0.14)]"
              >
                View Our Work
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1c2434] text-white">
                  <Play className="h-3 w-3" />
                </span>
              </a>
            </motion.div>

            {/* Client avatars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex items-center">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                ].map((src, i) => (
                  <span
                    key={i}
                    style={{ marginLeft: i === 0 ? 0 : "-10px" }}
                    className="relative inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-[0_3px_8px_rgba(0,0,0,0.10)]"
                  >
                    <Image
                      src={src}
                      alt={`Client ${i + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-2xl font-bold leading-none text-[#f56d2d]">120+</p>
                <p className="mt-0.5 text-[0.80rem] text-[#566176]">Happy Clients</p>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.33, duration: 0.55 }}
              className="mt-9 grid grid-cols-2 gap-3 rounded-2xl border border-[#f0e1d4] bg-white/80 p-4 shadow-[0_20px_55px_rgba(37,27,14,0.07)] backdrop-blur-sm sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  className="cursor-default flex flex-col items-center text-center rounded-xl border border-[#f7ede4] bg-[#fffdfb] px-3 py-4"
                >
                  {/* Circular arc icon */}
                  <div className="relative h-[72px] w-[72px]">
                    <svg
                      width="72" height="72" viewBox="0 0 72 72"
                      style={{ transform: "rotate(-135deg)" }}
                      className="absolute inset-0"
                    >
                      {/* track */}
                      <circle cx="36" cy="36" r="30" fill="none" stroke="#f0ebe4" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="141.4 47.1" />
                      {/* colored arc */}
                      <motion.circle
                        cx="36" cy="36" r="30" fill="none"
                        stroke={stat.arcColor} strokeWidth="2.5" strokeLinecap="round"
                        strokeDasharray="141.4 47.1"
                        initial={{ strokeDashoffset: 141.4 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                      />
                    </svg>
                    <div className={`absolute inset-[9px] flex items-center justify-center rounded-full ${stat.iconBg}`}>
                      <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <p className={`mt-2.5 text-[22px] font-bold leading-none ${stat.numColor}`}>{stat.value}</p>
                  <p className="mt-1.5 text-[11px] text-[#7a8599] leading-tight">{stat.label}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <div className="h-[2px] w-7 rounded-full" style={{ background: stat.arcColor }} />
                    <div className="h-[5px] w-[5px] rounded-full" style={{ background: stat.arcColor }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div className="relative mx-auto mt-4 w-full lg:mt-0">

            {/* Radial warm glow behind image */}
            <div className="absolute inset-x-0 top-[8%] mx-auto h-[460px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,185,90,0.55)_0%,rgba(255,140,80,0.25)_40%,transparent_72%)] blur-[60px]" />
            {/* Bottom pedestal glow */}
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 h-14 w-[340px] rounded-full bg-gradient-to-r from-[#ffd7a8]/55 via-[#ff9a64]/80 to-[#ff6d68]/55 blur-2xl" />

            {/* ── Floating mini particles ── */}
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className={`absolute ${p.pos} ${p.size} ${p.shape} bg-gradient-to-br ${p.colors} opacity-85`}
                animate={{ y: [0, -9, 0], rotate: [0, 22, 0], scale: [1, 1.18, 1] }}
                transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              />
            ))}

            {/* ── Main image — floating ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto w-full"
              >
                <Image
                  src={laptopMobileImg}
                  alt="Craft Media Hub dashboard on laptop and mobile"
                  className="relative z-10 h-auto w-full scale-110 object-contain drop-shadow-[0_40px_80px_rgba(255,130,60,0.32)]"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* ── Glassmorphism floating info cards ── */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.85, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.52, delay: card.delay }}
                className={`absolute ${card.pos} z-20`}
              >
                <motion.div
                  animate={{ y: card.floatY }}
                  transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_44px_rgba(20,20,20,0.11)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl ${card.iconBg}`}>
                      <card.icon className="h-4 w-4" />
                    </span>
                    <p className="whitespace-nowrap text-[0.82rem] font-semibold text-[#253047]">{card.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
