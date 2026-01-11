'use client'
import React from 'react';

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function ShimmerButton({ children, href, onClick, className = '' }: ShimmerButtonProps) {
  const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  const ButtonContent = (
    <>
      <style>{customCss}</style>
      <button className={`relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group cursor-pointer ${className}`} onClick={onClick}>
        <div 
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from var(--angle), transparent 25%, #f97316, transparent 50%)',
            animation: 'shimmer-spin 2.5s linear infinite',
          }}
        />
        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-6 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base font-medium">
          {children}
        </span>
      </button>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}
