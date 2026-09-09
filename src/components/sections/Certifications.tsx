import { Award, ExternalLink } from "lucide-react";

import { certifications } from "@/data/certifications";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetPath } from "@/lib/utils";

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="06. certifications"
          title="Certifications"
          description="A collection of credentials and courses that support my technical work."
        />

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <AnimatedItem key={certification.id} index={index}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/40 hover:bg-surface-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-accent">
                      <Award size={19} />
                    </div>
                    {certification.issued && (
                      <span className="font-mono text-xs text-muted">{certification.issued}</span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {certification.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">{certification.issuer}</p>

                  {certification.description && (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {certification.description}
                    </p>
                  )}

                  {certification.skills && certification.skills.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  )}

                  {certification.credentialUrl && (
                    <Button
                      href={getAssetPath(certification.credentialUrl)}
                      external
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="mt-6 w-full sm:w-fit"
                    >
                      View certificate
                      <ExternalLink size={16} />
                    </Button>
                  )}
                </article>
              </AnimatedItem>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
            <Award className="mx-auto text-accent" size={24} />
            <p className="mt-4 text-sm text-muted">
              Certifications will be added here soon.
            </p>
          </div>
        )}
      </Container>
    </AnimatedSection>
  );
}