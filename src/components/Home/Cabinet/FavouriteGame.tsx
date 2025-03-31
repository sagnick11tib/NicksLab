import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


const FavouriteGame = () => {
const people = [
        {
          id: 1,
          name: "Minecraft",
          playingHours: 120,
          lastPlayed: "2023-10-01",
          image: "/images/minecraft.jpg"
        },
        {
          id: 2,
          name: "Valorant",
          playingHours: 80,
          lastPlayed: "2023-09-28",
          image: "/images/valorant.jpg",
        },
        {
          id: 3,
          name: "Apex Legends",
          playingHours: 60,
          lastPlayed: "2023-09-25",
          image:
            "/images/apex.jpg",
        },
        {
          id: 4,
          name: "GTA 5",
          playingHours: 150,
          lastPlayed: "2023-09-20",
          image:
            "/images/gta5.jpg",
        },
        {
            id: 5,
            name: "Rocket League",
            playingHours: 90,
            lastPlayed: "2023-09-15",
            image:
                "/images/rocket.jpg",
            },
            {
            id: 6,
            name: "Forza Horizon 5",
            playingHours: 110,
            lastPlayed: "2023-09-10",
            image:
                "/images/forza.jpg",
        },
        {
            id: 7,
            name: "PUBG",
            playingHours: 130,
            lastPlayed: "2023-09-05",
            image:
                "/images/pubg.jpg",
        },
];
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
    <AnimatedTooltip 
        items={people}
    />
    </div>
  )
}

export default FavouriteGame