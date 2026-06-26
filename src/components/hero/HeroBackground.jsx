import { motion } from 'framer-motion'

const blobs = [
  {
    className: 'left-[10%] top-[15%] h-[420px] w-[420px] bg-indigo-500/20',
    animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.95, 1] },
    duration: 22,
  },
  {
    className: 'right-[5%] top-[25%] h-[360px] w-[360px] bg-violet-500/15',
    animate: { x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1, 0.92, 1.05, 1] },
    duration: 26,
  },
  {
    className: 'bottom-[10%] left-[35%] h-[300px] w-[300px] bg-indigo-400/10',
    animate: { x: [0, 25, -35, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.9, 1] },
    duration: 20,
  },
]

export default function HeroBackground({ isDark }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12)_0%,_transparent_55%)]'
            : 'bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.08)_0%,_transparent_55%)]'
        }`}
      />
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
