import { useEffect, useRef } from 'react';

/**
 * Pure CSS 3D rotating skill sphere — zero WebGL cost.
 * Uses perspective + transform-style: preserve-3d to distribute
 * skill icons on the surface of a sphere using the Fibonacci lattice method.
 */
const SkillSphere = ({ skills }) => {
    const sphereRef = useRef(null);
    const rafRef = useRef(null);
    const angleRef = useRef({ y: 0, x: 10 }); // degrees
    const isDragging = useRef(false);
    const lastMouse = useRef({ x: 0, y: 0 });

    const RADIUS = 160; // px — sphere radius

    // Fibonacci lattice: distributes N points uniformly on a sphere surface
    const spherePoints = skills.map((skill, i) => {
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
        const y = 1 - (i / (skills.length - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        return {
            x: Math.cos(theta) * radius * RADIUS,
            y: y * RADIUS,
            z: Math.sin(theta) * radius * RADIUS,
            skill,
        };
    });

    useEffect(() => {
        const sphere = sphereRef.current;
        if (!sphere) return;

        const animate = () => {
            angleRef.current.y += 0.25; // degrees per frame
            sphere.style.transform = `rotateX(${angleRef.current.x}deg) rotateY(${angleRef.current.y}deg)`;
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        // Drag to rotate
        const onMouseDown = (e) => {
            isDragging.current = true;
            lastMouse.current = { x: e.clientX, y: e.clientY };
        };
        const onMouseMove = (e) => {
            if (!isDragging.current) return;
            const dx = e.clientX - lastMouse.current.x;
            const dy = e.clientY - lastMouse.current.y;
            angleRef.current.y += dx * 0.4;
            angleRef.current.x -= dy * 0.4;
            lastMouse.current = { x: e.clientX, y: e.clientY };
        };
        const onMouseUp = () => { isDragging.current = false; };

        sphere.parentElement?.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            cancelAnimationFrame(rafRef.current);
            sphere.parentElement?.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div
            className="w-full h-full min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: '800px' }}
        >
            <div
                ref={sphereRef}
                style={{
                    position: 'relative',
                    width: 0,
                    height: 0,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                }}
            >
                {spherePoints.map(({ x, y, z, skill }) => (
                    <div
                        key={skill.id}
                        style={{
                            position: 'absolute',
                            transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Auto-face-camera billboard trick */}
                        <div
                            style={{ transform: 'translateZ(0)' }}
                            className="w-16 h-16 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-full border border-cyan-400/30 shadow-[0_0_10px_rgba(0,243,255,0.15)] hover:scale-110 transition-transform duration-200 p-2"
                        >
                            <div className="text-2xl leading-none">{skill.icon}</div>
                            <span className="text-[8px] text-gray-400 mt-1 font-mono text-center leading-tight truncate w-full text-center">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSphere;
