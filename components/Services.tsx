"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "../portfolio";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden  text-white"
    >
      {/* BACKGROUND GLOW */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            How I Can Help You
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            I don’t offer generic development services. I build focused,
            high-impact solutions that solve real business problems and scale
            with your growth.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group rounded-2xl p-8 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-400 text-black text-2xl font-bold mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-white/80 mb-6">{service.description}</p>

                {/* VALUE BULLETS */}
                <ul className="space-y-2 text-sm text-white/70">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-300 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
