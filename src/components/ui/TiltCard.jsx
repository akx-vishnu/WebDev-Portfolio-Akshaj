import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const rafRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Cache the bounding rect and only refresh it on first hover
    const rectCache = useRef(null);

    const handleMouseMove = useCallback((e) => {
        // Throttle with rAF — avoids layout thrash on every mousemove
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            if (!ref.current) { rafRef.current = null; return; }
            // Only call getBoundingClientRect once per hover session
            if (!rectCache.current) {
                rectCache.current = ref.current.getBoundingClientRect();
            }
            const rect = rectCache.current;
            const xPct = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const yPct = (e.clientY - rect.top - rect.height / 2) / rect.height;
            x.set(xPct);
            y.set(yPct);
            rafRef.current = null;
        });
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        rectCache.current = null; // invalidate cache on leave
        if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
