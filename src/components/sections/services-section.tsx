"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Globe,
  Handshake,
  Smartphone,
  Users,
} from "lucide-react";

/* ─── Tech Stack Logo SVGs (inline) ─── */
const TechLogos = {
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  NextJS: (
    <svg viewBox="0 0 180 180" className="h-full w-full">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path d="M149.5 142.7 53.3 45H45v90h6.7V53.4L144.3 146c2.7-1.8 2.8-1.9 5.2-3.3ZM115 45h6.7v62H115Z" fill="#fff" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 128 128" className="h-full w-full">
      <path fill="#47c5fb" d="M12.3 64.2 76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l22.7-22.5H64.9z" />
      <path fill="#00569e" d="m81.6 93.9 22.7-22.5H64.9L52.1 84.2z" />
      <path fill="#00b5f8" d="M52.1 84.2 77 59.3h26.3L64.9 97.7z" />
      <path fill="url(#a)" d="M52 84.3 82 74l-4.5 4.4z" opacity=".8" />
      <defs>
        <linearGradient id="a" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1a237e" stopOpacity=".4" />
          <stop offset="1" stopColor="#1a237e" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Apple: (
    <svg viewBox="0 0 24 24" fill="#000" className="h-full w-full">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  ),
  Android: (
    <svg viewBox="0 0 24 24" fill="#3ddc84" className="h-full w-full">
      <path d="M17.523 15.341a1 1 0 100-2 1 1 0 000 2zm-11.046 0a1 1 0 100-2 1 1 0 000 2zm11.4-6.305l1.997-3.46a.416.416 0 10-.72-.416l-2.022 3.503A12.582 12.582 0 0012 7.53c-1.837 0-3.573.39-5.132 1.133L4.846 5.16a.416.416 0 10-.72.416L6.123 9.037C2.7 10.9.487 14.208.02 18h23.96c-.467-3.792-2.68-7.1-6.103-8.964z" />
    </svg>
  ),
  Salesforce: (
    <svg viewBox="0 0 273 191" className="h-full w-full">
      <path fill="#00a1e0" d="M113.5 21c8.8-9.2 21-14.8 34.5-14.8 17.9 0 33.6 10 41.9 24.8 7.2-3.2 15.2-5 23.5-5 32 0 57.9 26.2 57.9 58.4 0 32.3-25.9 58.4-57.9 58.4-3.9 0-7.7-.4-11.4-1.1-7.3 13-21.2 21.8-37.1 21.8-6.7 0-13-1.5-18.6-4.3-7.3 17.4-24.4 29.6-44.4 29.6-20.8 0-38.6-13.2-45.4-31.7-3 .6-6.2 1-9.4 1C21 158 .2 136.9.2 110.7c0-17.6 9.4-32.9 23.4-41.2C20.7 63 19.1 56 19.1 48.6 19.1 21.7 40.9 0 67.7 0c15.8 0 29.9 7.6 38.7 19.3 2.3.7 4.7 1.3 7.1 1.7z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <linearGradient id="py1" x1="19.8" x2="28.8" y1="9.1" y2="17.9" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2F74B5" />
        <stop offset="1" stopColor="#1B5E8A" />
      </linearGradient>
      <path fill="url(#py1)" d="M24.05 1c-11.5.1-10.8 5.1-10.8 5.1v5.3h11v1.5H8.2S.8 12.1.8 23.7c0 11.6 6.5 11.2 6.5 11.2h3.8v-5.5s-.2-6.5 6.4-6.5h10.9s6.2.1 6.2-6V7.1S35.5 1 24.1 1zm-6 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      <linearGradient id="py2" x1="28.8" x2="37.3" y1="32.2" y2="40.2" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path fill="url(#py2)" d="M23.95 47c11.5-.1 10.8-5.1 10.8-5.1v-5.3h-11v-1.5h16.1s7.4.8 7.4-10.8c0-11.6-6.5-11.2-6.5-11.2h-3.8v5.5s.2 6.5-6.4 6.5H20.7s-6.2-.1-6.2 6v10.8s-.9 6.1 10.5 6.1zm6-3.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 256 256" className="h-full w-full">
      <path fill="#3178c6" d="M0 128v128h256V0H0z" />
      <path fill="#fff" d="M56.6 128.9v10.5h33.5v95.3h23.6v-95.3h33.5v-10.3c0-5.7-.1-10.4-.3-10.5-.1-.2-20.8-.3-45.9-.3l-45.7.2v10.4zm145.1-10.7c6.5 1.6 11.5 4.5 16 9.2 2.3 2.5 5.8 7 6.1 8 .1.3-10.9 7.7-17.6 11.8-.2.2-1.2-.8-2.2-2.4-3.1-4.5-6.4-6.5-11.5-6.8-7.5-.5-12.4 3.4-12.4 10 0 2 .3 3.2 1.1 4.8 1.7 3.5 4.8 5.6 14.7 9.9 18.2 7.8 26 13 30.9 20.3 5.4 8.2 6.6 21.3 2.9 31.1-4.1 10.6-14.1 17.8-28.3 20.2-4.4.8-14.8.7-19.5-.2-10.3-1.8-20-6.8-26-13.4-2.4-2.6-6.9-9.3-6.6-9.7l2.4-1.5 9.6-5.5 7.3-4.2 1.5 2.2c2.2 3.3 6.8 7.9 9.6 9.4 8 4.2 19.1 3.6 24.4-1.2 2.3-2.1 3.3-4.3 3.3-7.5 0-2.9-.3-4.1-1.8-6.3-1.9-2.7-5.8-5-17-9.8-12.7-5.5-18.2-8.9-23.2-14.3-2.9-3.1-5.6-8.1-6.8-12.3-.9-3.5-1.2-12.3-.4-15.8 2.7-12.6 12.2-21.4 26-23.9 4.5-.8 15-.5 19.5.5z" />
    </svg>
  ),
  Google: (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  ),
  Calendar: (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="#2bbd68" />
      <rect x="3" y="5" width="18" height="5" fill="#1fa055" />
      <rect x="6" y="13" width="3" height="3" rx=".5" fill="#fff" />
      <rect x="11" y="13" width="3" height="3" rx=".5" fill="#fff" />
      <rect x="15" y="13" width="3" height="3" rx=".5" fill="#fff" />
    </svg>
  ),
};

/* Floating tech badge component */
function TechBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { type: "spring", stiffness: 260, damping: 18, delay },
        y: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: delay + 0.4 },
      }}
      className={`absolute flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-[0_4px_14px_rgba(30,20,10,0.14)] ring-1 ring-black/5 ${className}`}
    >
      {children}
    </motion.span>
  );
}

