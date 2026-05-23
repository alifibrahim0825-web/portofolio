import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Massage Me!
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'alifibrahim0825@gmail.com',
                    href: 'mailto:alifibrahim0825@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+62 857 7037 5550',
                    href: 'tel:+6285770375550',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Bogor, Indonesia',
                    href: '#',
                  },
                ].map((item, index) => (
                  <AnimatedSection key={item.label} delay={index * 0.15}>
                    <a
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        <item.icon size={20} className="text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-primary-500 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </AnimatedSection>
                ))}
              </div>

            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-900 rounded-xl shadow-sm shadow-slate-950/20 p-8 border border-slate-800">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Thank You!
                    </h3>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-200 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent text-slate-100 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-200 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent text-slate-100 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-200 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent text-slate-100 transition-all resize-none"
                        placeholder="Massage me! "
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-900 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
