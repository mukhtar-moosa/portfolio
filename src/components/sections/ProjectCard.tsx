import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAssetPath } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0" hover>
      {/* Project image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
        <Image
          src={getAssetPath(project.image)}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20"
          aria-hidden="true"
        />

        {project.featured && (
          <span className="absolute right-3 top-3">
            <Badge variant="accent">Featured</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-4 border-t border-border pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}