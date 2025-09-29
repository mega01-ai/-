import React from 'react';
import { MediaItem } from '../types';
import { AudioIcon, VideoIcon, HeartIcon, PlayIcon, PauseIcon } from './icons/Icons';

interface MediaItemCardProps {
  item: MediaItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPlay: (item: MediaItem) => void;
  isPlaying: boolean;
}

const MediaItemCard: React.FC<MediaItemCardProps> = ({ item, isFavorite, onToggleFavorite, onPlay, isPlaying }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(item.id);
  };
  
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlay(item);
  }

  // Use a different style for video items to indicate they open externally
  const isVideo = item.type === 'video';
  const cardClasses = `flex items-center p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer border ${isPlaying && !isVideo ? 'bg-[#A0E0E4]/20 border-[#A0E0E4]' : 'bg-[#1E434F] border-[#A0E0E4]/20 hover:bg-[#3E6A7A]/50'}`;

  return (
    <div 
      className={cardClasses}
      onClick={handlePlayClick}
    >
      <div className="flex-shrink-0 mr-4 text-[#A0E0E4]">
        {item.type === 'audio' ? <AudioIcon /> : <VideoIcon />}
      </div>
      <div className="flex-grow">
        <h4 className="font-semibold text-white">{item.title}</h4>
        <p className="text-sm text-gray-300">{item.reciter}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={handlePlayClick} className="p-2 rounded-full hover:bg-gray-600 transition-colors">
            {isPlaying && !isVideo ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button onClick={handleFavoriteClick} className="p-2 rounded-full hover:bg-gray-600 transition-colors">
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
    </div>
  );
};

export default MediaItemCard;
