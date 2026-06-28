import { useCallback, useEffect, useRef, useState } from 'react'

export function useHeroMouseGlow(isDark) {
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false })
  const frameRef = useRef(0)
  const lastEventRef = useRef(null)

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), [])

  const onMouseMove = useCallback((e) => {
    lastEventRef.current = e
    if (frameRef.current) return

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0
      const currentEvent = lastEventRef.current
      if (!currentEvent) return
      const rect = currentEvent.currentTarget.getBoundingClientRect()
      setGlow({
        x: currentEvent.clientX - rect.left,
        y: currentEvent.clientY - rect.top,
        active: true,
      })
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, active: false }))
  }, [])

  const glowElement = (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: glow.active ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? `radial-gradient(520px circle at ${glow.x}px ${glow.y}px, rgba(99, 102, 241, 0.09), transparent 42%)`
            : `radial-gradient(520px circle at ${glow.x}px ${glow.y}px, rgba(99, 102, 241, 0.06), transparent 42%)`,
        }}
      />
    </div>
  )

  return { onMouseMove, onMouseLeave, glowElement }
}
