import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress, barColor, barHeight }) => {

  
  return (
    <motion.div
      className={"bg-gray-300 rounded-full " + barHeight}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    >
      <motion.div
        className={"h-full shadow-amber-400 rounded-full " + barColor }
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default ProgressBar;
