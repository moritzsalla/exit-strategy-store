import React, { useRef } from "react"
import { useFrame, useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Pillow = props => {
  const mesh = useRef()

  const gltf = useLoader(GLTFLoader, "models/pillow.glb")

  useFrame(() => (mesh.current.rotation.z += 0.004))

  return (
    <mesh {...props} ref={mesh} scale={[0.2, 0.2, 0.2]} rotation={[1.6, 0, 0]}>
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
