import React from 'react';
import { MediaItem } from '../types';
import MediaItemCard from './MediaItemCard';
import { BackIcon } from './icons/Icons';
import { logoBase64 } from '../assets/logo';

interface MediaListScreenProps {
  title: string;
  items: MediaItem[];
  onBack: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onPlay: (item: MediaItem) => void;
  onDownload: (item: MediaItem) => void;
  currentlyPlayingId?: string | null;
}

const MediaListScreen: React.FC<MediaListScreenProps> = ({ 
  title, 
  items, 
  onBack, 
  favorites, 
  onToggleFavorite,
  onPlay,
  onDownload,
  currentlyPlayingId
}) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
        >
          <BackIcon />
        </button>
        <img src={logoBase64} alt="Logo" className="h-8 w-8 object-cover rounded-md mr-4" />
        <h2 className="text-3xl font-bold text-[#A0E0E4] mr-4">{title}</h2>
      </div>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map(item => (
            <MediaItemCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={onToggleFavorite}
              onPlay={onPlay}
              onDownload={onDownload}
              isPlaying={currentlyPlayingId === item.id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400">لا توجد عناصر في هذه القائمة بعد.</p>
        </div>
      )}
    </div>
  );
};

export default MediaListScreen;
