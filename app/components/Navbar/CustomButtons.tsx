"use client";
import { motion } from "framer-motion";
import { SunIcon, YouTubeIcon } from "../Icons";

const CustomButtons = () => {
  return (
    <motion.div className="flex justify-evenly items-center gap-6">
      <motion.a href="#" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        <YouTubeIcon />
      </motion.a>
      <button className="p-1 bg-dark text-white rounded-full">
        <SunIcon />
      </button>
    </motion.div>
  );
};

export default CustomButtons;
