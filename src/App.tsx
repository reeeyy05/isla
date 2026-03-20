import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Isla } from './components/Isla' // Asegúrate de que el nombre coincide con tu componente
import { Suspense } from 'react'
import { Button } from './components/ui/button' // Asegúrate de la ruta de shadcn

export default function App() {
  return (
    <div className='h-dvh relative w-full overflow-hidden bg-slate-950 text-slate-50 font-sans'>

      {/* HEADER SUPERIOR (Conservado y mejorado) */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 backdrop-blur-sm bg-black/10 border-b border-white/5">
        <h1 className="text-2xl font-bold tracking-wider flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
          IES ALBARREGAS
        </h1>
        <nav className="flex gap-2 sm:gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Inicio
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Modelos
          </Button>
          <Button className="bg-cyan-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            Contacto
          </Button>
        </nav>
      </header>

      {/* EL CANVAS (Fondo 3D) */}
      <Canvas camera={{ position: [12, 12, 16], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment
            files="/suburban_garden_4k.exr"
            background
          />
          <OrbitControls
            enableZoom={true}
            makeDefault
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2}
          />
          <Isla />
        </Suspense>
      </Canvas>

      {/* FOOTER DISCRETO */}
      <footer className="absolute bottom-6 right-6 z-10 text-xs text-slate-400 font-medium pointer-events-none tracking-widest uppercase">
        © Alejandro Rey Tostado 2026
      </footer>

    </div>
  )
}