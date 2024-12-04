'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  highlight?: string
  shadowText: string
  className?: string
}

export function SectionHeader({
  title,
  highlight,
  shadowText,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn("relative text-center mb-12", className)}>
      <motion.h2 
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-foreground">{title}</span>
        {highlight && (
          <span className="text-primary ml-2">{highlight}</span>
        )}
      </motion.h2>
      <span 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl lg:text-9xl font-bold text-muted-foreground/10 whitespace-nowrap z-0"
        aria-hidden="true"
      >
        {shadowText}
      </span>
    </div>
  )
}

