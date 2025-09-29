import React from 'react';
import { View } from '../types';
import CategoryCard from './CategoryCard';
import { LatestIcon, HeartIcon, PlaylistIcon, FacebookIcon, XIcon, InstagramIcon, TikTokIcon } from './icons/Icons';
import { logoBase64 } from '../assets/logo';

interface HomeScreenProps {
  onSelectCategory: (view: View) => void;
}

// الرجاء استبدال هذه الروابط المؤقتة بالروابط الحقيقية لصفحات التواصل الاجتماعي الخاصة بك
const SOCIAL_LINKS = {
    facebook: '#', // مثال: 'https://facebook.com/your-page-name'
    twitter: '#',  // مثال: 'https://twitter.com/your-handle'
    instagram: '#',// مثال: 'https://instagram.com/your-username'
    tiktok: '#',   // مثال: 'https://tiktok.com/@your-username'
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectCategory }) => {
  return (
    <div className="animate-fade-in">
        <div className="text-center mb-6 md:mb-10 flex flex-col items-center">
            <img src={logoBase64} alt="App Logo" className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">مرحباً بك</h2>
            <p className="text-gray-300 mt-1 md:mt-2">اختر من القوائم للبدء</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <CategoryCard
                title="آخر الإضافات"
                icon={<LatestIcon />}
                onClick={() => onSelectCategory(View.Latest)}
            />
            <CategoryCard
                title="المفضلة"
                icon={<HeartIcon filled={true} />}
                onClick={() => onSelectCategory(View.Favorites)}
            />
            <CategoryCard
                title="القوائم"
                icon={<PlaylistIcon />}
                onClick={() => onSelectCategory(View.Playlists)}
            />
        </div>

        {/* Social Media Links Section */}
        <div className="mt-6 md:mt-12 text-center">
            <p className="text-base md:text-lg text-gray-200 mb-4">تابعنا على مواقع التواصل</p>
            <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A0E0E4] transition-colors duration-300" aria-label="Facebook">
                    <FacebookIcon />
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A0E0E4] transition-colors duration-300" aria-label="X (formerly Twitter)">
                    <XIcon />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A0E0E4] transition-colors duration-300" aria-label="Instagram">
                    <InstagramIcon />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A0E0E4] transition-colors duration-300" aria-label="TikTok">
                    <TikTokIcon />
                </a>
            </div>
        </div>
    </div>
  );
};

export default HomeScreen;