import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SkillNode = ({ position, children }) => {
    return (
        <group position={position}>
            <Html transform distanceFactor={5}>
                <div className="w-20 h-20 flex items-center justify-center bg-tertiary/80 backdrop-blur-sm rounded-full border border-neon-blue/30 shadow-neon hover:scale-110 duration-300 p-4">
                    {children}
                </div>
            </Html>
        </group>
    );
};

const RotatingSphere = ({ skills }) => {
    const groupRef = useRef();

    // Distribute points on a sphere
    const points = useMemo(() => {
        const p = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
        for (let i = 0; i < skills.length; i++) {
            const y = 1 - (i / (skills.length - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            // Scale by radius of the sphere
            const R = 3.5;
            p.push(new THREE.Vector3(x * R, y * R, z * R));
        }
        return p;
    }, [skills]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {skills.map((skill, i) => (
                <SkillNode key={skill.id} position={points[i]}>
                    <div className="text-4xl text-white drop-shadow-lg">
                        {skill.icon}
                    </div>
                    {/* Optional label if needed, but icon is cleaner */}
                </SkillNode>
            ))}
        </group>
    );
};

const SkillSphere = ({ skills }) => {
    return (
        <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7], fov: 60 }} gl={{ preserveDrawingBuffer: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingSphere skills={skills} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default SkillSphere;
