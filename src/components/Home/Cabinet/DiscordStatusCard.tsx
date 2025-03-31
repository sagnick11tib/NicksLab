import { DiscordLogoIcon } from '@radix-ui/react-icons'

const DiscordStatusCard = () => {
  return (
    <div className="w-32 h-36  text-white rounded-lg items-center flex justify-center overflow-hidden">
    <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
      {/* <DiscordLogoIcon className="w-48 h-48 text-blue-800 absolute top-0" /> */}
      <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />
        <div className="text-xl font-semibold text-black dark:text-white">
          Online
          <p className="text-sm">(@vimfn)</p>
        </div>
    </div>
  </div>
  )
}

export default DiscordStatusCard