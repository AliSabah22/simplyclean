'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type GalleryImage = {
  before: string;
  after: string;
  title: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group cursor-pointer"
          onClick={() => setSelectedImage(image)}
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image.after}
              alt={`After: ${image.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">View Before/After</span>
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selectedImage.before}
                    alt={`Before: ${selectedImage.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selectedImage.after}
                    alt={`After: ${selectedImage.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              </div>
              <button
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 