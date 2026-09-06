import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        hover &&
          "transition-colors duration-200 hover:border-accent/40 hover:bg-surface-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
