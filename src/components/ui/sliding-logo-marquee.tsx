"use client";

import React, { useRef, useState } from "react";
import  {cn} from "@/lib/utils"
// import { Pause, Play } from "lucide-react";

export interface SlidingLogoMarqueeItem {
  id: string;
  content: React.ReactNode;
  href?: string;
}

export interface SlidingLogoMarqueeProps {
  /** Array of logo/content items to display */
  items: SlidingLogoMarqueeItem[];
  /** Animation speed (lower = faster) */
  speed?: number;
  /** Whether to pause animation on hover */
  pauseOnHover?: boolean;
  /** Enable blur effects on edges */
  enableBlur?: boolean;
  /** Blur intensity (0-10) */
  blurIntensity?: number;
  /** Container height */
  height?: string;
  /** Container width */
  width?: string;
  /** Gap between items */
  gap?: string;
  /** Scale factor for the entire component */
  scale?: number;
  /** Direction of animation */
  direction?: "horizontal" | "vertical";
  /** Whether animation is initially playing */
  autoPlay?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Enable grid background pattern */
  showGridBackground?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Callback when item is clicked */
  onItemClick?: (item: SlidingLogoMarqueeItem) => void;
  /** Whether to show spill effect outside container */
  enableSpillEffect?: boolean;
  /** Number of animation steps for smooth transition */
  animationSteps?: number;
  /** Whether to show play/pause controls */
  showControls?: boolean; // Added prop for controlling controls visibility
}

