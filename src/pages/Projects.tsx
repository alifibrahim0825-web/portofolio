import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'TIXID',
    description: 'A modern ticketing system for managing and tracking support requests.',
    tags: ['React', 'MySQL'],
    image: '/images/tixid.jpeg',
  },
]

export default function Projects() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              A collection of projects I've built, from web applications to design systems
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </motion.div>

          {projects.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              No projects found.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
