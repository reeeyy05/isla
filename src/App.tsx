import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Isla } from './components/Isla' // Tu componente de la isla
import { Suspense } from 'react'
import { Button } from './components/ui/button' // Asegúrate de que esta ruta es correcta

export default function App() {
  return (
    // Contenedor principal idéntico al de tu compañero
    <div className='h-dvh relative w-full overflow-hidden bg-black text-white'>

      {/* HEADER FLOTANTE (Capa superior) */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold tracking-wider">IES Albarregas</h1>
        <nav className="flex gap-4">
          <Button variant="ghost">Empezar</Button>
          <Button variant="ghost">Contacto</Button>
        </nav>
      </header>

      {/* TEXTO CENTRAL FLOTANTE (Capa superior) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none text-center w-full">
        <h2 className="text-6xl md:text-8xl font-extrabold opacity-80 tracking-widest drop-shadow-2xl">
          ACUEDUCTO
        </h2>
      </div>

      {/* EL CANVAS (El fondo) */}
      <Canvas camera={{ position: [10, 10, 15], fov: 100 }}>
        <Suspense fallback={null}>
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

      {/* FOOTER FLOTANTE */}
      <footer className="absolute bottom-4 w-full text-center z-10 text-sm opacity-60 pointer-events-none">
        @2026. Todos los derechos reservados
      </footer>

    </div>
  )
}