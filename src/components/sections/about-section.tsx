"use client";

import Image from "next/image";
import { Section, Container } from "@/src/components/ui/section";
import { FadeIn, FadeInLeft, FadeInRight } from "@/src/components/ui/motion";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Users, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Done", gradient: "from-primary to-violet-500" },
  { value: "450+", label: "Total Clients", gradient: "from-blue-500 to-cyan-500" },
  { value: "5+", label: "Years Experience", gradient: "from-emerald-500 to-green-500" },
  { value: "500+", label: "Project Delivery", gradient: "from-amber-500 to-orange-500" },
];

export default function AboutSection() {
  return (
    <Section id="about" className="overflow-hidden noise-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Visual */}
          <FadeInLeft>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&q=80"
                  alt="Team collaborating on a project"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats grid overlay */}
              <motion.div
                className="absolute -bottom-6 -right-6 z-20 glass-card rounded-2xl p-5 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-4 -left-4 z-20 glass-card rounded-2xl px-5 py-3 shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-sm font-bold text-foreground">Award Winning</div>
                </div>
              </motion.div>

              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
            </div>
          </FadeInLeft>

          {/* Right Content */}
          <div>
            <FadeInRight>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
                About Us
              </span>
            </FadeInRight>

            <FadeInRight delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Best Web Designing &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
                  Website Development Company
                </span>
              </h2>
            </FadeInRight>

            <FadeInRight delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Craft Media Hub is a leading website designing company in Delhi. We provide more than website design and development. Your business, web presence and brand identity will be taken to the next level. We will produce a custom web design that will maintain the professional image that you&apos;ve worked hard to build.
              </p>
            </FadeInRight>

            <FadeInRight delay={0.25}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our services are result oriented and customer-centric. We offer web designing services, Web development services, Ecommerce Development, Software Solution, Mobile Applications, SEO Services and SMO Services. As one of the leading web design agencies in Delhi, India we know that every client has a unique set of requirements.
              </p>
            </FadeInRight>

            <FadeInRight delay={0.3}>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Sparkles, text: "Result-oriented & customer-centric approach" },
                  { icon: Target, text: "Custom solutions tailored to your business goals" },
                  { icon: Users, text: "Dedicated team of trained professionals" },
                  { icon: CheckCircle2, text: "Higher ROI for your web presence investment" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </FadeInRight>

            <FadeInRight delay={0.4}>
              <div className="mt-10">
                <Button size="lg" className="group" asChild>
                  <a href="#services">
                    Our Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </Container>
    </Section>
  );
}
