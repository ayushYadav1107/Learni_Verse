import React, { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PixelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const PixelInput = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block mb-2 font-pixel text-sm text-gray-800">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'pixel-input pixel-corners w-full',
            error && 'border-minecraft-red',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-minecraft-red text-xs font-pixel">{error}</p>
        )}
      </div>
    );
  }
);

PixelInput.displayName = 'PixelInput';

export default PixelInput;
