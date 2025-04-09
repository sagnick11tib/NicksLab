
const Octopas = () => (
<div className="relative size-12 -left-4 -bottom-2 inline-flex flex-col items-end justify-end">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="50" fill="#6A5ACD" />
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * 2 * Math.PI;
          const x = 100 + Math.cos(angle) * 60;
          const y = 100 + Math.sin(angle) * 60;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="10"
              fill="#483D8B"
              className="animate-pulse"
            />
          );
        })}
        <circle cx="85" cy="90" r="5" fill="white" />
        <circle cx="115" cy="90" r="5" fill="white" />
      </svg>
    </div>
  )
  export default Octopas;
  