export function SlidingLogoMarquee({
  items,
  speed = 60,
  pauseOnHover = true,
  enableBlur = true,
  blurIntensity = 1,
  height = "100px",
  width = "100%",
  gap = "0.5rem",
  scale = 1,
  direction = "horizontal",
  autoPlay = true,
  backgroundColor,
  showGridBackground = false,
  className,
  onItemClick,
  enableSpillEffect = false,
  animationSteps = 8,
//   showControls = true, // Default to true
}: SlidingLogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on resize
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         // const rect = containerRef.current.getBoundingClientRect();
//         // setDimensions({ width: rect.width, height: rect.height });
//       }
//     };

//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, []);

  const handleItemClick = (item: SlidingLogoMarqueeItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    onItemClick?.(item);
  };

//   const togglePlayState = () => {
//     setIsPlaying(!isPlaying);
//   };

  // Generate unique ID for blur filters
//   const blurId = `blur-${Math.random().toString(36).substr(2, 9)}`;

  // Create blur div elements
  const blurDivs = Array.from({ length: animationSteps }, (_, index) => (
    <div key={index} style={{ "--index": index } as React.CSSProperties} />
  ));

  return (
    <>
      <style>
        {`
          .sliding-marquee-container {
            --speed: ${speed};
            --count: ${items.length};
            --scale: ${scale};
            --blur: ${blurIntensity};
            --blurs: ${animationSteps};
          }

   .sliding-marquee-resizable {
            overflow: clip;
            container-type: size; /* Keep this if you plan to use @container for *descendants* later */
            scale: var(--scale);
            width: 100%;
            height: ${height};
            min-height: 100px;
            min-width: 350px; /* Default for mobile */
          }

          /* Tablet breakpoint based on viewport */
          @media (min-width: 600px) { /* Adjust this breakpoint as per your design system */
            .sliding-marquee-resizable {
              min-width: 500px;
            }
          }

          /* PC breakpoint based on viewport */
          @media (min-width: 1024px) { /* Adjust this breakpoint as per your design system */
            .sliding-marquee-resizable {
              min-width: 600px;
            }
          }

          @media (min-width: 1280px) { /* Adjust this breakpoint as per your design system */
            .sliding-marquee-resizable {
              min-width: 800px;
            }
          }
          
           @media (min-width: 1536px) { /* Adjust this breakpoint as per your design system */
            .sliding-marquee-resizable {
              min-width: 900px;
            }
          }

          .sliding-marquee-resizable[data-spill="true"] .sliding-marquee-inner::after {
            content: "";
            position: fixed;
            top: 50%;
            left: 50%;
            width: calc(var(--scale) * 10000vw);
            height: calc(var(--scale) * 10000vh);
            pointer-events: none;
            translate: -50% -50%;
            mask: linear-gradient(white, white) 50% 50% / 100% 100% no-repeat,
                linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat;
            mask-composite: exclude;
          }

          .sliding-marquee-inner {
            height: 100%;
            width: 100%;
            position: relative;
            mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
            display: grid;
            min-height: 100px;
            min-width: 300px;
            pointer-events: none;
          }

          .sliding-marquee-blur {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 25%;
            z-index: 2;
            pointer-events: none;
          }

          .sliding-marquee-blur--right {
            right: 0;
          }

          .sliding-marquee-blur--left {
            left: 0;
            rotate: 180deg;
          }

          .sliding-marquee-blur div {
            position: absolute;
            inset: 0;
            z-index: var(--index);
            mask: linear-gradient(90deg,
                transparent calc(var(--index) * calc((100 / var(--blurs)) * 1%)),
                black calc((var(--index) + 1) * calc((100 / var(--blurs)) * 1%)),
                black calc((var(--index) + 2) * calc((100 / var(--blurs)) * 1%)),
                transparent calc((var(--index) + 3) * calc((100 / var(--blurs)) * 1%)));
            backdrop-filter: blur(calc((var(--index, 0) * var(--blur, 0)) * 1px));
          }

          .sliding-marquee-list {
            display: flex;
            gap: ${gap};
            padding: 0;
            margin: 0;
            list-style-type: none;
            height: 100%;
            width: fit-content;
            align-items: center;
            pointer-events: auto;
          }

          .sliding-marquee-item {
            height: 80%;
            aspect-ratio: 16 / 9;
            font-size: clamp(1rem, 3vw + 0.5rem, 4rem);
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: transform 0.2s ease;
            pointer-events: auto;
          }

          .sliding-marquee-item:hover {
            transform: scale(1.05);
          }

          .sliding-marquee-item svg {
            height: 65%;
          }

          [data-play-state="running"] .sliding-marquee-list,
          [data-play-state="running"] .sliding-marquee-item {
            animation-play-state: running !important;
          }

          [data-play-state="paused"] .sliding-marquee-list,
          [data-play-state="paused"] .sliding-marquee-item {
            animation-play-state: paused !important;
          }

          @media (prefers-reduced-motion: no-preference) {
            [data-translate="items"] .sliding-marquee-list {
              gap: 0;
            }

            [data-translate="items"][data-direction="horizontal"] .sliding-marquee-inner {
              padding-inline: 0;
            }

            [data-translate="items"] .sliding-marquee-item {
              --duration: calc(var(--speed) * 1s);
              --delay: calc((var(--duration) / var(--count)) * (var(--index, 0) * -1));
              animation: slide var(--duration) var(--delay) infinite linear paused;
              translate: var(--origin-x) var(--origin-y);
            }

            [data-translate="items"][data-direction="horizontal"] .sliding-marquee-item {
              --origin-x: calc(((var(--count) - var(--index)) + var(--inset, 0)) * 100%);
              --origin-y: 0;
              --destination-x: calc(calc((var(--index) + 1 + var(--outset, 0)) * -100%));
              --destination-y: 0;
            }

            @keyframes slide {
              100% {
                translate: var(--destination-x) var(--destination-y);
              }
            }
          }
        `}
      </style>

      <div
        ref={containerRef}
        className={cn("sliding-marquee-container relative", className)}
        style={{
          width,
          background: backgroundColor,
        }}
        onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
      >
        {showGridBackground && <div className="" />}

        <div
          className="sliding-marquee-resizable "
          data-translate="items"
          data-direction={direction}
          data-blurring={enableBlur}
          data-play-state={isPlaying ? "running" : "paused"}
          data-spill={enableSpillEffect}
        >
          <div className="sliding-marquee-inner">
            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--left">
                {blurDivs}
              </div>
            )}

            <ul className="sliding-marquee-list text-foreground">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className="sliding-marquee-item text-foreground"
                  style={{ "--index": index } as React.CSSProperties}
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleItemClick(item);
                    }
                  }}
                >
                  {item.content}
                </li>
              ))}
            </ul>

            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--right">
                {blurDivs}
              </div>
            )}
          </div>
        </div>

        {/* Play/Pause Controls - Conditionally rendered based on showControls prop */}
        {/* {showControls && (
          <button
            onClick={togglePlayState}
            className="absolute top-0 right-0 z-10 px-2 py-1 text-xs bg-white/10 text-foreground
            rounded hover:bg-background/20 transition-colors"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )} */}
      </div>
    </>
  );
}

export default SlidingLogoMarquee;
