import React, { Suspense, useEffect } from "react"
import { Canvas, extend, useThree, invalidate } from "react-three-fiber"
import Pillow from "./Pillow"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const CameraController = () => {
  const { camera, gl } = useThree()
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.enableZoom = false
    controls.enableKeys = false

    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null
}

const Scene = () => {
  return (
    <Canvas
      camera={{
        fov: 10,
        near: 1,
        far: 1000,
      }}
      pixelRatio={window.devicePixelRatio ? window.devicePixelRatio : 1}
    >
      <CameraController />

      <ambientLight intensity={2} />
      <directionalLight intensity={8} />

      <Suspense fallback={null}>
        <Pillow position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  )
}

export default Scene
