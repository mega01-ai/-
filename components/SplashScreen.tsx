import React from 'react';
import { logoBase64 } from '../assets/logo';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#2A525E] flex flex-col items-center justify-center z-50 animate-fade-out-splash">
      <img src={logoBase64} alt="تلاوات احمد المسلمي" className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-2xl" />
    </div>
  );
};

export default SplashScreen;