const services = [
  {
    icon: Globe,
    title: "Web Development",
    href: "/services/web-development",
    description: "Fast, secure and conversion-focused websites tailored to your growth goals.",
    tint: "bg-[#fff2e6] text-[#f17431]",
    cardBg: "from-[#fff8f3] to-white",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    href: "/contact",
    description: "Cross-platform apps that engage users and accelerate digital transformation.",
    tint: "bg-[#f3ecff] text-[#8a57f5]",
    cardBg: "from-[#faf7ff] to-white",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    icon: Users,
    title: "CRM Solutions",
    href: "/contact",
    description: "Smart CRM systems that improve lead tracking, automation and customer retention.",
    tint: "bg-[#e9f2ff] text-[#4f86ff]",
    cardBg: "from-[#f4f8ff] to-white",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["Salesforce", "React", "Node.js"],
  },
  {
    icon: Handshake,
    title: "HRMS Software",
    href: "/contact",
    description: "Automate HR tasks and streamline workforce operations with scalable HRMS tools.",
    tint: "bg-[#e9faef] text-[#2bbd68]",
    cardBg: "from-[#f4fdf8] to-white",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Django", "MySQL"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "SEO & Digital Marketing",
    href: "/services/seo",
    description: "Rank higher, generate demand and grow your pipeline with modern digital strategies.",
    tint: "bg-[#ffeaf0] text-[#f05276]",
    cardBg: "from-[#fff5f8] to-white",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["Google Ads", "Analytics", "SEO"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#fffdfa] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#ffe8cf]/45 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f3dfcc] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#eb712f]">
              What We Do
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1a2438] sm:text-4xl">
              End-to-End IT Solutions
              <br />
              That Drive <span className="text-[#f06f31]">Real Results</span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-4 lg:max-w-[530px] lg:items-end">
            <p className="text-sm leading-7 text-[#667186] lg:text-right">
              From powerful websites to smart systems, we provide tailored IT services that help your business move faster and scale smarter.
            </p>
            <a href="#services" className="inline-flex h-11 items-center gap-2 rounded-full border border-[#f0d9c1] bg-white px-5 text-sm font-semibold text-[#ee742e] transition-colors hover:bg-[#fff6ee]">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#f1e3d7] bg-gradient-to-b ${service.cardBg} shadow-[0_12px_30px_rgba(30,20,10,0.05)] transition-shadow hover:shadow-[0_20px_45px_rgba(30,20,10,0.10)]`}
              >
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.title}`}
                  className="absolute inset-0 z-10"
                />
                {/* Image area */}
                <div className="relative h-[160px] overflow-hidden border-b border-[#f1e3d7]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Floating tech badges per service */}
                  {service.title === "Web Development" && (
                    <>
                      <TechBadge className="left-2 top-2" delay={0.1}>{TechLogos.React}</TechBadge>
                      <TechBadge className="right-2 top-8" delay={0.25}>{TechLogos.NextJS}</TechBadge>
                      <TechBadge className="bottom-2 right-3" delay={0.4}>{TechLogos.TypeScript}</TechBadge>
                    </>
                  )}
                  {service.title === "Mobile App Development" && (
                    <>
                      <TechBadge className="left-2 top-2" delay={0.1}>{TechLogos.Flutter}</TechBadge>
                      <TechBadge className="right-2 top-6" delay={0.25}>{TechLogos.Apple}</TechBadge>
                      <TechBadge className="bottom-2 left-3" delay={0.4}>{TechLogos.Android}</TechBadge>
                    </>
                  )}
                  {service.title === "CRM Solutions" && (
                    <>
                      <TechBadge className="left-2 top-2" delay={0.1}>{TechLogos.Salesforce}</TechBadge>
                      <TechBadge className="right-2 top-8" delay={0.25}>{TechLogos.React}</TechBadge>
                      <TechBadge className="bottom-2 right-3" delay={0.4}>{TechLogos.TypeScript}</TechBadge>
                    </>
                  )}
                  {service.title === "HRMS Software" && (
                    <>
                      <TechBadge className="left-2 top-2" delay={0.1}>{TechLogos.Calendar}</TechBadge>
                      <TechBadge className="right-2 top-8" delay={0.25}>{TechLogos.Python}</TechBadge>
                      <TechBadge className="bottom-2 right-3" delay={0.4}>{TechLogos.NextJS}</TechBadge>
                    </>
                  )}
                  {service.title === "SEO & Digital Marketing" && (
                    <>
                      <TechBadge className="left-2 top-2" delay={0.1}>{TechLogos.Google}</TechBadge>
                      <TechBadge className="right-2 top-8" delay={0.25}>{TechLogos.TypeScript}</TechBadge>
                      <TechBadge className="bottom-2 right-3" delay={0.4}>{TechLogos.Python}</TechBadge>
                    </>
                  )}
                  {/* gradient overlay for readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-black/10" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${service.tint}`}>
                    <service.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-3.5 text-[1.0rem] font-semibold leading-6 text-[#1f2a3d]">{service.title}</h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-[1.65] text-[#6a758a]">{service.description}</p>

                  {/* Tech tag pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${service.tint}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#eedbc9] text-[#f07833] transition-all group-hover:bg-[#fff3e8] group-hover:border-[#f0b88a] group-hover:translate-x-1"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
