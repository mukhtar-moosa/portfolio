import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight",
        variant === "default" &&
          "border-border bg-surface text-foreground",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}