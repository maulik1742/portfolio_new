"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioSection from "../components/PortfolioSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import EducationSection from "@/components/Education";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative bg-gradient-to-b from-indigo-950 via-slate-950 to-black text-white overflow-hidden">
        <Hero />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
        />
        <Services />
        <EducationSection />
        <PortfolioSection />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
