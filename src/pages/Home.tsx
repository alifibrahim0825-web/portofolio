import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CodeSquare, Palette } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Alif Ibrahim
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Vocational high school student passionate about technology, web development, and digital innovation. Eager to learn new skills, gain experience, and build impactful digital projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Do
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              I specialize in building modern web applications with focus on performance and user experience
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Front End ',
                description: 'Creating intuitive and visually appealing frontend interfaces that users love.',
              },
              {
                icon: CodeSquare,
                title: 'Back End',
                description: 'Building reliable and scalable backend systems that power seamless digital experiences.',
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.2}>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-slate-950/30 transition-shadow">
                  <service.icon className="w-10 h-10 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A selection of projects I've worked on recently
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Al-Quran ',
                description: 'A simple web application that provides access to the Quran, allowing users to read and explore its contents online.',
                image: '/images/al-quran.jpeg',
                tags: ['React'],
              },
            ].map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.2}>
                <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm shadow-slate-950/20">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-800 text-slate-200 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-slate-200 font-medium hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
