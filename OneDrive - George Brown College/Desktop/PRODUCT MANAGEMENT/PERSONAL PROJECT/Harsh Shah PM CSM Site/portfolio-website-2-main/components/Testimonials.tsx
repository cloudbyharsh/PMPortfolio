'use client'

import { motion } from 'framer-motion'

type Testimonial = {
  name: string
  role: string
  relationship: string
  date: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Janet Seet Ling Low',
    role: 'Client Success Leader',
    relationship: 'Managed Harsh directly',
    date: 'Feb 2026',
    quote:
      "It was a privilege working with Harsh on the growth of our most important client relationships. His sense of initiative, thirst for learning and desire to operate at the bleeding edge meant he was a forerunner on the use of AI to improve both personal productivity and ensure his clients stayed on the edge of AI-driven changes. Going above and beyond for his clients was his MO and that effort was apparent in his pristine retention record. With his combination of technical prowess, curiosity and drive, Harsh is truly an asset to any team.",
  },
  {
    name: 'Brittany Parsons',
    role: 'Customer Success Leader',
    relationship: 'Managed Harsh directly',
    date: 'Apr 2025',
    quote:
      "As his former direct supervisor, I can't recommend Harsh enough. His dedication and tenacity is phenomenal and he is always going above and beyond to further his knowledge and provide both internal and external support. He is constantly going through new trainings and taking the initiative to learn new skills and technical knowledge, and even going the extra mile to train the rest of the team, including myself, on new materials he has learned. Both colleagues and clients are always happy to be working with Harsh.",
  },
  {
    name: 'Krishna Adhyaru',
    role: 'Customer Success Leader & CX Enthusiast',
    relationship: 'Managed Harsh directly',
    date: 'Jan 2024',
    quote:
      "Harsh is a quick learner with a remarkable ability to execute strategies efficiently. His dedication to building strong customer relationships and addressing their challenges with tailored solutions has not only resulted in portfolio growth through upsells but also in the acquisition of new customers through CSQLs. His intelligence, quick thinking, and collaborative nature make him a standout team player. I confidently endorse Harsh for any role requiring a strategic and efficient Customer Success Manager.",
  },
]

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-8 pb-2"
      style={{ borderTop: '1px solid #2e2d35' }}
    >
      <span aria-hidden="true" className="text-4xl font-serif leading-none mb-5 select-none" style={{ color: '#2e2d35' }}>
        &ldquo;
      </span>

      <blockquote className="text-sm md:text-base leading-relaxed mb-8 flex-1" style={{ color: '#c8c6d0' }}>
        {item.quote}
      </blockquote>

      <footer className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold" style={{ color: '#e8e6e1' }}>{item.name}</p>
          <p className="text-xs mt-0.5" style={{ color: '#6b6a72' }}>{item.role}</p>
          <p className="text-xs mt-0.5" style={{ color: '#4a4855' }}>{item.relationship}</p>
        </div>
        <span className="text-[10px] tracking-widest uppercase flex-shrink-0" style={{ color: '#4a4855' }}>
          {item.date}
        </span>
      </footer>
    </motion.article>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#16161a' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-20 md:mb-24" aria-hidden="true">
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>05</span>
          <div className="h-px flex-1" style={{ background: '#2e2d35' }} />
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>Recommendations</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2 initial={{ y: '110%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#e8e6e1' }}>
            What My Leaders Say.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} item={t} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }} className="mt-14 flex justify-center">
          <a href="https://www.linkedin.com/in/harshashwinshah/" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase transition-colors duration-300"
            style={{ color: '#4a4855' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e8e6e1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a4855' }}
          >
            <span>All recommendations on LinkedIn</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
