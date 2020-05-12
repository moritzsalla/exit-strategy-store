import React, { useRef, useEffect, useState } from "react"
import { useFrame, useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Pillow = props => {
  const mesh = useRef()

  const gltf = useLoader(GLTFLoader, "models/pillow.glb")

  const [aspectRatio, setAspectRatio] = useState({
    val: null,
  })

  useEffect(() => {
    const x = window.innerWidth / window.innerHeight
    setAspectRatio({ val: x })
  }, [setAspectRatio])

  useFrame(() => (mesh.current.rotation.z += 0.004))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[
        0.125 * aspectRatio.val,
        0.125 * aspectRatio.val,
        0.125 * aspectRatio.val,
      ]}
      rotation={[1.6, 0, 0]}
    >
      <primitive
        castShadow={true}
        receiveShadow={true}
        object={gltf.scene}
        dispose={null}
      />
    </mesh>
  )
}

export default Pillow
