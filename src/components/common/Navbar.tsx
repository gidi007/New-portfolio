'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useActiveSection } from '@/context/ActiveSectionContext'
import { NavItem } from './NavItem' 

const navItems = [
  { href: '#hero', 'data-page': 'hero', icon: Home, label: 'HOME' },
  { href: '#about', 'data-page': 'about', icon: User, label: 'ABOUT' },
  { href: '#portfolio', 'data-page': 'portfolio', icon: Briefcase, label: 'WORK' },
  { href: '#blog', 'data-page': 'blog', icon: Mail, label: 'BLOG' },
  { href: '#contact', 'data-page': 'contact', icon: Mail, label: 'CONTACT' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { activeSection, setActiveSection } = useActiveSection()
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = (dataPage: string) => {
    setActiveSection(dataPage)
  }

  const navContainerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Theme Toggle */}
      <motion.button
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 
                   flex items-center justify-center shadow-lg hover:shadow-xl 
                   transition-shadow duration-300"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.button>
      
      {/* Mobile Navigation */}
      <motion.div 
        className="lg:hidden"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 
                     border-t dark:border-gray-800 backdrop-blur-lg"
          initial={{ y: 100 }}
          animate={{ y: isScrollingDown ? 100 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            willChange: 'transform',
            paddingBottom: 'env(safe-area-inset-bottom)'
          }}
        >
          <div className="flex justify-around items-center h-16 px-4">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                {...item}
                isActive={activeSection === item['data-page']}
                onClick={() => handleNavClick(item['data-page'])}
              />
            ))}
          </div>
        </motion.nav>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div 
        className="hidden lg:block"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <NavItem 
              key={item.href}
              {...item}
              isActive={activeSection === item['data-page']}
              onClick={() => handleNavClick(item['data-page'])}
            />
          ))}
        </motion.nav>
      </motion.div>
    </>
  )
}