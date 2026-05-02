"use client";

import { Section, Container, SectionHeader } from "@/src/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/motion";
import {
  Zap,
  Shield,
  Headphones,
  BarChart3,
  Palette,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Headphones,
    title: "We Listen",
    description: "Before we begin anything else, we take the time to understand your vision, goals and unique challenges. Your input drives every decision we make.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Shield,
    title: "Unconditional Support",
    description: "We provide unconditional support to our clients even after delivering the project. Our relationship doesn't end at launch — we're here for the long run.",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    icon: Palette,
    title: "Customized To Your Needs",
    description: "Every solution we deliver is tailored specifically for your business. No templates, no shortcuts — just custom work that fits your brand perfectly.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    title: "We're Affordable",
    description: "Premium quality doesn't have to break the bank. We offer competitive pricing without compromising on the quality of our work and services.",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    icon: Rocket,
    title: "Result Oriented",
    description: "Every strategy we implement is focused on delivering measurable results. We track, analyze, and optimize to ensure your business goals are met.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: BarChart3,
    title: "Proven Track Record",
    description: "With 500+ projects delivered and 450+ happy clients, our results speak for themselves. Trust a team with a proven history of success.",
    gradient: "from-pink-500 to-rose-400",
  },
];

export default function WhyChooseUsSection() {
  return (
    <Section id="why-us" className="bg-muted/30 noise-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title="Why choose Craft Media Hub"
          description="We don't just build websites — we craft digital experiences that set you apart from the competition."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
                {/* Gradient hover bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                <div className="relative flex items-start gap-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
