import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import "../../animtion/animation.css"

function RotatingText() {
    const textRef = useRef();
    const [rotate, setRotate] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRotate(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useFrame(() => {
        if (textRef.current && rotate) {
            textRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Text
            ref={textRef}
            fontSize={window.innerWidth < 768 ? 1 : 2}
            color="white"
            anchorX="center"
            anchorY="middle"
            fontWeight={1000}
            height={3}
        >
            {/* CODENOVA  AI */}
            CODEWAVE AI
        </Text>
    );
}

export default function TextComponent() {
    return (
        <div style={{ height: "60vh", }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                <directionalLight position={[2, 2, 2]} />

                <RotatingText />

                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    );
}