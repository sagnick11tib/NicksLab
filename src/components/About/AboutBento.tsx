"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

const AboutBento = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className="mt-12 md:mt-12 md:col-span-2 h-[200px] max-w-full bg-[url('/images/Hero@2x.png'),_linear-gradient(to_top_right,#0E95EE,#27C9F5)] dark:bg-[url('/images/HeroDark@2x.png'),_linear-gradient(to_top_right,#07384B,#0F536E)] bg-cover bg-bottom rounded-2xl shadow-outline dark:shadow-outline-bright overflow-hidden">
      <div className="relative flex p-2 sm:p-4 sm:gap-2 ">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-2 rounded-full text-sm font-medium text-white"
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 dark:bg-black/30 rounded-full z-0"
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white w-full"
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


export default AboutBento;
