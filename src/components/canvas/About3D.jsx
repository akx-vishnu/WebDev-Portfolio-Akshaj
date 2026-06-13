import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const TechParticles = (props) => {
    const ref = useRef();
    // Reduced from 3000 to 1500 particles — still looks great, half the GPU cost
    const sphere = random.inBox(new Float32Array(1500), { sides: [4, 4, 4] });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const ConnectingLines = () => {
    // This is a visual representation of "connections" or "neural network"
    // Ideally, we'd use Line segments connecting points, but for performance in a background,
    // we can use a few floating geometric wireframes.
    return (
        <group>
            {[...Array(4)].map((_, i) => (
                <Float key={i} speed={0.8 + i * 0.3} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 2 - 1]}>
                        <icosahedronGeometry args={[0.5 + Math.random() * 0.5, 0]} />
                        <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.25} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

import { useInView } from 'framer-motion';

const About3D = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "200px" });

    return (
        <div ref={ref} className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            {isInView && (
                <Canvas
                    camera={{ position: [0, 0, 5] }}
                    gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
                    dpr={[1, 1.5]}
                >
                    <ambientLight intensity={0.5} />
                    <TechParticles />
                    <ConnectingLines />
                </Canvas>
            )}
        </div>
    );
};

export default About3D;
