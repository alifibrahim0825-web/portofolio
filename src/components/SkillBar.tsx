import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillBarProps {
  name: string
  percentage: number
  delay?: number
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-slate-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-primary-500 rounded-full"
        />
      </div>
    </div>
  )
}
