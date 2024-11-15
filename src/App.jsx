import {
  OrbitControls,
  PresentationControls,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Woman from "./components/Woman";
import * as THREE from "three";
import Interface from "./components/Interface";

export default function App() {
  return (
    <div className="app w-full h-full">
      <Canvas camera={{ position: [0, 0, 2], fov: 70 }} shadows>
        <OrbitControls />
        <Environment preset="warehouse" intensity={0.5} />
        <ambientLight />
        <directionalLight
          color="white"
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          intensity={1}
        />
        <group position={[0, -1, 0]}>
          <Woman />
        </group>
      </Canvas>
      <Interface />
    </div>
  );
}
