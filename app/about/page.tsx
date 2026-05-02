import Navbar from "@/src/components/navbar";
import Image from "next/image";
import craftHubLogo from "@/src/assets/Carft_hub_logo.png";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered", icon: TrendingUp, color: "text-[#f47a34]", bg: "bg-[#fff0e6]" },
  { value: "85+", label: "Happy Clients", icon: Users, color: "text-[#2563eb]", bg: "bg-[#eff6ff]" },
  { value: "4+", label: "Years Experience", icon: Award, color: "text-[#059669]", bg: "bg-[#ecfdf5]" },
  { value: "24/7", label: "Support Available", icon: Target, color: "text-[#7c3aed]", bg: "bg-[#f5f3ff]" },
];

const team = [
  { name: "Aryan Sharma", role: "Founder & CEO", initials: "AS", color: "from-[#ffb327] to-[#ff5564]" },
  { name: "Priya Verma", role: "Lead Designer", initials: "PV", color: "from-[#7c3aed] to-[#a855f7]" },
  { name: "Rahul Singh", role: "Full Stack Developer", initials: "RS", color: "from-[#2563eb] to-[#38bdf8]" },
  { name: "Neha Gupta", role: "SEO & Marketing", initials: "NG", color: "from-[#059669] to-[#34d399]" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffdfa] pt-[6rem] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">

          {/* Hero */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_8px_32px_rgba(244,122,52,0.20)] ring-1 ring-[#f6dfc8]">
              <Image src={craftHubLogo} alt="Craft Media Hub" className="h-14 w-14 object-contain" />
            </div>
            <span className="inline-block rounded-full bg-[#fff0e6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#f47a34] mb-4">
              About Us
            </span>
            <h1 className="text-[2.8rem] font-extrabold leading-tight tracking-tight text-[#111827] max-w-2xl">
              We Build Digital Products That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#f47a34,#ff5564)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Make a Difference
              </span>
            </h1>
            <p className="mt-5 text-[16px] text-[#6b7280] max-w-2xl leading-relaxed">
              Craft Media Hub specializes in professional website designing &amp; development services in
              Delhi, India — focused on your objectives and business goals. We handle projects for small
              and medium-size businesses as well as major brands and corporates, delivering responsive
              websites, mobile apps, CRM, HRMS, and digital marketing solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map(({ value, label, icon: Icon, color, bg }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border border-[#f0e4d8] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </span>
                <span className={`text-[2rem] font-extrabold leading-none ${color}`}>{value}</span>
                <span className="mt-1.5 text-[12px] text-[#9ca3af] font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="mb-16 rounded-3xl border border-[#f0e4d8] bg-gradient-to-br from-[#fff9f4] to-[#fff3ec] p-10">
            <h2 className="text-[1.8rem] font-bold text-[#111827] mb-4">Our Mission</h2>
            <p className="text-[15px] text-[#6b7280] leading-relaxed max-w-2xl">
              To empower businesses of all sizes with world-class digital solutions — making technology
              accessible, affordable, and impactful. Whether you already have a website or are starting
              fresh, we help you ask the right questions: Does it leave a first impression? Does it help
              with conversions? We design responsive websites across different CMS platforms that deliver
              better conversions and a higher return on your investment.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
