"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn, getAssetPath } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onNavigate: () => void;
}

export function MobileNav({ open, onNavigate }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-b border-border bg-background md:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className={cn(
                    "rounded-md px-3 py-2.5 font-mono text-sm transition-colors",
                    isActive
                      ? "bg-surface text-foreground font-medium border border-border"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href={getAssetPath(siteConfig.resumeUrl)}
              external
              variant="secondary"
              size="sm"
              className="mt-3 w-full"
              onClick={onNavigate}
            >
              <Download size={16} />
              Resume
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
