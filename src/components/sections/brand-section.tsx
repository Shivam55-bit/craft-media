"use client";

import { motion } from "framer-motion";
import { Package, BarChart2, UserCog, Search, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const brands = [
  {
    name: "DeliveryPlus",
    tagline: "Logistics Platform",
    icon: Package,
    color: "#f47a34",
    bg: "from-[#fff3ec] to-[#ffe6d5]",
    glow: "rgba(244,122,52,0.35)",
  },
  {
    name: "CRM Pro",
    tagline: "Sales Automation",
    icon: BarChart2,
    color: "#7c3aed",
    bg: "from-[#f5f0ff] to-[#ede8ff]",
    glow: "rgba(124,58,237,0.30)",
  },
  {
    name: "HRMS Suite",
    tagline: "People Management",
    icon: UserCog,
    color: "#2563eb",
    bg: "from-[#eff6ff] to-[#dbeafe]",
    glow: "rgba(37,99,235,0.30)",
  },
  {
    name: "SEO Engine",
    tagline: "Growth & Analytics",
    icon: Search,
    color: "#059669",
    bg: "from-[#ecfdf5] to-[#d1fae5]",
    glow: "rgba(5,150,105,0.28)",
  },
];

const miniStats = [
  { icon: TrendingUp, value: "150+", label: "Projects", color: "#f47a34" },
  { icon: Users, value: "85+", label: "Clients", color: "#2563eb" },
  { icon: Sparkles, value: "99%", label: "Satisfaction", color: "#059669" },
  { icon: Zap, value: "4+", label: "Years", color: "#7c3aed" },
];

export default function BrandSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#f2e4d7] bg-gradient-to-b from-[#fffdfa] via-[#fff8f0] to-[#fffdfa] py-16 md:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f47a34" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Ambient glows */}
        <div className="absolute -top-20 left-1/4 h-[280px] w-[280px] rounded-full bg-[#ffd6ba]/40 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/4 h-[280px] w-[280px] rounded-full bg-[#ffc8d6]/40 blur-[100px]" />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              background: ["#f47a34", "#7c3aed", "#2563eb", "#059669", "#f05276", "#ffb327"][i],
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f3dfcc] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#eb712f] shadow-[0_4px_14px_rgba(244,122,52,0.08)]">
            <Sparkles className="h-3 w-3" />
            Trusted by Growing Businesses
          </span>
          <h2 className="mt-2 text-[1.8rem] font-bold leading-tight tracking-[-0.02em] text-[#1a2438] sm:text-[2.2rem]">
            Powering{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#f47a34,#ff5564)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Next-Gen Brands
            </span>{" "}
            Across Industries
          </h2>
          <p className="max-w-xl text-sm text-[#6a758a] leading-relaxed">
            From logistics to SaaS, we build digital products that scale with your business.
          </p>
        </motion.div>

        {/* Brand cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#f1e3d7] bg-white p-6 shadow-[0_8px_24px_rgba(30,20,10,0.05)] transition-shadow hover:shadow-[0_16px_40px_rgba(30,20,10,0.12)]"
            >
              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: brand.glow }}
              />

              {/* Icon with gradient bg */}
              <div className="relative mb-5 flex items-center justify-between">
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.bg} ring-1 ring-black/5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]`}
                >
                  <brand.icon className="h-6 w-6" style={{ color: brand.color }} />
                </motion.span>
              </div>

              {/* Brand name */}
              <h3 className="text-[1.15rem] font-bold tracking-[-0.01em] text-[#1f2a3d]">
                {brand.name}
              </h3>
              <p className="mt-1 text-[12px] font-medium text-[#8e98af]">{brand.tagline}</p>

              {/* Accent bar */}
              <div className="mt-4 flex items-center gap-2">
                <div
                  className="h-1 flex-1 rounded-full opacity-20"
                  style={{ background: brand.color }}
                />
                <div
                  className="h-1 w-8 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{ background: brand.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini stats row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-[#f1e3d7] bg-white/70 backdrop-blur-sm px-6 py-5 sm:gap-10"
        >
          {miniStats.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon className="h-4.5 w-4.5" style={{ color: stat.color }} />
              </span>
              <div>
                <p className="text-[1.1rem] font-extrabold leading-none" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#8e98af]">
                  {stat.label}
                </p>
              </div>
              {idx < miniStats.length - 1 && (
                <span className="hidden h-8 w-px bg-[#f1e3d7] sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


