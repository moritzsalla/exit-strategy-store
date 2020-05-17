import React, { useEffect } from "react"
import { Canvas, extend, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const Pillow = React.lazy(() => import("./pillow"))

const CameraController = () => {
  const { camera, gl } = useThree()
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.enableZoom = true
    controls.enableKeys = false

    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null
}

const Scene = () => {
  const isSSR = typeof window === "undefined"

  return (
    <Canvas
      camera={{
        fov: 10,
        near: 1,
        far: 1000,
      }}
      pixelRatio={2}
    >
      <CameraController />

      <ambientLight intensity={2} />
      <directionalLight intensity={8} />

      {!isSSR && (
        <React.Suspense fallback={null}>
          <Pillow position={[0, 0, 0]} />
        </React.Suspense>
      )}
    </Canvas>
  )
}

export default Scene
