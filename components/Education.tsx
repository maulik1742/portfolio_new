"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A structured academic journey focused on computer science
            fundamentals, software development, and real-world problem solving.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10" />

          {portfolioData?.educationInfo.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`
                relative flex flex-col md:flex-row gap-8 mb-20
                ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-4">
                <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40" />
              </div>

              {/* Card */}
              <div className="md:w-1/2 pl-12 md:pl-0">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="
                    relative rounded-2xl p-6
                    bg-white/10 backdrop-blur-xl
                    border border-white/10
                    shadow-xl
                  "
                >
                  <span className="text-xs uppercase tracking-widest text-yellow-400">
                    {edu.duration}
                  </span>

                  <h3 className="text-xl font-semibold text-white mt-2">
                    {edu.subHeader}
                  </h3>

                  <p className="text-white/80 font-medium mt-1">
                    {edu.schoolName}
                  </p>

                  <p className="text-white/70 text-sm mt-4 leading-relaxed">
                    {edu.desc}
                  </p>

                  {/* Grade */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Academic Performance: {edu.grade}
                  </div>

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 hover:ring-yellow-400/40 transition-all duration-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
