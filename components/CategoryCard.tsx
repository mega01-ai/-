import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#1E434F]/70 p-4 md:p-8 rounded-lg shadow-xl cursor-pointer
                 border border-[#A0E0E4]/30
                 transition-all duration-300 ease-in-out
                 hover:bg-[#A0E0E4]/20 hover:border-[#A0E0E4] hover:shadow-[#A0E0E4]/20 hover:-translate-y-1 md:hover:-translate-y-2"
    >
      <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
        <div className="text-[#A0E0E4]">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;