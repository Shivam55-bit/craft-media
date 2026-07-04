import Navbar from "@/src/components/navbar";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DeliveryPlus",
    category: "Logistics Platform",
    desc: "A complete last-mile delivery management system with real-time tracking, driver app, and merchant dashboard.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-[#fff3ec] to-[#ffe6d5]",
    accent: "#f47a34",
  },
  {
    title: "CRM Pro",
    category: "CRM Software",
    desc: "Enterprise CRM with lead management, pipeline tracking, email automation, and detailed analytics.",
    tags: ["React", "Express", "MongoDB"],
    color: "from-[#f5f0ff] to-[#ede8ff]",
    accent: "#7c3aed",
  },
  {
    title: "HRMS Suite",
    category: "HR Management",
    desc: "Full-stack HRMS covering employee onboarding, payroll, leave management, and performance reviews.",
    tags: ["React", "Django", "MySQL"],
    color: "from-[#eff6ff] to-[#dbeafe]",
    accent: "#2563eb",
  },
  {
    title: "SEO Dashboard",
    category: "Digital Marketing",
    desc: "Automated SEO auditing, keyword tracking, and competitor analysis tool for digital agencies.",
    tags: ["Next.js", "Python", "Redis"],
    color: "from-[#ecfdf5] to-[#d1fae5]",
    accent: "#059669",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "Multi-vendor marketplace with payment gateway integration, order tracking, and admin panel.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-[#fef9ec] to-[#fef3c7]",
    accent: "#d97706",
  },
  {
    title: "Real Estate Portal",
    category: "Web Application",
    desc: "Property listing platform with map integration, virtual tours, and lead capture system.",
    tags: ["React", "Node.js", "Mapbox"],
    color: "from-[#fff0f9] to-[#fce7f3]",
    accent: "#db2777",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffdfa] pt-[6rem] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[#fff0e6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#f47a34]">
              Our Portfolio
            </span>
            <h1 className="mt-4 text-[2.8rem] font-extrabold leading-tight tracking-tight text-[#111827]">
              150+ Projects{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#f47a34,#ff5564)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Delivered
              </span>
            </h1>
            <p className="mt-4 text-[16px] text-[#6b7280] max-w-xl mx-auto">
              A snapshot of some of the impactful digital products we&apos;ve built for our clients.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ title, category, desc, tags, color, accent }) => (
              <div
                key={title}
                className={`group relative rounded-2xl bg-gradient-to-br ${color} border border-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: accent }}>
                      {category}
                    </p>
                    <h3 className="text-[18px] font-bold text-[#111827]">{title}</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
                <p className="text-[13.5px] text-[#6b7280] leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/70 px-2.5 py-0.5 text-[11px] font-medium text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
