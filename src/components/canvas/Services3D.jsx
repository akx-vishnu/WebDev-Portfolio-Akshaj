import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = ({ count = 50 }) => {
    const mesh = useRef();

    // Create random positions and shapes
    const data = useMemo(() => {
        return new Array(count).fill().map(() => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ],
            scale: 0.2 + Math.random() * 0.5,
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
            speed: 0.01 + Math.random() * 0.05
        }));
    }, [count]);

    return (
        <group>
            {data.map((props, i) => (
                <Float key={i} speed={props.speed * 20} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
                        {i % 2 === 0 ? <boxGeometry /> : <icosahedronGeometry />}
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#00f3ff" : "#bc13fe"}
                            transparent
                            opacity={0.2}
                            roughness={0.8}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const Services3D = () => {
    return (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default Services3D;
