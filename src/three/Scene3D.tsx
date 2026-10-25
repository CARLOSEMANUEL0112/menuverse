
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import FoodModel from './FoodModel'

function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 7], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.1} />

        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
          castShadow
        />

        <pointLight
          position={[-4, 1, 3]}
          intensity={35}
          color="#ff8a38"
        />

        <pointLight
          position={[3, 2, -3]}
          intensity={20}
          color="#ffd99a"
        />

        <FoodModel />

        <ContactShadows
          position={[0, -1.75, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
          far={3}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          target={[0, 0.1, 0]}
        />
      </Suspense>
    </Canvas>
  )
}

export default Scene3D
