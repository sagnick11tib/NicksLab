"use client";

import DiwaliLights from "@/components/About/DiwaliLights";
import PhotoFrame from "@/components/About/PhotoFrame";
import { SpacingWhale } from "@/components/About/SpacingWhale";
import p1 from "@/../../public/images/pictureone.jpg";
import p2 from "@/../../public/images/picturetwo.jpg";
import p3 from "@/../../public/images/picturethree.jpg";
import p4 from "@/../../public/images/picturefour.jpg";
import type { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "About",
//   description: "Kaun hu mai kaha se aya hu?",
// };

const page = () => {
  const photos = [p1, p2, p3, p4];
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex items-end gap-5">
        <h1 className="text-4xl font-bold tracking-tight">about me</h1>
        <SpacingWhale />
      </div>


      <div className="relative">
        {/* Photo Frames with Diwali Lights */}
        <div className="relative">
          <div className="absolute w-full">
            <DiwaliLights />
          </div>
          <div className="flex justify-center items-start space-x-4">
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
          <div className="group mt-9 leading-relaxed">
            <p>
              Hey there! I&apos;m Sagnick Manna, a{" "}
              {Math.floor(
                (new Date().getTime() - new Date(2003, 15, 8).getTime()) /
                  (365.25 * 24 * 60 * 60 * 1000)
              )}
              -year-old Full-Stack Developer from India who’s passionate about
              building clean, responsive, and scalable web applications. I
              absolutely love working with Next.js, React, and the MERN stack,
              and I’m always chasing that perfect blend of performance and user
              experience.
            </p>
            <p>
              I started my dev journey seriously in 2022, and since then, I’ve
              built everything from e-commerce platforms to admin dashboards —
              focusing on real-world applications that are both beautiful and
              functional. Lately, I’ve been exploring DevOps, diving into
              Docker, DigitalOcean, and CI/CD pipelines to better understand
              deployment and scalability.
            </p>
            <p>
            When I’m not coding, I’m learning to play the Mridanga, diving into spiritual life with ISKCON, or brushing up on DSA and system design to sharpen my problem-solving skills.
            </p>
            <p>
            Right now, I’m open to exciting roles where I can grow fast, take ownership, and contribute meaningfully to impactful products.
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 h-[200px] max-w-full bg-[url('/images/Hero@2x.png'),_linear-gradient(to_top_right,#0E95EE,#27C9F5)] dark:bg-[url('/images/HeroDark@2x.png'),_linear-gradient(to_top_right,#07384B,#0F536E)] bg-cover bg-bottom rounded-2xl shadow-outline dark:shadow-outline-bright">
        <div className="flex w-full h-full items-center justify-center md:gap-8 lg:gap-16 overflow-hidden">
          <div className="pt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default page;
