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
    <section className="relative overflow-hidden border-y border-[#f3e7db] bg-[#fffaf4] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(244,122,52,0.17),transparent_35%),radial-gradient(circle_at_86%_72%,rgba(37,99,235,0.15),transparent_36%),radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.10),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,122,52,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,122,52,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />
        <motion.div
          className="absolute -left-16 top-20 h-56 w-56 rounded-full bg-[#ffd2b5]/60 blur-[85px]"
          animate={{ y: [0, 26, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#c9d9ff]/50 blur-[95px]"
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f4dcc8] bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dc6f34] shadow-[0_8px_24px_rgba(244,122,52,0.12)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by Growing Businesses
          </span>

          <h2 className="mt-5 text-[1.95rem] font-extrabold leading-tight tracking-[-0.03em] text-[#1a2138] sm:text-[2.55rem]">
            Powering{" "}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(110deg,#f47a34 10%,#ec4899 48%,#2563eb 92%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Next-Gen Brands
            </span>{" "}
            Across Industries
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#69758d]">
            From logistics to SaaS, we build digital products that scale with your business.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <motion.article
              key={brand.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.45rem] border border-white/70 bg-white/75 p-5 shadow-[0_14px_34px_rgba(34,20,8,0.10)] backdrop-blur"
            >
              <div
                className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: brand.glow }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.45rem] ring-1 ring-black/[0.03]" />

              <div className="relative mb-6 flex items-center justify-between">
                <motion.span
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.55 }}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.bg} shadow-[0_10px_24px_rgba(20,20,40,0.12)]`}
                >
                  <brand.icon className="h-6 w-6" style={{ color: brand.color }} />
                </motion.span>
                <span className="rounded-full border border-[#efe0d2] bg-[#fffaf6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a07656]">
                  Live
                </span>
              </div>

              <h3 className="text-[1.14rem] font-extrabold tracking-[-0.015em] text-[#212a3f]">{brand.name}</h3>
              <p className="mt-1 text-[12px] font-medium text-[#8a95aa]">{brand.tagline}</p>

              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f2e7dc]">
                  <motion.div
                    initial={{ width: "35%" }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.08 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg,${brand.color},#ffffff)` }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 rounded-3xl border border-[#f2dfcd] bg-white/80 px-4 py-4 shadow-[0_16px_36px_rgba(25,17,10,0.08)] backdrop-blur sm:px-6 sm:py-5"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {miniStats.map((stat) => (
              <div
                key={stat.label}
                className="group flex items-center gap-3 rounded-2xl border border-[#f5e8dc] bg-[#fffdfb] px-4 py-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${stat.color}18` }}
                >
                  <stat.icon className="h-4.5 w-4.5" style={{ color: stat.color }} />
                </span>
                <div>
                  <p className="text-[1.08rem] font-extrabold leading-none" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f9ab0]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


