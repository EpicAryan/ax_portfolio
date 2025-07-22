// import React, { useRef } from "react";

// interface GlareHoverProps {
//   width?: string;
//   height?: string;
//   background?: string;
//   borderRadius?: string;
//   borderColor?: string;
//   children?: React.ReactNode;
//   glareColor?: string;
//   glareOpacity?: number;
//   glareAngle?: number;
//   glareSize?: number;
//   transitionDuration?: number;
//   playOnce?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const GlareHover: React.FC<GlareHoverProps> = ({
//   width = "500px",
//   height = "500px",
//   background = "#000",
//   borderRadius = "10px",
//   borderColor = "#333",
//   children,
//   glareColor = "#ffffff",
//   glareOpacity = 0.5,
//   glareAngle = -45,
//   glareSize = 250,
//   transitionDuration = 650,
//   playOnce = false,
//   className = "",
//   style = {},
// }) => {
//   const hex = glareColor.replace("#", "");
//   let rgba = glareColor;
//   if (/^[\dA-Fa-f]{6}$/.test(hex)) {
//     const r = parseInt(hex.slice(0, 2), 16);
//     const g = parseInt(hex.slice(2, 4), 16);
//     const b = parseInt(hex.slice(4, 6), 16);
//     rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
//   } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
//     const r = parseInt(hex[0] + hex[0], 16);
//     const g = parseInt(hex[1] + hex[1], 16);
//     const b = parseInt(hex[2] + hex[2], 16);
//     rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
//   }

//   const overlayRef = useRef<HTMLDivElement | null>(null);

//   const animateIn = () => {
//     const el = overlayRef.current;
//     if (!el) return;

//     el.style.transition = "none";
//     el.style.backgroundPosition = "-100% -100%, 0 0";
//     el.offsetHeight;
//     el.style.transition = `${transitionDuration}ms ease`;
//     el.style.backgroundPosition = "100% 100%, 0 0";
//   };

//   const animateOut = () => {
//     const el = overlayRef.current;
//     if (!el) return;

//     if (playOnce) {
//       el.style.transition = "none";
//       el.style.backgroundPosition = "-100% -100%, 0 0";
//     } else {
//       el.style.transition = `${transitionDuration}ms ease`;
//       el.style.backgroundPosition = "-100% -100%, 0 0";
//     }
//   };

//   const overlayStyle: React.CSSProperties = {
//     position: "absolute",
//     inset: 0,
//     background: `linear-gradient(${glareAngle}deg,
//         hsla(0,0%,0%,0) 60%,
//         ${rgba} 70%,
//         hsla(0,0%,0%,0) 100%)`,
//     backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "-100% -100%, 0 0",
//     pointerEvents: "none",
//   };

//   return (
//     <div
//       className={`relative grid place-items-center overflow-hidden border cursor-pointer ${className}`}
//       style={{
//         width,
//         height,
//         background,
//         borderRadius,
//         borderColor,
//         ...style,
//       }}
//       onMouseEnter={animateIn}
//       onMouseLeave={animateOut}
//     >
//       <div ref={overlayRef} style={overlayStyle} />
//       {children}
//     </div>
//   );
// };

// export default GlareHover;

import React, { useRef, useEffect } from "react";

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  autoPlay?: boolean; // New prop for automatic animation
  autoPlayInterval?: number; // New prop for animation interval
  removeBackground?: boolean; // New prop to remove background/border
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  autoPlay = false, // New prop
  autoPlayInterval = 3000, // New prop
  removeBackground = false, // New prop
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.offsetHeight;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = "none";
      el.style.backgroundPosition = "-100% -100%, 0 0";
    } else {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = "-100% -100%, 0 0";
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (autoPlay) {
      const startAutoPlay = () => {
        animateIn();
        setTimeout(() => {
          animateOut();
        }, transitionDuration);
      };

      // Start immediately
      startAutoPlay();
      
      // Set interval for repeated animation
      intervalRef.current = setInterval(startAutoPlay, autoPlayInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, transitionDuration]);

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
    borderRadius: removeBackground ? borderRadius : undefined,
  };

  // Conditional container styles
  const containerStyles: React.CSSProperties = removeBackground
    ? {
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        borderRadius,
        ...style,
      }
    : {
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      };

  const containerClasses = removeBackground
    ? `relative overflow-hidden ${className}`
    : `relative grid place-items-center overflow-hidden border cursor-pointer ${className}`;

  return (
    <div
      className={containerClasses}
      style={containerStyles}
      onMouseEnter={!autoPlay ? animateIn : undefined}
      onMouseLeave={!autoPlay ? animateOut : undefined}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
