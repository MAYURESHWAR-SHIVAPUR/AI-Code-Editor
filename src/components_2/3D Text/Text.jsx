import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

function RotatingText() {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={8}
      fontWeight={"bold"}
      // height={3}   // 👈 THIS gives thickness
      color="white"
      anchorX="center"
      anchorY="top"
    >
      CODEWAVE AI
    </Text>
  );
}

export default function App() {
  return (
    <div style={{ height: "55vh", background: "transparent" }}>
      <Canvas camera={{ position: [20, -5, 5] }}>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <RotatingText />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}