import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { MediaItem } from './types';
import { View } from './types';
import { ALL_MEDIA } from './data/media';
import HomeScreen from './components/HomeScreen';
import MediaListScreen from './components/MediaListScreen';
import Player from './components/Player';
import useFavorites from './hooks/useFavorites';
import SplashScreen from './components/SplashScreen';
import { logoBase64 } from './assets/logo';

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.Home);
  const [mediaItems] = useState<MediaItem[]>(ALL_MEDIA);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<MediaItem | null>(null);
  const { favorites, toggleFavorite } = useFavorites();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/icons/icon-192.png';
    }
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handleSelectCategory = useCallback((selectedView: View) => {
    setView(selectedView);
  }, []);

  const handleBack = useCallback(() => {
    setView(View.Home);
  }, []);
  
  const handlePlay = useCallback((item: MediaItem) => {
    if (item.type === 'audio') {
      setCurrentlyPlaying(item);
    } else {
      // For video, you might want to open a modal or navigate to a new page
      // For now, we'll just log it and maybe open in a new tab if it's a direct link.
      console.log(`Playing video: ${item.title} from ${item.url}`);
      window.open(item.url, '_blank');
    }
  }, []);

  const latestAdditions = useMemo(() => 
    [...mediaItems].sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()).slice(0, 10), 
    [mediaItems]
  );

  const favoriteItems = useMemo(() => 
    mediaItems.filter(item => favorites.includes(item.id)), 
    [mediaItems, favorites]
  );
  
  const playlists = useMemo(() => 
    mediaItems.filter(item => item.playlist === 'روائع التلاوات'),
    [mediaItems]
  );

  const renderContent = () => {
    switch (view) {
      case View.Latest:
        return (
          <MediaListScreen
            title="آخر الإضافات"
            items={latestAdditions}
            onBack={handleBack}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onPlay={handlePlay}
            currentlyPlayingId={currentlyPlaying?.id}
          />
        );
      case View.Favorites:
        return (
          <MediaListScreen
            title="المفضلة"
            items={favoriteItems}
            onBack={handleBack}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onPlay={handlePlay}
            currentlyPlayingId={currentlyPlaying?.id}
          />
        );
      case View.Playlists:
        return (
          <MediaListScreen
            title="القوائم"
            items={playlists}
            onBack={handleBack}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onPlay={handlePlay}
            currentlyPlayingId={currentlyPlaying?.id}
          />
        );
      case View.Home:
      default:
        return <HomeScreen onSelectCategory={handleSelectCategory} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-[#2A525E] text-white flex flex-col animate-fade-in">
      <header className="bg-[#1E434F]/50 backdrop-blur-sm shadow-lg p-4 sticky top-0 z-10">
        <div className="flex items-center justify-center gap-3">
            <img src={logoBase64} alt="Logo" className="h-10 w-10 object-cover rounded-lg" />
            <h1 className="text-2xl font-bold text-center text-[#A0E0E4]">تلاوات احمد المسلمي</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
      {currentlyPlaying && <Player item={currentlyPlaying} onClear={() => setCurrentlyPlaying(null)} />}
    </div>
  );
};

export default App;
