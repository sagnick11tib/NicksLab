

import DiscordStatusCard from "./Cabinet/DiscordStatusCard";
import FavouriteGame from "./Cabinet/FavouriteGame";
import GithubCard from "./Cabinet/GithubCard";
import GithubStats from "./Cabinet/GithubStatsClient";
import GithubStatsServer from "./Cabinet/GithubStatsServer";
import KrishnaLinkCard from "./Cabinet/KrishnaLinkCard";
import LinkedinCard from "./Cabinet/LinkedinCard";
import MusicCard from "./Cabinet/MusicCard";
import RandomCard from "./Cabinet/RandomCard";
import StacksCard from "./Cabinet/StacksCard";
import WakatimeStatsCard from "./Cabinet/WakatimeStatsCard";
import Car from "./Car";


const Bento = () => {
    return (
      <div className="mt-16 space-y-10">
        <div className="group/bentoi flex w-fit items-baseline gap-2">
        <p className="font-neu underline underline-offset-2">Cabinet</p>
        <Car className="w-10 h-10" />
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
            <div className="col-span-3">
              <GithubCard/>
            </div>
            <div className="col-span-2">
              <GithubStatsServer />
            </div>
            <RandomCard />
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 mt-3">
        <div className="flex flex-col col-span-3">
        <div className="flex gap-3">
        <div className="w-24">
              <KrishnaLinkCard />
        </div>
        <div className="flex flex-col gap-3 w-full ">
              <LinkedinCard />
              <WakatimeStatsCard />
        </div>
        </div>
        <div className="cols-span-3 ">
            <StacksCard />
        </div>
        </div>
        <div className="col-span-3 md:ml-3">
        <FavouriteGame />
          <div className="flex gap-3 relative bottom-5">
           <DiscordStatusCard />
           <MusicCard />
          </div>
        </div>
        </div>
      </div>
    )
  }

export default Bento;