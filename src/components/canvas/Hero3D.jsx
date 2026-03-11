import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inBox(new Float32Array(5000), { sides: [20, 20, 20] });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const AnimatedSphere = () => {
    return (
        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Stars />
                    <OrbitControls enableZoom={false} autoRotate speed={0.5} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Hero3D;
