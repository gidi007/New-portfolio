'use client'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItemProps {
  href: string
  icon: LucideIcon
  label: string
  'data-page': string
  isActive: boolean
  onClick?: () => void
}

export function NavItem({ 
  href, 
  'data-page': dataPage, 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}: NavItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const itemVariants = {
    initial: { scale: 0.96, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  }

  const labelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  return (
    <motion.div
      onClick={handleClick}
      className="relative"
      variants={itemVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden touch-manipulation">
        <motion.div 
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200",
            "active:scale-95 transform relative overflow-hidden",
            isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-5 h-5 relative z-10" />
          {isActive && (
            <motion.span 
              layoutId="mobile-active-bg"
              className="absolute inset-0 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </motion.div>
        <motion.span
          variants={labelVariants}
          className={cn(
            "text-xs mt-1 transition-colors duration-200 whitespace-nowrap",
            isActive ? "text-primary font-medium" : "text-gray-500"
          )}
        >
          {label}
        </motion.span>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <motion.div
          className={cn(
            "relative flex items-center justify-center",
            "w-12 h-12 group",
            "transition-all duration-300"
          )}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Expansion */}
          {isActive && (
            <motion.div
              layoutId="desktop-active-bg"
              className="absolute inset-0 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            />
          )}

          {/* Content Container */}
          <motion.div 
            className={cn(
              "relative z-10 flex items-center",
              "w-12 group-hover:w-auto",
              "px-3 group-hover:px-5",
              "transition-all duration-300"
            )}
            layout
          >
            {/* Icon */}
            <motion.div
              className={cn(
                "absolute flex items-center justify-center w-6 h-6",
                "group-hover:opacity-0 transition-opacity duration-200",
                isActive ? "text-white" : "text-gray-500"
              )}
            >
              <Icon className="w-5 h-5" />
            </motion.div>

            {/* Expanded Content */}
            <motion.div
              className={cn(
                "flex items-center gap-3",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-300",
                isActive ? "text-white" : "text-gray-900 dark:text-white"
              )}
              initial={false}
            >
              <span className="font-medium min-w-max">{label}</span>
              <Icon className="w-5 h-5 flex-shrink-0" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}