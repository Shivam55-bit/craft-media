import Navbar from "@/src/components/navbar";
import { ArrowRight, Layers, Zap, Shield, BarChart2 } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Web Designing",
    desc: "We create experiences with our designs — professional, responsive websites focused on your objectives and built to convert visitors into customers.",
    color: "text-[#f47a34]",
    bg: "bg-[#fff5ee]",
  },
  {
    icon: Zap,
    title: "Web Development",
    desc: "Full-stack web development for small businesses, medium enterprises, and major brands — from CMS-based sites to custom web applications.",
    color: "text-[#2563eb]",
    bg: "bg-[#eff6ff]",
  },
  {
    icon: BarChart2,
    title: "SEO Services",
    desc: "Boost your search rankings and drive organic traffic with proven on-page and off-page SEO strategies tailored to your business.",
    color: "text-[#059669]",
    bg: "bg-[#ecfdf5]",
  },
  {
    icon: Shield,
    title: "Digital Marketing",
    desc: "Grow your brand online with targeted digital marketing campaigns across social media, Google Ads, and content marketing.",
    color: "text-[#7c3aed]",
    bg: "bg-[#f5f3ff]",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffdfa] pt-[6rem] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[#fff0e6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#f47a34]">
              Our Solutions
            </span>
            <h1 className="mt-4 text-[2.8rem] font-extrabold leading-tight tracking-tight text-[#111827]">
              Smart Solutions for <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#f47a34,#ff5564)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Modern Businesses
              </span>
            </h1>
            <p className="mt-4 text-[16px] text-[#6b7280] max-w-xl mx-auto">
              We craft technology solutions that help businesses grow, automate, and scale efficiently.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#f0e4d8] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(244,122,52,0.14)]"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${bg} mb-5`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </span>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-[#f47a34] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
