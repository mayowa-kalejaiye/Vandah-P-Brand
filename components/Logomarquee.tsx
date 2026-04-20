"use client"
import React from 'react';

const brands = [
  "COWRYWISE",
  "BINANCE",
  "COINBASE",
  "FORBES",
  "TECHCRUNCH",
  "WIRED",
  "BLOOMBERG",
  "FAST COMPANY",
];

export default function Logomarquee() {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee-move { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden mt-20 md:mt-40 border-y border-white/5 py-8"
      style={{ position: 'relative' }}
    >
      <div
        className="flex items-center"
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className="flex"
          style={{
            gap: '80px',
            display: 'inline-flex',
            animation: 'marquee-move 30s linear infinite',
            alignItems: 'center',
          }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-500 cursor-default"
              style={{
                display: 'inline-flex',
              }}
            >
              <span className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
