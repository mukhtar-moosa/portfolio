import type { Project } from "@/types";

// Duplicate this object to add more projects.
// Drop images into /public/images/projects.

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Sentiment-App",
    description:
      "An AI-powered Streamlit app that predicts emotions in text using pre-trained Logistic Regression and Naive Bayes models. It uses NLP and machine learning to classify text into six emotions: sadness, anger, love, surprise, fear, and joy.",
    image: "/images/projects/project-1.png",
    tags: ["Python", "Machine Learning", "NLP", "Streamlit"],
    liveUrl:
      "https://sentimentapp-fkey2uozlvif8tngsw64ax.streamlit.app/",
    sourceUrl:
      "https://github.com/mukhtar-moosa/sentiment_app",
    featured: true,
  },

  {
    id: "project-2",
    title: "Weather & News Multi-Agent System",
    description:
      "A multi-agent AI system that researches live weather and news information based on a user's location query. It uses LangGraph, LangChain, Mistral AI, and Tavily to route queries to specialized weather and news agents and combine their results.",
    image: "/images/projects/project-2.png",
    tags: ["Python", "LangGraph", "LangChain", "Mistral AI", "Tavily"],
    liveUrl: "",
    sourceUrl:
      "https://github.com/mukhtar-moosa/ai-weather-news-assistant",
    featured: true,
  },

  {
    id: "project-3",
    title: "MovieMind AI",
    description:
      "An AI-powered movie information extraction system that uses Mistral AI and LangChain to extract structured details such as movie title, overview, genre, release information, cast, and ratings from movie-related text through an interactive Streamlit interface.",
    image: "/images/projects/project-3.png",
    tags: [
      "Python",
      "Generative AI",
      "LangChain",
      "Mistral AI",
      "Streamlit",
    ],
    liveUrl:
      "https://moviemind-ai-irrbkeuxrkllgushpagran.streamlit.app",
    sourceUrl:
      "https://github.com/mukhtar-moosa/MovieMind-AI",
    featured: true,
  },

  {
    id: "project-4",
    title: "AI Document Assistant",
    description:
      "A Retrieval-Augmented Generation (RAG) application that lets users upload PDF, TXT, or DOCX documents and ask questions about their content. It uses Mistral AI, LangChain, and ChromaDB to retrieve relevant document information and generate grounded answers.",
    image: "/images/projects/project-4.png",
    tags: [
      "Python",
      "RAG",
      "LangChain",
      "Mistral AI",
      "ChromaDB",
      "Streamlit",
    ],
    liveUrl:
      "https://ai-document-assistant-jyhjyys75bebr2up6puujw.streamlit.app/",
    sourceUrl:
      "https://github.com/mukhtar-moosa/AI-Document-Assistant",
    featured: true,
  },

  {
    id: "project-5",
    title: "AI E-Commerce Platform",
    description:
      "A full-stack AI-driven e-commerce platform designed with an intelligent shopping assistant, RAG-based product knowledge, product comparison, personalized recommendations, stock checking, and an administrative dashboard. It combines a Next.js frontend, FastAPI backend, MySQL database, and AI capabilities.",
    image: "/images/projects/project-5.png",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "MySQL",
      "AI",
      "RAG",
    ],
    liveUrl:
      "https://ai-e-commerce-ruddy.vercel.app/",
    sourceUrl:
      "https://github.com/mukhtar-moosa/ai-e-commerce",
    featured: true,
  },

  {
    id: "project-6",
    title: "Zobánganj",
    description:
      "A digital platform designed to preserve and promote the Balochi language and literature through poetry, books, stories, interviews, proverbs, riddles, and an interactive dictionary. It also includes Balochi Wordle, a responsive modern interface, SEO optimization, PWA support, and a secure admin panel for content management.",
    image: "/images/projects/project-6.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "PWA",
    ],
    liveUrl: "",
    sourceUrl:
      "https://github.com/Jansherameer/zobanganj",
    featured: true,
  },
];