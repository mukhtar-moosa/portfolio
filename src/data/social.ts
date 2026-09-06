import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { SocialLink } from "@/types";

// Replace the "#" hrefs with your real profile URLs. Remove any entries you don't need.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mukhtar-moosa", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukhtar-moosa-3b92a4364", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Email", href: "mailto:mukhtarmoosadev@gmail.com", icon: Mail },
];
