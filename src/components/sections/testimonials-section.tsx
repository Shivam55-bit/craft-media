"use client";

import Image from "next/image";
import { Section, Container, SectionHeader } from "@/src/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Delhi",
    text: "We are happy and satisfied with their work and would recommend their name to all. Craft Media Hub delivered a stunning website that truly represents our brand. Their team is professional and responsive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur, Greater Noida",
    text: "We are ranking high because of their services and would go in long-run with them. Their SEO and digital marketing strategies have transformed our online presence completely.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Amit Verma",
    role: "E-Commerce Owner, Noida",
    text: "Craft Media Hub built an amazing e-commerce website for us. The design is beautiful, the site is fast, and our sales have grown significantly. Highly recommend their services!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" className="noise-bg">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What our clients say about us"
          description="Don't just take our word for it — hear from the businesses we've helped grow across Delhi NCR."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <div className="relative group h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 lg:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-8">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
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
