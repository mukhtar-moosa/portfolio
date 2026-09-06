import { learningGroups } from "@/data/learning";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { Card } from "@/components/ui/Card";

export function CurrentlyLearning() {
  return (
    <AnimatedSection id="learning" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="05. currently exploring"
          title="Currently Learning"
          description="Building practical depth across databases, artificial intelligence, and modern web development."
        />

        <div className="space-y-12">
          {learningGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-mono text-sm uppercase tracking-wide text-accent-secondary">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedItem key={item.name} index={index}>
                      <Card className="flex h-full flex-col gap-4" hover>
                        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-accent-secondary">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-display text-base font-semibold text-foreground">
                            {item.name}
                          </p>
                          <p className="mt-1 font-mono text-xs text-muted">{item.category}</p>
                        </div>
                      </Card>
                    </AnimatedItem>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
