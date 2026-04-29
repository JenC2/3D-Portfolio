import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Planet } from "./Planet";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const scale = isMobile ? 0.8 : isTablet ? 0.9 : 1.2;

  return (
    <Canvas camera={{ position: [-4, 3, 6], fov: 45 }}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        // maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
      />
      <group scale={scale}>
        <Planet />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
