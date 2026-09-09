import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mukhtar Moosa for job opportunities, projects, or collaborations.",
};

export default function ContactPage() {
  return <Contact />;
}