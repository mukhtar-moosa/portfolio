import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent/90 shadow-[0_0_0_1px_rgba(79,209,197,0.15)]",
  secondary:
    "bg-surface text-foreground border border-border hover:border-accent/50 hover:bg-surface-hover",
  ghost: "text-muted hover:text-foreground hover:bg-surface",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;

    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.toLowerCase().endsWith(".pdf") ||
      href.toLowerCase().includes(".pdf");

    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target={external || href.toLowerCase().includes(".pdf") ? "_blank" : undefined}
          rel={external || href.toLowerCase().includes(".pdf") ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={styles} {...rest}>
      {props.children}
    </button>
  );
}
