"use client"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"

const GithubCard = () => {
  return (
    <motion.a
    whileHover={{ scale: 0.95 }}
    whileTap={{ scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative h-36 w-full group flex flex-col justify-between overflow-hidden rounded-2xl text-white transform-gpu will-change-[outline,_transform]"
    href="http://github.com/vimfn"
    target="_blank"
    rel="noreferrer"
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-20"
    >
      <Image
        src="/images/githubimage.jpg"
        alt="cat img"
        fill={true}
        priority={true}
        className="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
      ></span>
    </span>
    <span aria-hidden="true" className="px-6 pt-6">
      <span className="flex justify-between">
        <Github />
      </span>
    </span>
    <span className="space-y-0.5 px-6 pb-6">
      <span className="block font-semibold">GitHub</span>
      <span className="block text-sm">My experiments (aka projects)</span>
    </span>
  </motion.a>
  )
}

export default GithubCard