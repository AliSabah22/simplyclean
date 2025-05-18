'use client';

import { motion } from 'framer-motion';
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
            className="text-4xl md:text-6xl font-bigshot mb-6 text-white"
          >
            Get That Showroom Shine – Right at Your Driveway
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Professional mobile car detailing. We come to you anywhere in Burlington & Oakville.
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
          <h2 className="text-3xl font-bigshot text-center mb-12 text-[#191919]">Our Services</h2>
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
          <h2 className="text-3xl font-bigshot text-center mb-12 text-[#191919]">Why Choose Us</h2>
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
          <h2 className="text-3xl font-bigshot text-center mb-12 text-[#191919]">Our Work</h2>
          <ImageCarousel images={galleryImages} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#E6E8E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bigshot text-center mb-12 text-white">What Our Customers Say</h2>
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
            <h2 className="text-3xl font-bigshot mb-4">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#E6E8E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bigshot text-center mb-12 text-[#191919]">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bigshot mb-6 text-[#191919]">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#F15025] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+1234567890" className="text-lg font-semibold text-[#191919] hover:text-[#F15025] transition-colors">(123) 456-7890</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#F15025] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:info@simplydriven.com" className="text-lg font-semibold text-[#191919] hover:text-[#F15025] transition-colors">info@simplydriven.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#F15025] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hours</p>
                      <p className="text-lg font-semibold text-[#191919]">Mon-Sat: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bigshot mb-6 text-[#191919]">Service Area</h3>
              <div className="w-full h-[500px] border-2 border-[#F15025] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/d/embed?mid=1RWDR20sN7unjJpqMJwKzxfEOqW6yVdw&ehbc=2E312F" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bigshot text-center mb-12 text-[#191919]">Book Your Detail</h2>
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
