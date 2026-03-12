import { useState, useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Icosahedron, Torus } from "@react-three/drei";

const TechEnvironment = () => {
    const pointsRef = useRef();
    const groupRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Create particles forming a code/space tunnel
    const particlesCount = isMobile ? 4000 : 8000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Cylinder / tunnel distribution
            const theta = Math.random() * Math.PI * 2;
            const radius = 1.5 + Math.random() * 10;
            const z = (Math.random() - 0.5) * 60; // Spread along Z axis

            positions[i * 3] = Math.cos(theta) * radius;
            positions[i * 3 + 1] = Math.sin(theta) * radius;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, [isMobile, particlesCount]);

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Rotate the whole tunnel slowly
            pointsRef.current.rotation.z -= delta * 0.05;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }

        if (groupRef.current) {
            // Move based on scroll
            const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = maxScrollHeight > 0 ? scrollY / maxScrollHeight : 0;

            // The camera is at z=1. As we increase position.z, the particles move towards the camera
            const targetZ = scrollProgress * 50;

            groupRef.current.position.z = THREE.MathUtils.lerp(
                groupRef.current.position.z,
                targetZ,
                0.05
            );

            // Add a slight tilt on scroll
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                scrollProgress * Math.PI * 0.1,
                0.05
            );
        }
    });

    return (
        <group ref={groupRef}>
            <fog attach="fog" args={["#050816", 5, 25]} />

            {/* Sparkles / Stars Field */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesCount}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#00f3ff" // neon blue
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={isMobile ? 0.4 : 0.8}
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Floating Developer/Abstract Geometry */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1} position={isMobile ? [-3, 4, -5] : [-2, 1, -5]}>
                <Icosahedron args={[0.5, 0]}>
                    <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.6} />
                </Icosahedron>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[2, -1, -15]}>
                <Torus args={[0.8, 0.02, 16, 100]}>
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.3} />
                </Torus>
            </Float>

            <Float speed={3} rotationIntensity={3} floatIntensity={0.5} position={[-3, -2, -25]}>
                <Icosahedron args={[0.8, 1]}>
                    <meshBasicMaterial color="#f272c8" wireframe transparent opacity={0.5} />
                </Icosahedron>
            </Float>

            <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[3, 2, -35]}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="#aaa6c3" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>

            <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[0, -1, -45]}>
                <Icosahedron args={[0.6, 0]}>
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.5} />
                </Icosahedron>
            </Float>

            <ambientLight intensity={0.5} />
        </group>
    );
};

export default TechEnvironment;
