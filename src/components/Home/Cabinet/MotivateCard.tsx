"use client";

import { motion } from 'framer-motion';
import { Code2, Coffee, Moon, Rocket } from 'lucide-react';

const MotivateCard = () => {
  const text = "EAT SLEEP CODE REPEAT";
  
  return (
    <motion.div
      className="w-full h-9 relative rounded-lg group cursor-pointer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 0.95 }}
      transition={{ 
        duration: 0.5,
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-[#F7F2F2] dark:bg-[#0D1117] rounded-lg border border-black"
        // animate={{
        //   background: [
        //     "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
        //     "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68))",
        //     "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))"
        //   ]
        // }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute inset-[1px] bg-white dark:bg-gray-900 rounded-lg flex items-center justify-between px-4"
      >
        <motion.div className="flex space-x-1">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        <div className="flex space-x-2">
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Coffee className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotivateCard;