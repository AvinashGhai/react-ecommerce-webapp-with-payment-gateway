import { useState } from 'react'

export default function LensZoom({ src, alt }) {
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [show, setShow] = useState(false)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPosition({ x, y })
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {show && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200%',
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      )}
    </div>
  )
}
