import React, { useRef, useState } from "react"
import { useFrame, useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Pillow = props => {
  const mesh = useRef()

  const gltf = useLoader(GLTFLoader, "models/pillow.glb")

  useFrame(() => (mesh.current.rotation.z += 0.004))

  const aspect = window.innerWidth / window.innerHeight

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.1 * aspect, 0.1 * aspect, 0.1 * aspect]}
      rotation={[1.7, 0, 0]}
    >
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"orange"} /> */}
      <primitive
        castShadow={false}
        receiveShadow={false}
        object={gltf.scene}
        dispose={null}
      />
    </mesh>
  )
}

export default Pillow
