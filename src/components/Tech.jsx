
import "../App.css";// Ensure your CSS is imported
import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants/constants";
import { SectionWrapper } from "../hoc";


const Tech = () => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-wrap justify-center gap-10 py-10"
  >
    {technologies.map(({ name, icon, color }, idx) => (
      <motion.div
        key={name}
        className="tech-tile group"
        style={{ "--neon-color": color }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="tech-glow"></div>
        <img src={icon} alt={name} className="tech-icon" />
        <span className="tech-label">{name}</span>
      </motion.div>
    ))}
  </motion.div>
);

export default SectionWrapper(Tech, "tech");