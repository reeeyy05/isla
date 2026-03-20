import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Isla } from './components/Isla'
import { Suspense } from 'react'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}> {/* Para manejar la carga del archivo */}
        <Environment
          files="/suburban_garden_4k.exr"
          background
        />
        <OrbitControls
          enableZoom={false}
          makeDefault
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Isla />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  )
}