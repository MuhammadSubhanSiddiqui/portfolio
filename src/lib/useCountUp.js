import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { duration = 1800, decimals = 0, startOnView = true } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!startOnView) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setValue(target * eased)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration, startOnView])

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : String(Math.round(value))

  return { ref, formatted }
}
