'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ImageCarousel from '@/components/ImageCarousel';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import {
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const galleryImages = [
    {
      before: '/images/IMG_9367.jpg',
      after: '/images/IMG_9368.PNG',
      title: 'Complete Exterior Detail'
    },
    {
      before: '/images/IMG_9368.PNG',
      after: '/images/IMG_9369.jpg',
      title: 'Interior Deep Clean'
    },
    {
      before: '/images/IMG_9369.jpg',
      after: '/images/IMG_9367.jpg',
      title: 'Headlight Restoration'
    },
    {
      before: '/images/before4.jpg',
      after: '/images/after4.jpg',
      title: 'Engine Bay Detail'
    },
    {
      before: '/images/before5.jpg',
      after: '/images/after5.jpg',
      title: 'Paint Correction'
    },
    {
      before: '/images/before6.jpg',
      after: '/images/after6.jpg',
      title: 'Full Detail Package'
    }
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-[#191919] font-bold text-xl">Simply Driven</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-[#191919] hover:text-[#F15025]">Services</a>
              <a href="#gallery" className="text-[#191919] hover:text-[#F15025]">Gallery</a>
              <a href="#testimonials" className="text-[#191919] hover:text-[#F15025]">Testimonials</a>
              <a href="#booking" className="text-[#191919] hover:text-[#F15025]">Book Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0 bg-[#191919]">
          <ParticleBackground />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Get That Showroom Shine – Right at Your Driveway
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Professional mobile car detailing. We come to you anywhere in [City].
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={scrollToBooking}
            className="bg-[#F15025] hover:bg-[#F15025]/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book My Detail Now
          </motion.button>
          <div className="mt-8 flex justify-center space-x-8 text-white">
            <div className="flex items-center">
              <span className="text-[#F15025]">★</span>
              <span className="ml-1">Google 4.9</span>
            </div>
            <div>500+ cars cleaned</div>
            <div>Eco-friendly</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#E6E8E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#191919]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Exterior Wash & Wax"
              description="Complete exterior cleaning with premium wax protection"
              icon={<SparklesIcon className="w-8 h-8 text-white" />}
              features={["Hand wash", "Clay bar treatment", "Premium wax"]}
            />
            <ServiceCard
              title="Interior Deep Clean"
              description="Thorough interior cleaning and sanitization"
              icon={<ShieldCheckIcon className="w-8 h-8 text-white" />}
              features={["Vacuum", "Steam cleaning", "Leather treatment"]}
            />
            <ServiceCard
              title="Headlight Restoration"
              description="Restore cloudy headlights to like-new condition"
              icon={<SparklesIcon className="w-8 h-8 text-white" />}
              features={["Buffing", "UV protection", "Clear coat"]}
            />
            <ServiceCard
              title="Engine Bay Detail"
              description="Clean and protect your engine compartment"
              icon={<ShieldCheckIcon className="w-8 h-8 text-white" />}
              features={["Degreasing", "Protection", "Inspection"]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#191919]">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <MapPinIcon className="w-6 h-6" />,
                title: "We Come to You",
                description: "Save time and hassle with our mobile service"
              },
              {
                icon: <ClockIcon className="w-6 h-6" />,
                title: "Fast Service",
                description: "60-90 minute professional detailing"
              },
              {
                icon: <ShieldCheckIcon className="w-6 h-6" />,
                title: "100% Satisfaction",
                description: "Guaranteed results or we'll make it right"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="text-[#F15025]">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-2 text-[#191919]">{item.title}</h3>
                  <p className="text-[#191919]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#E6E8E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#191919]">Our Work</h2>
          <ImageCarousel images={galleryImages} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#E6E8E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Smith"
              role="Tesla Owner"
              image="/testimonial1.jpg"
              content="Best mobile detailing service I've ever used. They transformed my car!"
              rating={5}
            />
            <TestimonialCard
              name="Sarah Johnson"
              role="BMW Owner"
              image="/testimonial2.jpg"
              content="Professional, thorough, and convenient. Will definitely use again!"
              rating={5}
            />
            <TestimonialCard
              name="Mike Brown"
              role="Mercedes Owner"
              image="/testimonial3.jpg"
              content="Amazing attention to detail. My car has never looked better!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-[#F15025] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              This Week Only – Complimentary Shine Boost with First Booking
            </h2>
            <p className="text-xl mb-8">
              ✨ Book now and get a free gloss-enhancing wax finish — on us!
            </p>
            <button className="bg-white text-[#F15025] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#E6E8E6] transition-colors">
              Claim Free Upgrade
            </button>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#191919]">Book Your Detail</h2>
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
