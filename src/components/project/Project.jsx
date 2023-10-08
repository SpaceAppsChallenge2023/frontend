import React from "react";
import VideoPlayer from "./video/VideoPlayer";
import Settings from "./Settings";
import { motion } from "framer-motion";

const Project = () => {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
  };

  return (
    <motion.div 
      className=""
      initial="hidden"  // Start with hidden state
      animate="visible" // Animate to visible state
      variants={fadeIn} // Use defined variants
    >
      <Settings /> 
      <VideoPlayer />
    </motion.div>
  );
};

export default Project; 
