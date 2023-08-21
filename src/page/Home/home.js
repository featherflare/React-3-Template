import { Canvas } from '@react-three/fiber'
import Building from '../../components/Building/building'

export default function Home() {
  return (
    <>
      <div className='interface'></div>
      <Canvas
        className='Building'
        camera={{
          fov: 60,
          aspect: aspect,
          near: 1,
          far: 1000,
          position: [0, 0, 1],
          rotation: [Math.PI / 2, 0, 0],
        }}
      >
        <Building />
      </Canvas>
    </>
  )
}
