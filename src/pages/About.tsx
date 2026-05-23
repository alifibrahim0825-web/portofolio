import { MapPin, Briefcase } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SkillBar from '../components/SkillBar'

const skills = [
  { name: 'Html/Css', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React', percentage: 85 },
  { name: 'Flutter', percentage: 70 },
  { name: 'PostgreSQL / MongoDB', percentage: 75 },
]



export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Hola!! 
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile & Bio */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden max-w-md">
                <img
                  src="/images/WhatsApp Image 2026-05-23 at 21.07.19.jpeg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.2}>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                    <MapPin size={16} />
                    Bogor, Indonesia
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                    <Briefcase size={16} />
                    Available for hire
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
                  <p>
                  I am a student who is interested in technology and web development.
                  I enjoy learning new things, especially about React and modern JavaScript,
                  while building simple websites and applications.
                  </p>
                  <p>
                  In my free time, I like exploring new technologies,
                  working on small projects, and improving my programming skills.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
            <p className="text-slate-400">Technologies and tools work with daily</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
