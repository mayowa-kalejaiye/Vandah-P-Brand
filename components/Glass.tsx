import React from "react";

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  borderRadius?: string | number;
  blurAmount?: number;
  opacity?: number;
  borderColor?: string;
  borderWidth?: string | number;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

/**
 * Advanced glassmorphism effect using SVG filter for more realistic blur and light scattering.
 *
 * Props:
 * - borderRadius: CSS border-radius value (default: '2rem')
 * - blurAmount: Amount of blur in px (default: 24)
 * - opacity: Background opacity (default: 0.18)
 * - borderColor: Border color (default: 'rgba(255,255,255,0.35)')
 * - borderWidth: Border width (default: '2px')
 * - backgroundColor: Glass background color (default: '#fff')
 */
const Glass: React.FC<GlassProps> = ({
  children,
  borderRadius = "9999px",
  blurAmount = 24,
  opacity = 0.18,
  borderColor = "rgba(255,255,255,0.35)",
  borderWidth = "2px",
  backgroundColor = "#fff",
  style = {},
  ...rest
}) => {
  return (
    <div
      {...rest}
      style={{
        position: "relative",
        borderRadius,
        overflow: "hidden",
        border: `${borderWidth} solid ${borderColor}`,
        background: `linear-gradient(135deg, ${backgroundColor}${Math.round(
          opacity * 255
        ).toString(16)} 0%, ${backgroundColor}00 100%)`,
        ...style,
      }}
    >
      {/* SVG filter for advanced glass blur */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
        <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={blurAmount} result="blur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.7" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx={borderRadius}
          fill={backgroundColor}
          opacity={opacity}
          filter="url(#glass-blur)"
        />
      </svg>
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default Glass;
