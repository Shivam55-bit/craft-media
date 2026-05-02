import { cn } from "@/src/lib/utils";
import { type ButtonHTMLAttributes, forwardRef, type ReactElement, cloneElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 hover:brightness-110",
        secondary:
          "bg-muted/80 text-foreground border border-border/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5",
        ghost:
          "text-foreground hover:bg-muted hover:text-foreground",
        outline:
          "border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      const child = props.children as ReactElement<Record<string, unknown>>;
      const { children: _, ...restProps } = props;
      return cloneElement(child, {
        ...restProps,
        className: cn(buttonVariants({ variant, size, className }), child.props.className as string),
        ref,
      });
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
