'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#191919] p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-[#F15025] mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard; 