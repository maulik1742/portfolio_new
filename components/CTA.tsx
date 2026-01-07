"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../portfolio";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 text-sm tracking-widest uppercase text-white/60"
        >
          Let’s Build Something Meaningful
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Have an idea? <br className="hidden md:block" />
          I’ll help you turn it into a real product.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Whether you’re launching a startup, improving an existing system, or
          building something from scratch — I focus on clean architecture,
          performance, and long-term scalability.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              text-lg font-semibold
              bg-white text-purple-700
              hover:bg-gray-100
              transition-all duration-300
            "
          >
            Start a Conversation
          </a>

          <a
            href="#portfolio"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              text-lg font-semibold
              border border-white/30
              text-white
              hover:bg-white/10
              transition-all duration-300
            "
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
