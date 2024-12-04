  //Hero/hero.tsx
  'use client'
  import React, { useState, useEffect, ReactNode } from 'react';
  import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion';
  import { 
    Download, 
    Send, 
    Linkedin, 
    Github, 
    Twitter, 
    ArrowRight, 
    X 
  } from 'lucide-react';
  import { useRouter } from 'next/navigation';
  import AnimatedProfile from '../Hero/AnimatedProfile'

  // Typed Modal Component
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }

  const EnhancedModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    );
  };

  // Enhanced Social Links Component
  const SocialLinks = () => {
    const socialLinks = [
      { 
        Icon: Linkedin, 
        href: "https://www.linkedin.com/in/favourbawa", 
        color: "bg-blue-100 dark:bg-blue-900/30",
        hoverColor: "hover:bg-blue-200 dark:hover:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-300",
        name: "LinkedIn"
      },
      { 
        Icon: Github, 
        href: "https://github.com/FavourB", 
        color: "bg-gray-100 dark:bg-gray-900/30",
        hoverColor: "hover:bg-gray-200 dark:hover:bg-gray-900/50",
        iconColor: "text-gray-800 dark:text-gray-300",
        name: "GitHub"
      },
      { 
        Icon: Twitter, 
        href: "https://www.upwork.com/freelancers/~01a6f25e401b07c37c", 
        color: "bg-sky-100 dark:bg-sky-900/30",
        hoverColor: "hover:bg-sky-200 dark:hover:bg-sky-900/50",
        iconColor: "text-sky-600 dark:text-sky-300",
        name: "Twitter"
      }
    ];

    return (
      <div className="flex space-x-4 mt-6">
        {socialLinks.map(({ Icon, href, color, hoverColor, iconColor, name }) => (
          <motion.a 
            key={href} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              ${color} ${hoverColor} 
              rounded-full p-3 flex items-center justify-center 
              transition-all duration-300 
              hover:scale-110 hover:shadow-lg group
              relative overflow-hidden
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={name}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <Icon className={`w-6 h-6 ${iconColor} relative z-10`} />
          </motion.a>
        ))}
      </div>
    );
  };
  export default function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const { scrollYProgress } = useViewportScroll();

    // Create parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const handleImageClick = () => {
      router.push('/About');
    };


    if (!isMounted) return null;
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Dynamic Moving Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{
            y: backgroundY,
            rotate: backgroundRotate,
          }}
        >
          {/* Multiple Gradient Layers */}
          <div 
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
            bg-gradient-to-r 
            from-primary/10 
            via-blue-100/20 
            to-purple-100/10 
            dark:from-primary/20 
            dark:via-blue-900/20 
            dark:to-purple-900/10 
            opacity-50 blur-3xl animate-slow-spin"
          />
          <div 
            className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] 
            bg-gradient-to-l 
            from-primary/5 
            via-green-100/20 
            to-cyan-100/10 
            dark:from-primary/10 
            dark:via-green-900/20 
            dark:to-cyan-900/10 
            opacity-40 blur-3xl animate-reverse-slow-spin"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start z-20"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left 
                text-gray-900 dark:text-white"
              >
                Favour <span className="text-primary">Bawa</span>
              </motion.h1>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold 
                text-gray-700 dark:text-gray-200 mb-6 text-center lg:text-left"
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base md:text-lg text-center lg:text-left 
                text-gray-700 dark:text-gray-300 max-w-xl mb-8"
              >
                Crafting elegant, user-centric web experiences that blend creativity with cutting-edge technology.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-xl"
              >
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center 
                  bg-primary text-white px-6 py-3 rounded-full 
                  hover:bg-primary/90 transition-colors group"
                >
                  Get In Touch
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="/FAVOUR BAWA - RESUME.pdf" 
                  download
                  className="flex-1 inline-flex items-center justify-center 
                  border-2 border-primary text-primary px-6 py-3 
                  rounded-full hover:bg-primary/10 transition-colors group"
                >
                  Download CV
                  <Download className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </motion.div>

              <SocialLinks />
            </motion.div>
            
        {/* PROFILE IMAGE */}
            <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex items-center justify-center z-20"
  >
    <AnimatedProfile onClick={handleImageClick} className="shadow-2xl" />
  </motion.div>
          </div>
        </div>


        {/* Enhanced Modal */}
        <AnimatePresence>
          <EnhancedModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in collaboration or have a project in mind? I&apos;m always open to exciting opportunities.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
                    rounded-lg bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
                    rounded-lg bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
                    rounded-lg bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg 
                  hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </EnhancedModal>
        </AnimatePresence>
      </div>
    );
  }