
export interface MediaItem {
  id: string;
  title: string;
  reciter: string;
  type: 'audio' | 'video';
  url: string;
  addedDate: string; // ISO date string
  playlist?: string;
}

export enum View {
  Home = 'HOME',
  Latest = 'LATEST',
  Favorites = 'FAVORITES',
  Playlists = 'PLAYLISTS',
}
