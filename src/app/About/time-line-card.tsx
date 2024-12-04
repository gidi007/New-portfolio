import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TimelineCardProps {
  item: {
    date: string;
    title: string;
    organization: string;
    description: string;
  };
  direction?: 'left' | 'right';
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ item, direction = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col space-y-2">
          <span className="text-sm text-primary font-medium">{item.date}</span>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">{item.organization}</p>
          <p className="text-sm leading-relaxed">{item.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

