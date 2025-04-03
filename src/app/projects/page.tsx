"use client";

import { GithubIcon, TwitterIcon, LinkedinIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const page = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-black transition-colors duration-300"
        >
          <div className="container mx-auto px-4 py-16">
            <section className="space-y-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between"
              >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Something Amazing is Brewing
                </h1>
              </motion.div>
    
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="prose prose-lg dark:prose-invert"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  Kuch to craft ho raha hai! Sabar karo, hum kuch khaas lekar aa rahe hain.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  While we put the finishing touches, connect with us on social media:
                </p>
              </motion.div>
    
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-6"
              >
                <motion.a
                  href="http://x.com/mannasagnick"
                  className="transform transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TwitterIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://github.com/sagnick11tib"
                  className="transform transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sagnick-manna/"
                  className="transform transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedinIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </motion.a>
              </motion.div>
    
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.8
                }}
                className="relative flex items-center justify-center py-20"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-t from-purple-500/30 to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20 blur-2xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute"
                >
                  <Sparkles className="h-12 w-12 text-purple-500 dark:text-purple-400" />
                </motion.div>
                <motion.h1
                  initial={{ letterSpacing: "0em" }}
                  animate={{ letterSpacing: "0.3em" }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: "easeOut"
                  }}
                  className="z-10 font-sans text-7xl font-black text-gray-800 dark:text-white"
                >
                  COMING SOON
                </motion.h1>
              </motion.div>
    
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 text-center"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © 2025 NicksLab. All rights reserved.
                </p>
              </motion.div>
            </section>
          </div>
        </motion.div>
      );
    }

export default page