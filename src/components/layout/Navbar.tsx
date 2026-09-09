"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn, getAssetPath } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="MukhtarAI home"
            className="flex items-center"
          >
            <Image
              src={getAssetPath("/images/mukhtar-ai-logo.svg")}
              alt="MukhtarAI"
              width={174}
              height={44}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3.5 py-2 font-mono text-sm transition-colors",
                    isActive
                      ? "bg-surface text-foreground font-medium border border-border"
                      : "text-muted hover:text-foreground hover:bg-surface/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href={getAssetPath(siteConfig.resumeUrl)} external variant="secondary" size="sm">
              <Download size={16} />
              Resume
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
    </header>
  );
}
