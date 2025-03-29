"use client"

import { motion } from "framer-motion";
import Blog from "@/components/Icons/Blog";
import Image from "next/image";

const RandomCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 0.95 }} 
      transition={{ duration: 0.5 }} 
      className="bg-[#000] h-36 text-white rounded-lg items-center flex justify-center relative overflow-hidden transform-gpu"
    >
        <Blog className="text-[40px] left-0 absolute top-0" />
        <div className="-rotate-90 text-white font-extrabold text-xl mt-11 mb-10 ml-8">
            <span className="truncate">Blogs</span>
            <br />
            <span className="absolute text-sm font-normal truncate">Coming Soon</span>
        </div>
        <Image
         src="/images/moon.jpg"
         alt="blur"
         className="blur-lg absolute -bottom-3 -left-10 brightness-50"
         width={500}
         height={500}
       />
        <Image
            src="/images/moon.jpg"
            alt="lol"
            className="absolute rounded-full -bottom-10 -left-10 overflow-hidden"
            placeholder="empty"
            width={200}
            height={200}
          />
    </motion.div>
  );
};

export default RandomCard;
