import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const portfolioData = {
  hero: {
    name: "Maulik Solanki",
    tagline: "Full Stack Developer",
    description:
      "3.5+ years of experience in the MERN stack, building robust and scalable web applications.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/maulik1742", icon: FaGithub },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maulik-solanki-8b6a85218/",
        icon: FaLinkedin,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/maulik_solanki_1742/",
        icon: FaInstagram,
      },
    ],
  },
  header: {
    navLinks: [
      { name: "Home", url: "#hero" },
      { name: "Services", url: "#services" },
      { name: "Education", url: "#education" },
      { name: "Portfolio", url: "#portfolio" },
      { name: "Contact", url: "#contact" },
    ],
  },
  services: [
    {
      icon: "⚡",
      title: "Full-Stack Web Development",
      description:
        "Production-ready web applications built with scalability, performance, and clean architecture in mind.",
      points: [
        "React, Next.js, Node.js, REST & APIs",
        "Authentication, dashboards, admin panels",
        "Clean, maintainable, testable code",
      ],
    },
    {
      icon: "💳",
      title: "Payment & Business Integrations",
      description:
        "Secure, real-world payment systems that actually work in production.",
      points: [
        "Stripe & Razorpay integration",
        "Subscriptions, invoices, webhooks",
        "Error handling & payment security",
      ],
    },
    {
      icon: "🚀",
      title: "Performance & Scaling",
      description:
        "I optimize applications so they load faster, scale better, and cost less to run.",
      points: [
        "Frontend performance optimization",
        "API & database efficiency",
        "Scalable architecture decisions",
      ],
    },
  ],
  portfolio: [
    {
      title: "Apparel AI",
      description:
        "An AI-powered fashion platform that enables virtual clothing changes, image generation and image-to-video transformations.",
      image: "/images/apparelai.png",
      link: "https://www.apparelai.io/",
    },
    {
      title: "Avrut Solutions",
      description:
        "A modern company portfolio website designed to clearly present services, showcase expertise, and build strong brand credibility.",
      image: "/images/avrut.png",
      link: "https://avrut.com",
    },
    {
      title: "Tradeath",
      description:
        "A stock trading platform that allows users to buy, sell, and manage strategies with brokers securely and efficiently.",
      image: "/images/tradearth.png",
      link: "https://tradearth.in/",
    },
    {
      title: "Orafox",
      description:
        "A smart visitor management system that simplifies check-ins, improves workplace security, and enables real-time visitor tracking.",
      image: "/images/orafox.png",
      link: "https://tradearth.in/",
    },
    {
      title: "Traveldate",
      description:
        "A social communication platform that connects people globally through real-time chat and interactive social networking features.",
      image: "/images/traveldate.png",
      link: "https://traveldate.org/",
    },
    {
      title: "Vianne Jewels",
      description:
        "A premium jewelry brand website showcasing elegant gold and diamond collections with a focus on luxury and craftsmanship.",
      image: "/images/Vianne.png",
      link: "https://viannejewels.com/",
    },
  ],
  contact: {
    title: "Get in Touch",
    description:
      "Have a project in mind or just want to say hello? Feel free to reach out!",
    email: "mauliksolanki2002@gmail.com",
    phone: "+916355940198",
  },
  footer: {
    copyright: "© 2026 Maulik Solanki. All rights reserved.",
  },
  educationInfo: [
    {
      schoolName: "M.L. Parmar college",
      subHeader: "Bachelor of Computer Application",
      duration: "April 2019 - March 2022",
      desc: "Bachelor of Computer Application (BCA) from ML Parmar College, Bhavnagar, with a focus on computer science, programming, and IT applications.",
      grade: "Grade A",
      descBullets: [],
    },
    {
      schoolName: "Bhagwan Mahavir University",
      subHeader: "Master of Computer Application",
      duration: "April 2022 - April 2024",
      desc: "Master of Computer Application (MCA) from Bhagwan Mahavir University, specializing in advanced computer science concepts and IT management.",
      grade: "Grade A",
      descBullets: [],
    },
  ],
};
