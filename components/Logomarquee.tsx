'use client'
import React from 'react';

const logos1 = [
  { id: 1, component: <img src="/native.jpeg" alt="GoNative" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 2, component: <img src="/nacos.png" alt="NACOS" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 3, component: <img src="/CAMBES.png" alt="Campus Bestie" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 4, component: <img src="/web3.png" alt="Web3" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 5, component: <img src="/public.png" alt="Public" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 6, component: <img src="/Vandah2.png" alt="Vandah" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> }
];

const logos2 = [
  { id: 1, component: <img src="/Vandah2.png" alt="Vandah" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 2, component: <img src="/public.png" alt="Public" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 3, component: <img src="/web3.png" alt="Web3" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 4, component: <img src="/CAMBES.png" alt="Campus Bestie" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 5, component: <img src="/nacos.png" alt="NACOS" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> },
  { id: 6, component: <img src="/native.jpeg" alt="GoNative" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" /> }
];

function Logomarquee() {
  // We need to inject the keyframes animation into the document's head
  // because Tailwind CSS doesn't directly support the 'cqw' unit.
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({ logos, direction = 'forwards' }: { logos: typeof logos1; direction?: string }) => {
    const numItems = logos.length;
    const speed = '10s';
    const itemWidth = '120px';
    const itemGap = '25px';

    return (
      <div
        className="max-w-full overflow-hidden"
        style={{
          '--speed': speed,
          '--numItems': numItems,
          '--item-width': itemWidth,
          '--item-gap': itemGap,
          '--direction': direction,
          maskImage: 'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
        } as React.CSSProperties}
      >
        <div
          className="w-max flex"
          style={{
            '--track-width': `calc(var(--item-width) * ${numItems})`,
            '--track-gap': `calc(var(--item-gap) * ${numItems})`,
          } as React.CSSProperties}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-gray-800 opacity-60 hover:opacity-100 transition-opacity"
              style={{
                width: 'var(--item-width)',
                aspectRatio: '1 / 1.2',
                marginRight: 'var(--item-gap)',
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              } as React.CSSProperties}
            >
              <div className="w-3/5 h-auto">
                {logo.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="items-center overflow-hidden my-4 md:my-10">
       <div className="w-full max-w-6xl flex flex-col gap-y-6">
            <Marquee logos={logos1} />
            <Marquee logos={logos2} direction="reverse" />
        </div>
    </div>
  );
}

export default Logomarquee;
