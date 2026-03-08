import { FC } from "react";

interface FlowerProps {
  className?: string;
  color?: string;
  size?: number;
}

export const FlowerSVG: FC<FlowerProps> = ({ className = "", color = "hsl(340 50% 85%)", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="50"
        cy="50"
        rx="18"
        ry="28"
        fill={color}
        opacity="0.7"
        transform={`rotate(${angle} 50 50) translate(0 -14)`}
      />
    ))}
    <circle cx="50" cy="50" r="10" fill="hsl(45 80% 75%)" />
  </svg>
);

export const SmallFlowerSVG: FC<FlowerProps> = ({ className = "", color = "hsl(270 50% 78%)", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
    {[0, 72, 144, 216, 288].map((angle) => (
      <ellipse
        key={angle}
        cx="50"
        cy="50"
        rx="16"
        ry="24"
        fill={color}
        opacity="0.65"
        transform={`rotate(${angle} 50 50) translate(0 -12)`}
      />
    ))}
    <circle cx="50" cy="50" r="9" fill="hsl(50 70% 80%)" />
  </svg>
);

export const LeafSVG: FC<FlowerProps> = ({ className = "", color = "hsl(140 35% 72%)", size = 30 }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 60 90" className={className} fill="none">
    <path
      d="M30 5 C10 30, 5 60, 30 85 C55 60, 50 30, 30 5Z"
      fill={color}
      opacity="0.6"
    />
    <path d="M30 15 L30 75" stroke="hsl(140 30% 60%)" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export const PetalSVG: FC<FlowerProps> = ({ className = "", color = "hsl(330 55% 82%)", size = 24 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 40 48" className={className} fill="none">
    <ellipse cx="20" cy="24" rx="16" ry="22" fill={color} opacity="0.5" />
  </svg>
);
