import { cn } from "@/src/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 lg:py-40", className)}>
      {children}
    </section>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28", className)}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mb-16 md:mb-20", align === "center" ? "mx-auto text-center" : "text-left")}>
      {badge && (
        <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
