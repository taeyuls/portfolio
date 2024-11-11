// components/Tunnel.js
import { Cylinder } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

function Tunnel() {
  useFrame((state) => {
    state.camera.position.z -= 0.1; // 카메라가 앞으로 이동하는 효과
  });

  return (
    <Cylinder args={[5, 5, 20, 32]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial attach="material" color="#333" side={2} />
    </Cylinder>
  );
}

export default function HomePage() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Tunnel />
    </Canvas>
  );
}
