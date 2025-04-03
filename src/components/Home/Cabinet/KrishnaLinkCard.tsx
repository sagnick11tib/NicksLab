import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const KrishnaLinkCard = () => {
    return (
        <Link href={"/playground"}>
          <div className="h-36 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
            <Image
              className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg brightness-75 dark:brightness-50"
              src="/images/radha.jpg"
              alt="radha"
              fill
              priority
            />
            <p className="font-bold -rotate-90 absolute top-10 bottom-5 text-white w-40 pl-16 text-2xl ">
                राधा
            </p>
            <ArrowUpRight className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
          </div>
        </Link>
      );
}

export default KrishnaLinkCard;