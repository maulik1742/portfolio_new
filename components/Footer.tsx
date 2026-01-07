"use client";

import { portfolioData } from "../portfolio";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" text-white py-8 text-center w-full px-36 bg-white/10 flex justify-between">
      <div>{portfolioData.footer.copyright}</div>
      <div>Designed & built with intention — not templates.</div>
    </footer>
  );
};

export default Footer;
