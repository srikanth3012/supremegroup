"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Car: React.FC = () => {
  const carRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, "/Car.png"); // Your car image in public folder

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.005; // Rotate slowly
    }
  });

  return (
    <mesh ref={carRef}>
      <planeGeometry args={[4, 2]} /> {/* Width, Height */}
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const CarImageRotation: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Car />
        <OrbitControls enableZoom={false} />{" "}
        {/* Allow user to drag/rotate view */}
      </Canvas>
    </div>
  );
};

export default CarImageRotation;
