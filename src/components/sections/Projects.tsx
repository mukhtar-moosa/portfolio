"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <AnimatedSection id="projects" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="03. projects"
          title="Selected Work"
          description="Practical AI, full-stack, and language-focused projects built to solve real problems."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <AnimatedItem key={project.id} index={index}>
              <ProjectCard project={project} />
            </AnimatedItem>
          ))}
        </div>

        {projects.length > 3 && (
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
