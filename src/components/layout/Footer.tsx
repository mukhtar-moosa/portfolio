import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import { navLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p className="font-mono">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
