import React from 'react';
import { logoBase64 } from '../assets/logo';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#2A525E] flex flex-col items-center justify-center z-50 animate-fade-out-splash">
      <img src={logoBase64} alt="تلاوات احمد المسلمي" className="w-64 h-64 object-cover rounded-3xl shadow-2xl mb-8" />
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#A0E0E4] drop-shadow-lg" style={{ fontFamily: 'Tajawal, sans-serif' }}>تلاوات</h1>
        <h2 className="text-4xl font-medium text-white/90 drop-shadow-lg" style={{ fontFamily: 'Tajawal, sans-serif' }}>أحمد المسلمي</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
