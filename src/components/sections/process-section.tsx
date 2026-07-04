"use client";

import { Section, Container, SectionHeader } from "@/src/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and audience to understand the full picture before writing a single line of code.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Our designers create wireframes and high-fidelity mockups, iterating with you until the vision is pixel-perfect.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description:
      "Our engineers bring the designs to life with clean, scalable code using the latest technologies and best practices.",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Grow",
    description:
      "After rigorous testing, we launch your project and provide ongoing support, optimization, and growth strategies.",
    gradient: "from-amber-500 to-orange-400",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="noise-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <Container>
        <SectionHeader
          badge="Our Process"
          title="How we bring your vision to life"
          description="A proven, transparent process that delivers exceptional results every time."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-[2px]">
            <div className="h-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 via-emerald-500/30 to-amber-500/30" />
          </div>

          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="relative text-center group">
                {/* Step icon with gradient ring */}
                <div className="relative mx-auto mb-8">
                  <div className={`relative h-20 w-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} p-[2px] z-10`}>
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                      <step.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold z-20 shadow-lg shadow-primary/30">
                    {step.step}
                  </span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
