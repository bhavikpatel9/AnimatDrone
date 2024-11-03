import React, { forwardRef,useEffect,useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function Model(props) {
const Drone4 = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/droneModels/drone4/drone (4).glb');
  const { onLoad } = props
  // Call onLoad when nodes are available
  useEffect(() => {
    if (nodes) {
      onLoad(); // Notify that the drone model has loaded
    }
  }, [nodes, onLoad]);

  return (
    <group ref={ref} {...props} dispose={null} scale={[2,2,2]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
})

export default Drone4

useGLTF.preload('/droneModels/drone4/drone (4).glb')