export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    issuer: "Certificate",
    issued: "",
    credentialUrl: "/certificates/AI-ML.pdf",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    id: "gemini-google-sheets",
    name: "Gemini in Google Sheets",
    issuer: "Certificate",
    issued: "",
    credentialUrl: "/certificates/Gemini%20in%20Google%20Sheets.pdf",
    skills: ["Gemini", "Google Sheets"],
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    issuer: "Certificate",
    issued: "",
    credentialUrl: "/certificates/Generative-AI.pdf",
    skills: ["Generative AI"],
  },
  {
    id: "wordpress",
    name: "WordPress",
    issuer: "Certificate",
    issued: "",
    credentialUrl: "/certificates/wordphrasse.pdf",
    skills: ["WordPress"],
  },
];