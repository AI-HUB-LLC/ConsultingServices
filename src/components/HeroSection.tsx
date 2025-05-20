import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional background image URL
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <section className="relative h-[40vh] bg-hpedark flex items-center justify-center text-center">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-hpedark bg-opacity-70"></div>
        </div>
      )}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection; 