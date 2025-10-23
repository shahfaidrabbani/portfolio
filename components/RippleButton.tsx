"use client"

import { useState, MouseEvent } from "react"
import { motion } from "framer-motion"

interface RippleButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function RippleButton({ children, className = "", onClick }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const addRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now(),
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    if (onClick) onClick()
  }

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={addRipple}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ width: 0, height: 0, x: "-50%", y: "-50%" }}
          animate={{ width: 500, height: 500, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </button>
  )
}

