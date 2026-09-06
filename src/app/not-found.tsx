import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <span className="font-mono text-sm text-accent">{`// 404`}</span>
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" className="mt-2">
        Back home
      </Button>
    </Container>
  );
}
