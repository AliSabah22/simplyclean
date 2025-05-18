'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ImageCarouselProps = {
  images: {
    before: string;
    after: string;
    title: string;
  }[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmountRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmountRef.current += 0.5;
      scrollContainer.scrollLeft = scrollAmountRef.current;

      // Reset scroll position when we reach the end of the first set
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollAmountRef.current >= maxScroll) {
        scrollAmountRef.current = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Only take the first 3 images
  const displayImages = images.slice(0, 3);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-12 py-4 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide"
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* First set of images */}
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-none w-[500px] h-[400px]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.after}
                alt={`After: ${image.title}`}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 500px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">View Before/After</span>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Second set of images for seamless scrolling */}
        {displayImages.map((image, index) => (
          <motion.div
            key={`duplicate-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-none w-[500px] h-[400px]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.after}
                alt={`After: ${image.title}`}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">View Before/After</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 