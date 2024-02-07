"use client";
import { motion } from "framer-motion";
import { YouTubeIcon } from "../Icons";

const CustomButtons = () => {
  return (
    <motion.div className="flex justify-evenly items-center gap-6">
      <motion.a href="#" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        <YouTubeIcon />
      </motion.a>

      <div className="px-4 py-2 text-xs font-medium bg-primary/80 text-white rounded-md">
        <span>1.37k Subscriber&apos;s</span>
      </div>
    </motion.div>
  );
};

export default CustomButtons;
