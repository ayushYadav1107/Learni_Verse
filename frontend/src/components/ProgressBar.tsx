import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  color?: 'green' | 'blue' | 'red' | 'purple' | 'gold';
  label?: string;
  showValue?: boolean;
}

const ProgressBar = ({ 
  value, 
  max, 
  className,
  color = 'green',
  label,
  showValue = false
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const colorStyles = {
    green: {
      barColor: 'var(--bar-color, #4FAA45)',
      barColorLight: 'var(--bar-color-light, #60C253)'
    },
    blue: {
      barColor: 'var(--bar-color, #5B9AE2)',
      barColorLight: 'var(--bar-color-light, #6BA9F1)'
    },
    red: {
      barColor: 'var(--bar-color, #B02E26)',
      barColorLight: 'var(--bar-color-light, #C03C34)'
    },
    purple: {
      barColor: 'var(--bar-color, #8932B8)',
      barColorLight: 'var(--bar-color-light, #9841C9)'
    },
    gold: {
      barColor: 'var(--bar-color, #FFB300)',
      barColorLight: 'var(--bar-color-light, #FFC233)'
    }
  };
  
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="font-pixel text-xs">{label}</span>
          {showValue && (
            <span className="font-pixel text-xs">{value}/{max}</span>
          )}
        </div>
      )}
      <div className="progress-bar pixel-corners">
        <div 
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            '--bar-color': colorStyles[color].barColor,
            '--bar-color-light': colorStyles[color].barColorLight
          } as React.CSSProperties}          
        />
      </div>
    </div>
  );
};

export default ProgressBar;