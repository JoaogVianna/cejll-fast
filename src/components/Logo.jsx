import { useState } from 'react'
import './Logo.css'

export default function Logo({ className = '' }) {
  const [existe, setExiste] = useState(true)

  if (!existe) {
    return <span className={`logo-reserva ${className}`}>Espaço para a logo</span>
  }
  return (
    <img
      className={`logo ${className}`}
      src="/logo-cejll-fest.png"
      alt="CEJLL Fest"
      onError={() => setExiste(false)}
    />
  )
}
