import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [targetRect, setTargetRect] = useState(null);
  
  const hoverElRef = useRef(null);

  // Core cursor position (the inner dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Outer ring position (top-left corner)
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // Smooth springs for positions to create the trailing effect
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const ringXSpring = useSpring(ringX, ringSpringConfig);
  const ringYSpring = useSpring(ringY, ringSpringConfig);

  useEffect(() => {
    // Only run on devices with a mouse
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsHidden(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 4); // Center dot (8px / 2 = 4)
      cursorY.set(e.clientY - 4);
      
      if (hoverElRef.current) {
        // Get fresh bounding rect to handle any CSS hover scale differences
        const rect = hoverElRef.current.getBoundingClientRect();
        
        // Find center of the hovered element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to center of the element
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        // Magnetize: move ring to center of element, plus a slight 15% parallax follow
        // We subtract half the target dimensions plus padding (16px total -> 8px each side) to keep it centered
        const pullX = centerX + dx * 0.15 - (rect.width + 16) / 2;
        const pullY = centerY + dy * 0.15 - (rect.height + 16) / 2;
        
        ringX.set(pullX);
        ringY.set(pullY);
      } else {
        // Normal cursor follow
        ringX.set(e.clientX - 16); // Center ring (32px / 2 = 16)
        ringY.set(e.clientY - 16);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      
      // Look for a close clickable container
      const el = target.closest("a") || target.closest("button") || 
                 (computedStyle.cursor === "pointer" ? target : null) ||
                 (target.classList.contains("magnetic") ? target : null);

      if (el && window.getComputedStyle(el).cursor !== "none") {
        hoverElRef.current = el;
        
        // Slight timeout allows CSS transitions on the element to start before calculating bounds
        setTimeout(() => {
          if (hoverElRef.current === el) {
            setTargetRect(el.getBoundingClientRect());
            setIsHovered(true);
          }
        }, 30);
      } else {
        hoverElRef.current = null;
        setTargetRect(null);
        setIsHovered(false);
      }
    };

    const handleScroll = () => {
      if (hoverElRef.current) {
        setTargetRect(hoverElRef.current.getBoundingClientRect());
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(window.matchMedia("(pointer: coarse)").matches);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (isHidden) return null;

  // Determine the animated dimensions
  const isStretching = isHovered && targetRect;
  // If the target is massive, cap the stretch so it doesn't take over the whole screen
  // Otherwise, use the target's width/height + 16px padding
  const ringWidth = isStretching ? Math.min(targetRect.width + 16, 400) : 32;
  const ringHeight = isStretching ? Math.min(targetRect.height + 16, 400) : 32;

  // We use framer-motion's 'animate' for morphing dimensions and styles, 
  // and useMotionValue (with springs) for the heavily updated x/y positions to avoid re-rendering
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 border pointer-events-none z-[10000] mix-blend-screen"
        animate={{
          width: ringWidth,
          height: ringHeight,
          borderRadius: isStretching ? "12px" : "50%",
          borderColor: isStretching ? "#00f3ff" : "#bc13fe",
          backgroundColor: isStretching ? "rgba(0, 243, 255, 0.05)" : "transparent",
        }}
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] mix-blend-screen"
        animate={{
          backgroundColor: isStretching ? "#bc13fe" : "#00f3ff",
          scale: isStretching ? 0.3 : 1,
          opacity: isStretching ? 0.5 : 1
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
};

export default CustomCursor;
