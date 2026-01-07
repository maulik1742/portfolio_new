"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../portfolio";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "backdrop-blur-xl bg-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-white"
        >
          Maulik<span className="text-yellow-300">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {portfolioData.header.navLinks.map((link) => (
            <motion.div key={link.name} whileHover="hover" className="relative">
              <Link
                href={link.url}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>

              {/* Animated underline */}
              <motion.span
                variants={{
                  hover: { width: "100%" },
                }}
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300"
              />
            </motion.div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white focus:outline-none"
        >
          <span className="block w-6 h-[2px] bg-white mb-1" />
          <span className="block w-6 h-[2px] bg-white mb-1" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden backdrop-blur-xl bg-black/70"
          >
            <div className="px-6 py-6 space-y-4">
              {portfolioData.header.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-lg"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-white/60 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
