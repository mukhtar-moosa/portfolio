"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import { getAssetPath } from "@/lib/utils";

export function Contact() {
  // ==============================
  // EDIT YOUR CONTACT INFORMATION
  // ==============================

  const phoneNumber = "03162159011";

  // WhatsApp requires the international format WITHOUT +
  // Pakistan country code = 92
  const whatsappNumber = "923162159011";

  const whatsappMessage = encodeURIComponent(
    "Hello Mukhtar, I found your portfolio and I'm interested in discussing a job, freelance project, or collaboration with you."
  );

  const whatsappUrl = "https://wa.me/923162159011";
  const bookingLinks = [
    {
      label: "30-minute consultation",
      href: "https://cal.com/mukhtar-moosa-swdriz/30min",
    },
    {
      label: "15-minute quick chat",
      href: "https://cal.com/mukhtar-moosa-swdriz/15min",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(getAssetPath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out. I will get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatedSection id="contact" className="py-24 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="06. contact"
          title="Let's Work Together"
          description="I'm open to part-time opportunities, internships, freelance projects, and collaborations. Feel free to reach out — I'd be happy to connect."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Contact Information */}
          <Card className="h-full">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-accent">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-sm text-muted">Email</p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block break-all text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-accent">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-sm text-muted">Phone</p>

                  <a
                    href={`tel:${phoneNumber}`}
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-accent">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-sm text-muted">WhatsApp</p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Chat with me
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-border pt-6">
                <p className="mb-4 text-sm text-muted">Connect with me</p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Booking */}
              <div className="border-t border-border pt-6">
                <p className="mb-3 text-sm text-muted">Book a time to talk</p>

                <div className="flex flex-col gap-3">
                  {bookingLinks.map((booking) => (
                    <Button
                      key={booking.href}
                      href={booking.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="justify-between"
                    >
                      {booking.label}
                      <Calendar size={18} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="h-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
                  Available for opportunities
                </p>

                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Have a project or job opportunity?
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-muted">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="h-11 w-full rounded-md border border-border bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    placeholder="Your name"
                  />
                </label>

                <label className="space-y-2 text-sm text-muted">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="h-11 w-full rounded-md border border-border bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm text-muted">
                Message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  className="w-full resize-y rounded-md border border-border bg-background px-3 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="Tell me a little about your project..."
                />
              </label>

              {formStatus && (
                <p
                  role="status"
                  className={
                    formStatus.type === "success" ? "text-accent" : "text-red-400"
                  }
                >
                  {formStatus.message}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={18} />
                </Button>

                <Button href={whatsappUrl} target="_blank" size="lg" variant="secondary">
                  WhatsApp
                  <MessageCircle size={18} />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </AnimatedSection>
  );
}