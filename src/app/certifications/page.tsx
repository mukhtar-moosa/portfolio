import type { Metadata } from "next";
import { Certifications } from "@/components/sections/Certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications and credentials earned by Mukhtar Moosa.",
};

export default function CertificationsPage() {
  return <Certifications />;
}