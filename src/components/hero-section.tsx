"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Bot,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Code2,
  Globe2,
} from "lucide-react";
import bannerImage from "@/src/assets/bannercraft.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff8f1] pt-[8.5rem]"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,190,51,0.35),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(255,79,103,0.24),transparent_28%),linear-gradient(135deg,#fffdf9_0%,#fff4e9_45%,#fff8f1_100%)]" />

        <div className="absolute left-[-140px] top-[160px] h-[420px] w-[420px] rounded-full bg-[#ffb327]/30 blur-[100px]" />
        <div className="absolute right-[-180px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#ff5965]/20 blur-[120px]" />
        <div className="absolute bottom-[-180px] left-[38%] h-[480px] w-[480px] rounded-full bg-[#ff7d3a]/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,122,52,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(244,122,52,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-[1380px] grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-[680px]"
        >
          {/* <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#ef6f2f] shadow-[0_14px_35px_rgba(255,122,52,0.16)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            We Build Digital Excellence
          </motion.div> */}

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-[3.2rem] font-black leading-[0.92] tracking-[-0.065em] text-[#07111f] sm:text-[4.7rem] lg:text-[5.8rem]"
          >
            Build.
            <br />
            Automate.
            <br />
            <span className="relative inline-block bg-gradient-to-r from-[#ffb327] via-[#ff7d3a] to-[#ff4f67] bg-clip-text text-transparent">
              Scale Faster.
              <span className="absolute -bottom-2 left-1 h-2 w-[95%] rounded-full bg-gradient-to-r from-[#ffb327]/45 via-[#ff7d3a]/35 to-[#ff4f67]/45 blur-sm" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[600px] text-[1.08rem] leading-[1.9] text-[#334155]"
          >
            We create premium websites, AI automation systems, dashboards,
            mobile apps, and digital growth solutions that help modern
            businesses grow smarter.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {[
              { icon: Bot, title: "AI Automation", desc: "Smart workflows" },
              { icon: Code2, title: "Web Development", desc: "Modern UI systems" },
              { icon: Globe2, title: "Digital Growth", desc: "SEO + Marketing" },
              { icon: ShieldCheck, title: "Secure Platforms", desc: "Scalable backend" },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/70 bg-white/70 p-4 shadow-[0_16px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_50px_rgba(244,122,52,0.16)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb327] via-[#ff7d3a] to-[#ff4f67] text-white shadow-[0_10px_24px_rgba(255,122,52,0.28)]">
                    <item.icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-sm font-black text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#64748b]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="group relative inline-flex h-14 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ffb327] via-[#ff813a] to-[#ff4f67] px-8 text-sm font-black text-white shadow-[0_22px_50px_rgba(255,122,52,0.42)] transition-all duration-300 hover:-translate-y-1"
            >
              <motion.span
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/80 bg-white/80 px-7 text-sm font-black text-[#111827] shadow-[0_16px_38px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              View Work
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white">
                <Play className="h-3.5 w-3.5 fill-white" />
              </span>
            </a>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-6 rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          >
            {[
              ["50+", "Projects"],
              ["30+", "Brands"],
              ["24/7", "Support"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-black text-[#0f172a]">{num}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 70 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative z-10 hidden min-h-[650px] items-center justify-center lg:flex"
        >
          <div className="absolute h-[620px] w-[620px] rounded-full bg-gradient-to-br from-[#ffb327]/35 via-[#ff7d3a]/25 to-[#ff4f67]/25 blur-[75px]" />

          <div className="absolute h-[540px] w-[540px] rounded-full border border-white/60" />
          <div className="absolute h-[440px] w-[440px] rounded-full border border-orange-200/50" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[650px] w-full max-w-[760px]"
          >
            <Image
              src={bannerImage}
              alt="Craft Media Hub Digital Solutions"
              fill
              priority
              className="object-contain drop-shadow-[0_35px_90px_rgba(255,122,52,0.34)]"
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-20 rounded-3xl border border-white/75 bg-white/75 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb327] to-[#ff7d3a] text-white">
                <Bot className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#64748b]">Automation</p>
                <p className="text-base font-black text-[#0f172a]">
                  AI Workflow
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 right-0 rounded-3xl border border-white/75 bg-white/80 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7d3a] to-[#ff4f67] text-white">
                <Rocket className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#64748b]">Growth</p>
                <p className="text-base font-black text-[#0f172a]">
                  Scale Faster
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-36 rounded-full border border-white/70 bg-white/75 px-5 py-3 text-sm font-black text-[#0f172a] shadow-[0_20px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl"
          >
            +24.8% Growth
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}