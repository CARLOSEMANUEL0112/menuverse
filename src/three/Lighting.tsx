function Lighting() {
  return (
    <>
      <ambientLight intensity={1.2} />
      
      {/* Luz principal superior */}
      <directionalLight
        position={[4, 8, 5]}
        intensity={3.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Luz de destaque quente lateral (tom de brasa/fogo) */}
      <pointLight
        position={[-5, 2, 3]}
        intensity={40}
        color="#ff7b00"
      />

      {/* Luz de preenchimento dourada suave */}
      <pointLight
        position={[4, 3, -4]}
        intensity={25}
        color="#ffd37a"
      />
    </>
  )
}

export default Lighting