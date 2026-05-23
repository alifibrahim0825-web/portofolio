import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const certificates = [
  {
    title: 'Dasar Pemrograman Web',
    issuer: 'Dicoding Academy',
    date: 'November 2025',
    image: '/images/dicoding2.jpg',
  },
  {
    title: 'Java ',
    issuer: 'Dicoding Academy',
    date: 'September 2025',
    image: '/images/dicoding1.jpg',
  },
  {
    title: 'JavaScript',
    issuer: 'Dicoding Academy',
    date: 'January 2025',
    image: '/images/dicoding3.jpg',
  },
  {
    title: 'IDGX ',
    issuer: 'IDGX CAREER',
    date: 'Desember 2024',
    image: '/images/sertif1.jpg',
  },
]

export default function Certificates() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certificates
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              A curated selection of certifications and training programs that demonstrate my technical skills and continuous learning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {certificates.map((certificate, index) => {
            return (
              <AnimatedSection key={certificate.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg shadow-slate-950/30 overflow-hidden"
                >
                  {certificate.image && (
                    <div className="mb-6 rounded-2xl overflow-hidden h-48 bg-slate-800">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      {certificate.title}
                    </h2>
                    <p className="text-sm text-slate-400">
                      {certificate.issuer} · {certificate.date}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>
    </div>
  )
}
