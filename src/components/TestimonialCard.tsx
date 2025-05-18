'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, image, content, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#191919] p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-gray-300 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-[#F15025]">★</span>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 