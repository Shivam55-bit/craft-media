import Navbar from "@/src/components/navbar";
import { Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "10 Web Design Trends Dominating 2025",
    excerpt: "From glassmorphism to AI-generated layouts — here are the top design trends shaping the web this year.",
    category: "Design",
    date: "April 10, 2026",
    readTime: "5 min read",
    color: "from-[#fff3ec] to-[#ffe6d5]",
    accent: "#f47a34",
  },
  {
    title: "Why Your Business Needs a CRM in 2026",
    excerpt: "Managing customer relationships manually is costing you deals. Here's how a CRM transforms your sales process.",
    category: "CRM",
    date: "April 5, 2026",
    readTime: "7 min read",
    color: "from-[#f5f0ff] to-[#ede8ff]",
    accent: "#7c3aed",
  },
  {
    title: "SEO in 2026: What Actually Works",
    excerpt: "Core Web Vitals, AI content, and E-E-A-T — a practical guide to ranking higher in Google this year.",
    category: "SEO",
    date: "March 28, 2026",
    readTime: "8 min read",
    color: "from-[#ecfdf5] to-[#d1fae5]",
    accent: "#059669",
  },
  {
    title: "React vs Next.js: Which Should You Choose?",
    excerpt: "A detailed comparison to help you pick the right framework for your next web project.",
    category: "Development",
    date: "March 20, 2026",
    readTime: "6 min read",
    color: "from-[#eff6ff] to-[#dbeafe]",
    accent: "#2563eb",
  },
  {
    title: "How HRMS Software Reduces Payroll Errors",
    excerpt: "Manual payroll processing leads to costly mistakes. See how automated HRMS systems save time and money.",
    category: "HRMS",
    date: "March 14, 2026",
    readTime: "5 min read",
    color: "from-[#fef9ec] to-[#fef3c7]",
    accent: "#d97706",
  },
  {
    title: "Mobile-First Design: A Complete Guide",
    excerpt: "Over 60% of web traffic is mobile. Learn how to design experiences that delight on every screen size.",
    category: "Design",
    date: "March 8, 2026",
    readTime: "6 min read",
    color: "from-[#fff0f9] to-[#fce7f3]",
    accent: "#db2777",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffdfa] pt-[6rem] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[#fff0e6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#f47a34]">
              Blog
            </span>
            <h1 className="mt-4 text-[2.8rem] font-extrabold leading-tight tracking-tight text-[#111827]">
              Insights &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#f47a34,#ff5564)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Resources
              </span>
            </h1>
            <p className="mt-4 text-[16px] text-[#6b7280] max-w-xl mx-auto">
              Tips, trends, and tutorials from our team of developers, designers, and marketers.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ title, excerpt, category, date, readTime, color, accent }) => (
              <article
                key={title}
                className={`group cursor-pointer rounded-2xl bg-gradient-to-br ${color} border border-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.11)]`}
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide mb-4"
                  style={{ color: accent }}
                >
                  <Tag className="h-2.5 w-2.5" />
                  {category}
                </span>
                <h2 className="text-[16px] font-bold text-[#111827] leading-snug mb-3 group-hover:underline decoration-[#f47a34]/40">
                  {title}
                </h2>
                <p className="text-[13px] text-[#6b7280] leading-relaxed mb-5">{excerpt}</p>
                <div className="flex items-center gap-3 text-[11.5px] text-[#9ca3af]">
                  <span>{date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
