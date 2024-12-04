'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Mail, Phone, Facebook, Twitter, Youtube, Dribbble } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'ADDRESS POINT',
    content: '123 Street Ohio, OH 750065,United States Of America.',
  },
  {
    icon: Mail,
    title: 'MAIL ME!',
    content: 'favourbawa04@gmail.com',
  },
  {
    icon: Phone,
    title: 'CALL ME!',
    content: '+234 808 683 1929',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactRef = useRef<HTMLElement>(null)
  const isInView = useInView(contactRef, { once: true })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise<void>(resolve => setTimeout(resolve, 1000))
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section 
      id="contact" 
      className="py-12 md:py-20 overflow-hidden"
      ref={contactRef}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="GET IN"
          highlight="TOUCH"
          shadowText="CONTACT ME"
        />

        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">DON&apos;T BE SHY !</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to get in touch with me. I am always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start group"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">{item.title}</h3>
                    <p className="text-base md:text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {(['name', 'email'] as const).map((field) => (
                <motion.div
                  key={field}
                  variants={itemVariants}
                >
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`YOUR ${field.toUpperCase()}`}
                    className="w-full px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary transition-shadow"
                    required
                  />
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="YOUR SUBJECT"
                className="w-full px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary transition-shadow"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE"
                rows={5}
                className="w-full px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary resize-none transition-shadow"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="group flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}