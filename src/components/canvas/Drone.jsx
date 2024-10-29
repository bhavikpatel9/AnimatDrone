/* eslint-disable */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader";

const Drone = ({ scale, position }) => {
  const { scene, animations } = useGLTF("/drone/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return (
    <motion.mesh>
      <ambientLight intensity={0.3} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={[0, 1.15, 0]}
      />
    </motion.mesh>
  );
};


const DronesCanvas = () => {
  const [viewportConfig, setViewportConfig] = useState({
    scale: [40, 40, 40],
    position: [0, -6, 0],
  });

  useEffect(() => {
    const updateViewportConfig = () => {
      const width = window.innerWidth;

      if (width <= 200) {
        setViewportConfig({ scale: [10, 10, 10], position: [0, -4, 0] });
      } else if (width <= 400) {
        setViewportConfig({ scale: [20, 20, 20], position: [0, -4.5, 0] });
      } else if (width <= 600) {
        setViewportConfig({ scale: [30, 30, 30], position: [-3, -6, 0] });
      } else if (width <= 800) {
        setViewportConfig({ scale: [33, 33, 33], position: [-3, -6, 0] });
      } else if (width <= 1000) {
        setViewportConfig({ scale: [35, 35, 35], position: [-2, -6.2, 0] });
      } else if (width <= 1200) {
        setViewportConfig({ scale: [38, 38, 38], position: [0, -6.5, 0] });
      } else {
        setViewportConfig({ scale: [40, 40, 40], position: [0, -6, 0] });
      }
    };

    updateViewportConfig();
    window.addEventListener("resize", updateViewportConfig);

    return () => {
      window.removeEventListener("resize", updateViewportConfig);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [9, 20, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Drone
          scale={viewportConfig.scale}
          position={viewportConfig.position}
        />
        <Environment preset="sunset" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DronesCanvas;
