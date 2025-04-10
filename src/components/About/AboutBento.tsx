"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tab = {
    title: string;
    value: string;
    content: React.ReactNode;
  };

const AboutBento = ({ tabs }: { tabs: Tab[] }) => {

    const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

    return (
        <div className="mt-12 md:mt-12 md:col-span-2 h-[200px] max-w-full bg-[url('/images/Hero@2x.png'),_linear-gradient(to_top_right,#0E95EE,#27C9F5)] dark:bg-[url('/images/HeroDark@2x.png'),_linear-gradient(to_top_right,#07384B,#0F536E)] bg-cover bg-bottom rounded-2xl shadow-outline dark:shadow-outline-bright">

            <div className="relative flex top-2 left-2">
                {
                  tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab)}
                      className="relative px-4 py-2 rounded-full text-sm font-medium"
                    >
                        {
                            activeTab.value === tab.value && ( 

                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gray-200 dark:bg-black rounded-full z-0"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                                />

                            )
                        }

                        <span className="relative z-10">{tab.title}</span>

                    </button>
                  ))
                }
            </div>

            <div className="w-full h-full flex items-center justify-center">{activeTab.content}</div>

        </div> 

    )
};

export default AboutBento;