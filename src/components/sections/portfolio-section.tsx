"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, SectionHeader } from "@/src/components/ui/section";
import { FadeIn } from "@/src/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Design", "Development", "E-Commerce", "Branding"];

const projects = [
  {
    title: "Luxe Fashion",
    category: "E-Commerce",
    description: "Premium e-commerce platform with personalized shopping experience",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
    tags: ["Shopify", "React", "Tailwind"],
  },
  {
    title: "FinFlow Dashboard",
    category: "Development",
    description: "Real-time financial analytics dashboard for enterprise clients",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    tags: ["Next.js", "D3.js", "TypeScript"],
  },
  {
    title: "EcoVenture",
    category: "Web Design",
    description: "Sustainable travel platform with immersive storytelling",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&q=80",
    tags: ["Figma", "Framer", "GSAP"],
  },
  {
    title: "NovaTech Rebrand",
    category: "Branding",
    description: "Complete brand identity refresh for a leading SaaS company",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
    tags: ["Branding", "Identity", "Guidelines"],
  },
  {
    title: "HealthPlus App",
    category: "Development",
    description: "Cross-platform health & wellness tracking application",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Artisan Market",
    category: "E-Commerce",
    description: "Handcrafted goods marketplace connecting artisans globally",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    tags: ["WooCommerce", "PHP", "Stripe"],
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Section id="portfolio" className="bg-muted/30 noise-bg">
      <Container>
        <SectionHeader
          badge="Our Work"
          title="Featured projects"
          description="A showcase of our best work across various industries and disciplines."
        />

        {/* Filter */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/80 text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/30 hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <div className="h-14 w-14 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center shadow-xl">
                          <ArrowUpRight className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
