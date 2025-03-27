import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"





export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
        <div className="space-y-5 text-left">
            <p>
            Hi, I&apos;m Sagnick Manna, a Full-Stack developer from India. I love to build SaaS products and web applications. I am currently learning{' '}
                <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                 DevOps
                </span>{' '}
                with a focus on cloud technologies.
            </p>
            <p>
             I am specialize in building web applications using MERN stack and have experience in building SaaS products.
            </p>
            <p>
            I truly enjoy building products that solve real-world problems. I am always looking for new challenges and opportunities to learn and grow.
            </p>
            <div className="flex">
          Current 
          <Link href={'https://shop.nickslab.live'} className="group ml-1 flex">
            {' '}
            deployed PROJECT .
            <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
              <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
        </div>
            <div className="flex w-full items-center justify-center">
                <Separator className="w-14 bg-[#888]/40" />
            </div>
            <p>
            Find me on twitter at{' '}
          <Link
            href={'https://x.com/mannasagnick'}
            className="wavvy underline-offset-2"
          >
            x.com
          </Link>{' '}
          or drop a{' '}
          <Link
            href={'mailto:sagnickmanna.dev@gmail.com'}
            className="wavvy underline-offset-2"
          >
            email
          </Link>
            </p>
        </div>
    </section>
  )
}
