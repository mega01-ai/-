import React, { useEffect, useRef } from 'react';
import { MediaItem } from '../types';
import { CloseIcon } from './icons/Icons';

interface PlayerProps {
  item: MediaItem;
  onClear: () => void;
}

const Player: React.FC<PlayerProps> = ({ item, onClear }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if(audioRef.current){
        audioRef.current.play().catch(error => console.log("Audio playback failed:", error));
    }
  }, [item]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1E434F]/80 backdrop-blur-md border-t border-[#A0E0E4]/30 p-4 shadow-2xl z-20 animate-slide-up">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-grow">
          <p className="font-bold text-[#A0E0E4]">{item.title}</p>
          <p className="text-sm text-gray-300">{item.reciter}</p>
        </div>
        <audio ref={audioRef} controls src={item.url} className="w-1/2 mx-4"></audio>
        <button onClick={onClear} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Player;
