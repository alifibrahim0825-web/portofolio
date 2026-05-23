import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
  index: number
}

export default function ProjectCard({ title, description, tags, image, demoUrl, repoUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-slate-900 rounded-xl overflow-hidden shadow-sm shadow-slate-950/10 hover:shadow-slate-950/20 transition-shadow duration-300"
    >
      <div className="aspect-video bg-slate-800 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-800 text-slate-200 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-200 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-200 hover:text-white transition-colors"
            >
              <Github size={16} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
