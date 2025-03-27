import Car from "./FuturisticCpuCabinet";
import CabinetIcon from "./FuturisticCpuCabinet";



const Bento = () => {
    return (
      <div className="mt-16 space-y-10">
        <div className="group/bentoi flex w-fit items-baseline gap-2">
        <p className="font-neu underline underline-offset-2">Cabinet</p>
        <Car className="w-10 h-10" />
        </div>
        <div className="hidden grid-cols-5 grid-rows-6 gap-4 xs:grid">
            
        </div>
      </div>
    )
  }

export default Bento;