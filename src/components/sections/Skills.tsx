"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 3);

  return (
    <AnimatedSection id="skills" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="02. skills"
          title="Tools & Technologies"
          description="A growing toolkit for building intelligent, reliable, and user-friendly applications."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedItem key={category.category} index={index}>
                <Card className="h-full" hover>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name}>{skill.name}</Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedItem>
            );
          })}
        </div>

        {skillCategories.length > 3 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="secondary"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
            >
              {showAll ? "View less" : "View more"}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
          </div>
        )}
      </Container>
    </AnimatedSection>
  );
}
