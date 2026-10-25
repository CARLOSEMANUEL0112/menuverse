import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

function FoodModel() {
  const burger = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!burger.current) return
    burger.current.rotation.y += delta * 0.18
    burger.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.03
  })

  return (
    <group ref={burger} scale={1.15} position={[0, -0.2, 0]}>
      {/* Pão inferior (base levemente abaulada) */}
      <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.9, 0.28, 48]} />
        <meshStandardMaterial color="#c68b42" roughness={0.7} />
      </mesh>

      {/* Molho / Maionese inferior */}
      <mesh position={[0, -0.93, 0]} castShadow>
        <cylinderGeometry args={[0.82, 0.82, 0.05, 48]} />
        <meshStandardMaterial color="#f4e8c1" roughness={0.4} />
      </mesh>

      {/* Carne Grelhada (Smashed Burger espesso com ranhuras) */}
      <mesh position={[0, -0.62, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.88, 0.88, 0.32, 48]} />
        <meshStandardMaterial color="#4a2113" roughness={0.9} />
      </mesh>

      {/* Queijo Cheddar Derretido (com cantos caídos) */}
      <mesh position={[0, -0.38, 0]} rotation={[0, 0.78, 0]} castShadow>
        <boxGeometry args={[1.45, 0.06, 1.45]} />
        <meshStandardMaterial color="#ff9f1c" roughness={0.3} />
      </mesh>

      {/* Bacon crocante cruzado */}
      <group position={[0, -0.22, 0]}>
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, 0.1]} castShadow>
          <boxGeometry args={[1.1, 0.04, 0.25]} />
          <meshStandardMaterial color="#5c2611" roughness={0.8} />
        </mesh>
        <mesh position={[0.2, 0.02, 0]} rotation={[0, 0, -0.1]} castShadow>
          <boxGeometry args={[1.1, 0.04, 0.25]} />
          <meshStandardMaterial color="#3d180a" roughness={0.8} />
        </mesh>
      </group>

      {/* Rodelas de Tomate */}
      <group position={[0, -0.02, 0]}>
        <mesh position={[-0.25, 0, 0.2]} rotation={[0.1, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
          <meshStandardMaterial color="#d63031" roughness={0.4} />
        </mesh>
        <mesh position={[0.3, 0, -0.15]} rotation={[-0.05, 0, 0.1]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
          <meshStandardMaterial color="#e84118" roughness={0.4} />
        </mesh>
      </group>

      {/* Alface Crespa (folhas onduladas em anel) */}
      <mesh position={[0, 0.25, 0]} rotation={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.95, 0.85, 0.14, 32]} />
        <meshStandardMaterial color="#44bd32" roughness={0.85} />
      </mesh>

      {/* Pão Superior (formato de cúpula clássico de brioche) */}
      <mesh position={[0, 0.78, 0]} scale={[1, 0.75, 1]} castShadow>
        <sphereGeometry args={[0.92, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e1b16e" roughness={0.45} />
      </mesh>

      {/* Sementes de Gergelim no Pão Superior */}
      {[
        [-0.3, 1.05, 0.2],
        [0.15, 1.15, 0.3],
        [0.45, 1.02, 0.1],
        [-0.1, 1.08, -0.25],
        [0.35, 0.95, -0.3],
        [-0.4, 0.98, -0.15],
        [0.05, 1.18, -0.05],
      ].map(([x, y, z], index) => (
        <mesh
          key={index}
          position={[x, y, z]}
          rotation={[0.4, index * 0.6, 0.2]}
        >
          <capsuleGeometry args={[0.022, 0.055, 4, 8]} />
          <meshStandardMaterial color="#f5f6fa" roughness={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export default FoodModel