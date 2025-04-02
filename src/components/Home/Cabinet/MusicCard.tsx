"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Song {
  title: string;
  artist: string;
  cover: string;
  url: string;
}

const songs: Song[] = [
  {
    title: "7 Rings",
    artist: "Ariana Grande",
    cover:
      "/music/sevenimage.png",
    url: "/music/7rings.mp3",
  },
  {
    title: "Ocean Waves",
    artist: "The Twilight Band",
    cover:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    url: "/path-to-your-song2.mp3",
  },
];

const MusicCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const value = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(value) ? 0 : value);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progress = progressRef.current;
    
    if (!audio || !progress) return;

    const rect = progress.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    const time = (percentage / 100) * audio.duration;

    audio.currentTime = time;
    setProgress(percentage);
  };

  const handleVolumeClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = volumeRef.current;
    if (!volumeBar) return;

    const rect = volumeBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, x / width));
    
    setVolume(newVolume);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex, currentSong.url]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-52 h-36 bg-white dark:bg-[#0D1117] rounded-lg  relative overflow-hidden p-2 scale-105"
    >
      <div className="flex h-full">
        <div className="relative w-1/3">
          <motion.div
            className="w-28 h-28 -left-[57px] absolute top-2 -translate-y-1/2"
            animate={isPlaying ? { rotate: [0, 360] } : { rotate: 0 }}
            transition={
              isPlaying
                ? { repeat: Infinity, duration: 3, ease: "linear" }
                : { duration: 0.3 }
            }
          >
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-full h-full rounded-full object-cover shadow-lg ring-2 ring-purple-500/20 dark:ring-purple-400/20"
            />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-between pl-2">
          <div className="text-left">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentSong.title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm font-bold text-gray-800 dark:text-white truncate"
              >
                {currentSong.title}
              </motion.h2>
            </AnimatePresence>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {currentSong.artist}
            </p>
          </div>

          <div className="space-y-2">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden cursor-pointer"
            >
              <motion.div
                className="h-full bg-purple-500 dark:bg-purple-400"
                style={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>

            <div className="flex justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={playPrev}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <SkipBack className="w-3 h-3 text-gray-700 dark:text-gray-300" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="p-2 bg-purple-500 dark:bg-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 rounded-full text-white shadow-md transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={playNext}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <SkipForward className="w-3 h-3 text-gray-700 dark:text-gray-300" />
              </motion.button>
            </div>

            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Volume2 className="w-3 h-3" />
              <div 
                ref={volumeRef}
                onClick={handleVolumeClick}
                className="w-12 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
              >
                <motion.div
                  className="h-full bg-purple-500 dark:bg-purple-400 rounded-full"
                  style={{ width: `${volume * 100}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onEnded={playNext} />
    </motion.div>
  );
};

export default MusicCard;