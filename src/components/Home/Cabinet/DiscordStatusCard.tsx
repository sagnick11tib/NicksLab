"use client"

import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { useState } from 'react';

type StatusType = 'online' | 'idle' | 'dnd' | 'offline';

interface StatusConfig {
  label: string;
  colors: {
    dot: string;
    ping: string;
  };
  showPing: boolean;
}

const statusConfigs: Record<StatusType, StatusConfig> = {
  online: {
    label: 'Online',
    colors: {
      dot: 'bg-green-500',
      ping: 'bg-green-400',
    },
    showPing: true,
  },
  idle: {
    label: 'Idle',
    colors: {
      dot: 'bg-yellow-500',
      ping: 'bg-yellow-400',
    },
    showPing: false,
  },
  dnd: {
    label: 'Do Not Disturb',
    colors: {
      dot: 'bg-red-500',
      ping: 'bg-red-400',
    },
    showPing: false,
  },
  offline: {
    label: 'Offline',
    colors: {
      dot: 'bg-gray-500',
      ping: 'bg-gray-400',
    },
    showPing: false,
  },
};

const DiscordStatusCard = () => {
  const [status, setStatus] = useState<StatusType>('online');
  const config = statusConfigs[status];

  // For demo purposes - cycle through statuses
  const cycleStatus = () => {
    const statuses: StatusType[] = ['online', 'idle', 'dnd', 'offline'];
    const currentIndex = statuses.indexOf(status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setStatus(statuses[nextIndex]);
  };
  return (
    <div className="w-32 sm:w-24 h-36 relative hover:scale-95 transform-gpu duration-500 bg-white dark:bg-[#151947] rounded-xl overflow-hidden cursor-pointer" onClick={cycleStatus}>
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-400/20 dark:via-indigo-400/20 dark:to-purple-400/20 animate-gradient" />
    
    {/* Glass effect overlay */}
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    
    {/* Discord logo decorative element */}
    <DiscordLogoIcon className={`absolute -right-0 -bottom-1 w-24 h-24 text-indigo-500/10 dark:text-white/5 transform rotate-12 transition-opacity duration-300 ${status === 'offline' ? 'opacity-25' : 'opacity-100'}`} />
    
    {/* Content container */}
    <div className="relative h-full flex flex-col justify-center items-center p-3 space-y-2">
      {/* Status indicator */}
      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
        <span className="relative flex h-3 w-3">
          {config.showPing && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.colors.ping} opacity-75`} />
          )}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${config.colors.dot}`} />
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {config.label}
        </span>
      </div>
      
      {/* Username with special styling */}
      <div className="text-center">
        <span className={`inline-block px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 rounded-md transition-opacity duration-300 ${status === 'offline' ? 'opacity-50' : 'opacity-100'}`}>
          @nicks6769
        </span>
      </div>
    </div>
  </div>
  )
}

export default DiscordStatusCard