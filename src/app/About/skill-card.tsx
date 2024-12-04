import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CircularProgress } from '@/components/ui/circular-progress';

interface SkillCardProps {
  skill: {
    label: string;
    value: number;
  };
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
        <div className="relative">
          <CircularProgress value={skill.value} label={skill.label} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          >
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Proficiency Level
              </p>
              <p className="text-2xl font-bold text-primary">
                {skill.value}%
              </p>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};