import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Icosahedron, Torus } from "@react-three/drei";

const TechEnvironment = () => {
    const pointsRef = useRef();
    const groupRef = useRef();
    const isMobile = useRef(window.innerWidth < 768);
    // Use ref instead of state — avoids re-render on every scroll tick
    const scrollProgress = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            isMobile.current = window.innerWidth < 768;
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Drastically reduced particle count: 8000 → 2500 desktop, 1000 mobile
    const particlesCount = isMobile.current ? 1000 : 2500;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const radius = 1.5 + Math.random() * 10;
            const z = (Math.random() - 0.5) * 60;
            pos[i * 3]     = Math.cos(theta) * radius;
            pos[i * 3 + 1] = Math.sin(theta) * radius;
            pos[i * 3 + 2] = z;
        }
        return pos;
    }, [particlesCount]);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.z -= delta * 0.05;
            // Only update x rotation every other frame to save CPU
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }

        if (groupRef.current) {
            const sp = scrollProgress.current;
            const targetZ = sp * 50;
            groupRef.current.position.z = THREE.MathUtils.lerp(
                groupRef.current.position.z,
                targetZ,
                0.05
            );
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                sp * Math.PI * 0.1,
                0.05
            );
        }
    });

    return (
        <group ref={groupRef}>
            <fog attach="fog" args={["#050816", 5, 25]} />

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
                    color="#00f3ff"
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={isMobile.current ? 0.4 : 0.8}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>

            {/* Floating geometry — reduced Float speed/intensity slightly */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.8} position={isMobile.current ? [-3, 4, -5] : [-2, 1, -5]}>
                <Icosahedron args={[0.5, 0]}>
                    <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.5} />
                </Icosahedron>
            </Float>

            <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5} position={[2, -1, -15]}>
                <Torus args={[0.8, 0.02, 12, 80]}>
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.3} />
                </Torus>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={0.5} position={[-3, -2, -25]}>
                <Icosahedron args={[0.8, 1]}>
                    <meshBasicMaterial color="#f272c8" wireframe transparent opacity={0.4} />
                </Icosahedron>
            </Float>

            <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5} position={[3, 2, -35]}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="#aaa6c3" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[0, -1, -45]}>
                <Icosahedron args={[0.6, 0]}>
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.4} />
                </Icosahedron>
            </Float>

            <ambientLight intensity={0.5} />
        </group>
    );
};

export default TechEnvironment;
