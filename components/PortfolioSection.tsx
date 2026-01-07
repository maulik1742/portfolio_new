"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "../portfolio";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative pb-24 overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work That Solves Real Problems
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            These aren’t demo projects. Each one was built to improve
            performance, reduce friction, or directly support a business goal.
            Clean UI is a side effect — clarity is the priority.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioData.portfolio.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -14 }}
                className="
        group relative rounded-3xl overflow-hidden
        bg-white/10 backdrop-blur-2xl
        border border-white/10
        shadow-2xl
        cursor-pointer
      "
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div
                    className="
            absolute inset-0
            bg-gradient-to-t
            from-black/80 via-black/40 to-transparent
            opacity-70
            group-hover:opacity-90
            transition-opacity
          "
                  />
                </div>

                {/* Content */}
                <div className="relative p-7">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div
                    className="
            inline-flex items-center gap-2
            text-sm font-semibold text-yellow-400
            transition-all duration-300
            group-hover:gap-4
          "
                  >
                    Explore Project
                    <span className="text-lg">→</span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="
          absolute inset-0 rounded-3xl
          ring-1 ring-white/10
          group-hover:ring-yellow-400/40
          transition-all duration-500
        "
                />
              </motion.article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
