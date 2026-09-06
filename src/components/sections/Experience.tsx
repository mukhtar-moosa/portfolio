import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading eyebrow="04. experience" title="Experience" />

        <div className="relative flex flex-col gap-10">
          {/* Timeline rail */}
          <div
            className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-border sm:block"
            aria-hidden="true"
          />

          {experience.filter((item) => item.type === "work").map((item, index) => {
            return (
              <AnimatedItem key={item.id} index={index} className="relative pl-0 sm:pl-12">
                <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent sm:flex">
                  <Briefcase size={15} />
                </div>

                <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                      <span className="text-muted"> · {item.organization}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                  </div>

                  {item.location && (
                    <span className="font-mono text-xs text-muted">{item.location}</span>
                  )}

                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
