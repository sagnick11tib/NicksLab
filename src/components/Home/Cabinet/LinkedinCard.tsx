import RiTwitterXFill from '@/components/Icons/RiTwitterXFill'
import { Linkedin } from 'lucide-react'
import React from 'react'

const LinkedinCard = () => {
  return (
    <div className="flex gap-2">
        <a
        href='https://www.linkedin.com/in/sagnick-manna/'
        target='_blank'
        className='hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full'
        rel='noreferrer'
        >
            <Linkedin />
            <p className="text-[12px] text-white/90 -rotate-3">(serious stuff)</p>
        </a>
        <a
        href='http://x.com/vimfnx'
        target='_blank'
        className='hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full'
        rel='noreferrer'
        >
            <RiTwitterXFill className="text-2xl" />
            <p className="text-[12px] text-white/55 -rotate-3">(share memes)</p>
        </a>
    </div>
  )
}

export default LinkedinCard;    