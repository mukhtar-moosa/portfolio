"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* Ambient grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-3xl flex-col items-start gap-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {siteConfig.availability}
            </div>

            <div className="font-mono text-sm text-accent sm:text-base">
              $ whoami
              <span className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-accent align-middle" />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              {siteConfig.name}
            </h1>

            <p className="font-mono text-lg text-muted sm:text-xl">
              {siteConfig.title}
            </p>

            <p className="max-w-xl text-base text-muted sm:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button href="/projects" size="lg">
                View Work
                <ArrowRight size={18} />
              </Button>

              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>

              <Button href={getAssetPath(siteConfig.resumeUrl)} external variant="ghost" size="lg">
                <Download size={18} />
                Resume
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative shrink-0"
          >
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-border bg-surface shadow-xl sm:h-56 sm:w-56">
              <Image
                src={getAssetPath(siteConfig.profileImage)}
                alt={`${siteConfig.name} profile photo`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground sm:flex"
        aria-label="Explore the homepage"
      >
        <span className="font-mono text-xs">explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}