import { motion } from 'framer-motion'

export default function PageLoader({ visible }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[300] flex items-center justify-center bg-background/95 backdrop-blur-sm"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border border-white/10 border-t-indigo-400 animate-spin" />
        <div className="h-px w-24 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 rounded-full bg-accent-gradient"
            initial={{ x: '-100%' }}
            animate={{ x: ['-100%', '220%'] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
