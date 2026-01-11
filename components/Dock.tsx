"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const EditIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);
const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface DockIconProps {
  mouseX?: MotionValue<number>;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isExternal?: boolean;
}

const DockIcon: React.FC<DockIconProps> = ({
  mouseX,
  href,
  children,
  onClick,
  isActive = false,
  isExternal = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);

  const iconSize = 36;
  const iconMagnification = 60;
  const iconDistance = 140;

  const distance = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-iconDistance, 0, iconDistance],
    [iconSize, iconMagnification, iconSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`flex aspect-square items-center justify-center rounded-full relative ${
        isActive ? "bg-orange-500/20" : ""
      }`}
    >
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
      )}
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex h-full w-full items-center justify-center"
        onClick={handleClick}
      >
        {children}
      </a>
    </motion.div>
  );
};

interface DockProps {
  children: React.ReactNode;
}

const Dock: React.FC<DockProps> = ({ children }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-[58px] items-center gap-2 rounded-2xl bg-white/80 dark:bg-black/50 px-2 border border-black/10 dark:border-white/10 backdrop-blur-lg"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(
            child as React.ReactElement<DockIconProps>,
            {
              ...(child.props as DockIconProps),
              mouseX: mouseX,
            }
          );
        }
        return child;
      })}
    </motion.div>
  );
};

const DockApp: React.FC = () => {
  const pathname = usePathname();
  
  const icons = [
    { name: "Home", component: HomeIcon, href: "/", isExternal: false },
    { name: "Projects", component: EditIcon, href: "/#projects", isExternal: false },
    { name: "Explore My Work", component: BriefcaseIcon, href: "/#explore-my-work", isExternal: false },
    { name: "LinkedIn", component: LinkedinIcon, href: "https://www.linkedin.com/in/abu-victory-479993326/", isExternal: true },
    { name: "X", component: XIcon, href: "https://x.com/realvandah", isExternal: true },
    { name: "Mail", component: MailIcon, href: "mailto:realvandah@gmail.com", isExternal: true },
  ];

  return (
    <div className="flex flex-col items-center justify-end font-sans">
      <Dock>
        {icons.map((icon) => (
          <DockIcon 
            key={icon.name} 
            href={icon.href}
            isActive={icon.href === "/" ? pathname === "/" : pathname === icon.href}
            isExternal={icon.isExternal}
          >
            <icon.component className="h-full w-full p-2 text-zinc-700 dark:text-zinc-300" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export { DockApp, Dock, DockIcon };
export { HomeIcon, EditIcon, BriefcaseIcon, LinkedinIcon, XIcon, MailIcon };
