"use client";
import { motion } from "framer-motion";
import { YouTubeIcon } from "../Icons";

const CustomButtons = () => {
  return (
    <motion.div className="">
      <motion.a
        href="https://www.youtube.com/@technicalera1/featured"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <YouTubeIcon />
      </motion.a>
    </motion.div>
  );
};

export default CustomButtons;
