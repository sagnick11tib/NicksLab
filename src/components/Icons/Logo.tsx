"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { SVGProps } from "react";
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={522.667}
    height={333.333}
    viewBox="0 0 392 250"
    {...props}
  >
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      d="M20 150 C50 50, 150 50, 180 150 S300 250, 350 150"
    />
  </svg>
);

export default Logo;



/* 
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width={522.667}
    height={333.333}
    viewBox="0 0 392 250"
    {...props}
  >
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      d="M20 150 C50 50, 150 50, 180 150 S300 250, 350 150"
    />
  </svg>
*/






























// const Logo = (props: SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 692 150" {...props}>
//     {/* Text Path for "NicksLab" */}
//     <defs>
//       <path id="textPath" d="M100,140 Q200,120 300,140" />
//     </defs>
//     <motion.text
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       className="text-5xl font-bold text-center text-transparent"
//       fill="url(#textGradient)"
//     >
//       <textPath href="#textPath" startOffset="50%" textAnchor="middle">
//         NicksLab
//       </textPath>
//     </motion.text>

//     {/* Path 1 - Lab Flask Base */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 3,
//         ease: "easeInOut",
//       }}
//       d="M150,50 L170,100 L130,250 L270,250 L230,100 L250,50 Z"
//       stroke="url(#gradient1)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 2 - Bubbles and Molecules */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//       d="M160,150 C180,140 190,160 170,170 M200,120 C220,110 230,130 210,140 M240,160 C260,150 270,170 250,180"
//       stroke="url(#gradient2)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 3 - DNA Helix Pattern */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 3.5,
//         ease: "easeInOut",
//         delay: 1,
//       }}
//       d="M50,150 C100,100 150,200 200,150 C250,100 300,200 350,150"
//       stroke="url(#gradient3)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 4 - Circuit Board Lines */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 4.5,
//         ease: "easeInOut",
//         delay: 1.5,
//       }}
//       d="M50,50 L100,50 L100,100 L150,100 M250,100 L300,100 L300,50 L350,50"
//       stroke="url(#gradient4)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 5 - Lab Equipment */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 5,
//         ease: "easeInOut",
//         delay: 2,
//       }}
//       d="M80,200 L120,200 C130,200 130,180 120,180 L80,180 C70,180 70,200 80,200 M280,200 L320,200 C330,200 330,180 320,180 L280,180 C270,180 270,200 280,200"
//       stroke="url(#gradient5)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 6 - Connecting Network */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         delay: 2.5,
//       }}
//       d="M50,250 Q125,200 200,250 Q275,300 350,250 M50,230 Q125,180 200,230 Q275,280 350,230"
//       stroke="url(#gradient6)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     {/* Path 7 - Data Flow */}
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{
//         duration: 3.5,
//         ease: "easeInOut",
//         delay: 3,
//       }}
//       d="M30,100 Q100,50 170,100 Q240,150 310,100 Q380,50 450,100"
//       stroke="url(#gradient7)"
//       strokeWidth="3"
//       fill="none"
//       strokeLinecap="round"
//     />

//     <defs>
//       <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#60A5FA" />
//         <stop offset="50%" stopColor="#C084FC" />
//         <stop offset="100%" stopColor="#F472B6" />
//       </linearGradient>
//       <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#60A5FA" />
//         <stop offset="100%" stopColor="#C084FC" />
//       </linearGradient>
//       <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#C084FC" />
//         <stop offset="100%" stopColor="#F472B6" />
//       </linearGradient>
//       <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#F472B6" />
//         <stop offset="100%" stopColor="#60A5FA" />
//       </linearGradient>
//       <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#818CF8" />
//         <stop offset="100%" stopColor="#E879F9" />
//       </linearGradient>
//       <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#E879F9" />
//         <stop offset="100%" stopColor="#FCA5A5" />
//       </linearGradient>
//       <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#FCA5A5" />
//         <stop offset="100%" stopColor="#818CF8" />
//       </linearGradient>
//       <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#60A5FA" />
//         <stop offset="50%" stopColor="#C084FC" />
//         <stop offset="100%" stopColor="#F472B6" />
//       </linearGradient>
//     </defs>
//   </svg>
// );
