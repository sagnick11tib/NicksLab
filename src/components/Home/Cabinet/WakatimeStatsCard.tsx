
import { motion } from 'framer-motion';
import { LogoOfVisualStudioCode } from '@/components/Icons/VSCode';
import { getCodingHrsFromWaka } from '@/lib/wakatimeconfig'
import { Code2 } from 'lucide-react';
import React from 'react'
import NumberTicker from '@/components/ui/NumberTicker';

const WakatimeStatsCard = async () => {

  const { seconds }: any = await getCodingHrsFromWaka();

  return (
    <div className="hover:scale-95 duration-500 transform-gpu">
    <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
    <LogoOfVisualStudioCode className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50" />
    <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          <NumberTicker
            value={seconds ? Math.round(seconds / 3600) : '--'}
            className='transform-gpu'
            />h
        </span>
        <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span>
    </div>
   </div>
  )
}

export default WakatimeStatsCard;