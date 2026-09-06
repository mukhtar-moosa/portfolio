"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onNavigate: () => void;
}

export function MobileNav({ open, onNavigate }: MobileNavProps) {
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className="rounded-md px-3 py-2.5 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={siteConfig.resumeUrl}
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
