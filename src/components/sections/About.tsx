import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading eyebrow="01. about" title="About Me" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted md:col-span-3">
            <p>
              I’m a Computer Science undergraduate and AI & Full-Stack Developer
              passionate about building intelligent and practical applications.
              I enjoy turning ideas into real-world digital solutions using
              modern web technologies and artificial intelligence.
            </p>

            <p>
              My interests include AI, RAG, full-stack development, automation,
              and building applications that solve meaningful problems. I enjoy
              learning new technologies, experimenting with ideas, and improving
              my development skills through hands-on projects.
            </p>

            <p>
              I’m currently open to part-time opportunities, internships, and
              collaborations where I can contribute my skills, gain practical
              experience, and continue growing as a developer.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} profile photo`}
                fill
                className="object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}