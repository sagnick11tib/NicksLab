

import DiwaliLights from "@/components/About/DiwaliLights";
import PhotoFrame from "@/components/About/PhotoFrame";
import Octopas from "@/components/About/Octopas";
import p1 from "@/../../public/images/pictureone.jpg";
import p2 from "@/../../public/images/picturetwo.jpg";
import p3 from "@/../../public/images/picturethree.jpg";
import p4 from "@/../../public/images/picturefour.jpg";
import type { Metadata } from "next";
import AboutMySelf from "@/components/About/AboutMySelf";
import AboutBento from "@/components/About/AboutBento";
import { SVGProps } from "react";
import { Css3, Express, Figma, FramerMotion, Html5, Javascript, MernStack, NextJS, NodeJs, Python, ReactLogo, Redux, ShadcnUI, TailwindCss, TypeScript, } from "@/components/Icons/SkillIcon/AboutIcon";
import CdBack from "@/components/shared/CdBack";

export const metadata: Metadata = {
  title: "About",
  description: "Kaun hu mai kaha se aya hu?",
};

const page = () => {
  const photos = [p1, p2, p3, p4];
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">

      <div className="flex items-end gap-5">
        <h1 className="text-4xl font-bold tracking-tight">about me</h1>
        <Octopas />
      </div>

      <div className="relative">
        {/* Photo Frames with Diwali Lights */}
        <div className="relative">
          <div className="absolute w-full hidden sm:block sm:-left-10">
            <DiwaliLights />
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap sm:flex-row sm:justify-center sm:items-center sm:space-x-2 gap-2">
            <PhotoFrame
              imageUrl={photos[3]}
              text="Peace"
              index={0}
              rotation={-5}
            />
            <PhotoFrame
              imageUrl={photos[1]}
              text="Solo Traveller"
              index={1}
              rotation={5}
            />
            <PhotoFrame
              imageUrl={photos[2]}
              text="Mercy of Jagannath"
              index={2}
              rotation={-5}
            />
            <PhotoFrame
              imageUrl={photos[0]}
              text="Memories"
              index={3}
              rotation={5}
            />
          </div>
        </div>
      </div>

      <AboutMySelf />

     <AboutBento 
     tabs = {[
      {title: "Frontend", value: "frontend", content: <FrontendContent />},
      {title: "Backend", value: "backend", content: <BackendContent />},
      {title: "DevOps", value: "devops", content: <p>DevOps</p>},
      {title: "GenAI", value: "genai", content: <p>GenAI</p>},
     ]}
     />
    <CdBack />
    </section>
  );
};

export default page;

const FrontendContent = () => {
  const skills = [
    { icon: <MernStack /> },
    { icon: <TypeScript width={32} height={32} />, name: "TypeScript" },
    { icon: <ShadcnUI width={32} height={32} />, name: "Shadcn" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        >
          <div className="mb-2 text-white group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-white/90">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

const BackendContent = () => {
  const skills = [
    { icon: <NodeJs width={32} height={32} />, name: "Node.js" },
    { icon: <Python width={32} height={32} />, name: "Python" },
    { icon: <Express width={32} height={32} />, name: "Express" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        >
          <div className="mb-2 text-white group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-white/90">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}



/*
 <div className="mt-12 md:mt-12 md:col-span-2 h-[200px] max-w-full bg-[url('/images/Hero@2x.png'),_linear-gradient(to_top_right,#0E95EE,#27C9F5)] dark:bg-[url('/images/HeroDark@2x.png'),_linear-gradient(to_top_right,#07384B,#0F536E)] bg-cover bg-bottom rounded-2xl shadow-outline dark:shadow-outline-bright">
        <div className="flex w-full h-full items-center justify-center md:gap-8 lg:gap-16 overflow-hidden">
        
        </div>
      </div>
*/
