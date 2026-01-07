"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl px-6 text-center"
      >
        {/* EYEBROW */}
        <motion.p
          variants={item}
          className="uppercase tracking-widest text-xs text-white/60 mb-4"
        >
          Building scalable products • Real-world impact
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          variants={item}
          className="sm:text-5xl text-4xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          I’m <span className="text-yellow-300">{portfolioData.hero.name}</span>
          <br />
        </motion.h1>

        {/* TAGLINE */}
        <motion.h2
          variants={item}
          className="xs:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6"
        >
          Full-stack developer specializing in scalable MERN applications,
          payments, dashboards, and real business workflows.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="xs:text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-10"
        >
          {portfolioData.hero.description}
        </motion.p>

        {/* TECH STACK QUICK SCAN */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/80 backdrop-blur"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <a
            href="#portfolio"
            className="
              px-8 py-4 rounded-full
              bg-yellow-400 text-black
              font-semibold text-lg
              hover:scale-105
              transition-transform
            "
          >
            See Real Projects
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="
              px-8 py-4 rounded-full
              border border-white/40
              text-white font-semibold text-lg
              hover:bg-white/10
              transition-all
            "
          >
            Let’s Work Together
          </a>
        </motion.div>

        {/* SOCIAL PROOF */}
        <motion.div variants={item} className="flex justify-center gap-6 mb-16">
          {portfolioData.hero.socialLinks.map((link: any) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-12 h-12 rounded-full
                  bg-white/10 backdrop-blur
                  flex items-center justify-center
                "
              >
                <Icon className="text-xl" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <Stat value="3.5+" label="Years Experience" />
          <Stat value="10+" label="Production Projects" />
          <Stat value="5+" label="Payment Systems" />
          <Stat value="Zero" label="Missed Deadlines" />
        </motion.div>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 hidden
          md:flex flex-col items-center gap-2
          text-white/60 text-xs
          cursor-pointer select-none z-40
        "
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}
