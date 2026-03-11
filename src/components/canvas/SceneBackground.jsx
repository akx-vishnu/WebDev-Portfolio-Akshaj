import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TechEnvironment from "./TechEnvironment";

const SceneBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-primary">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <TechEnvironment />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default SceneBackground;
