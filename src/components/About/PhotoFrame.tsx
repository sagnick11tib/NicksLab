"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image'

interface PhotoFrameProps {
    imageUrl: StaticImageData
    text?: string
    rotation?: number
    index: number
    wirePosition?: number
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({
    imageUrl,
    text = '',
    rotation,
    index,
    wirePosition = 100 + (index + 1) * 100,
}) => {
  return (
    <motion.div
      className="relative mx-4 mt-[100px]"
      initial={{ rotateX: -90, y: -20 }}
      animate={{ rotateX: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: index * 0.2,
      }}
      style={{
        transformOrigin: "top",
        perspective: "1000px",
      }}
    >
      {/* String connecting to wire */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#555555]"
        style={{
          top: "-32px",
        }}
      />

      {/* Frame */}
      <motion.div
        initial={{ filter: "blur(1px)", scale: 1.2, rotate: `${rotation}deg` }}
        whileInView={{ filter: "blur(0px)", scale: 1 }}
        style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear" }}
        className={`polaroid group h-[215px] w-40 rounded-[-1px] bg-white p-2 shadow-lg transition-all duration-200 hover:scale-105 dark:shadow-lg dark:shadow-emerald-900`}
      >
        <Image
          width={300}
          height={250}
          src={imageUrl}
          alt="Festive photo"
          className="size-40 object-cover grayscale transition-all delay-150 duration-300 group-hover:grayscale-0"
        />
        {text && (
        <p className={'mt-2 text-center font-cath font-medium text-black'}>
          {text}
        </p>
      )}
        {/* Hook */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-black rounded-t-lg"></div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;
