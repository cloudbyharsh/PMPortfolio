'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Enterprise accounts' },
  { value: '0%', label: 'Logo churn -- 3 years' },
  { value: '140%', label: 'NRR growth' },
  { value: '2', label: 'Products in market' },
]

export default function About() {
  return (
    <section id="story" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#131316' }}>
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20 md:mb-24"
          aria-hidden="true"
        >
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>01</span>
          <div className="h-px flex-1" style={{ background: '#2e2d35' }} />
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>About</span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e8e6e1' }}
          >
            Who I am.
          </motion.h2>
        </div>

        {/* Two-column copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#9997a3' }}
          >
            I&apos;m a product manager with 6+ years on the front lines of enterprise SaaS -- not in a boardroom, but in the trenches with customers. I&apos;ve managed 50+ accounts, driven 0% churn across three consecutive years, and grown portfolios to 140% NRR. That&apos;s not a CS track record. That&apos;s a PM foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#9997a3' }}>
              I&apos;m currently building two products: <span style={{ color: '#e8e6e1' }}>PathPlan</span> -- an AI career readiness tool built from 5+ user interviews -- and <span style={{ color: '#e8e6e1' }}>Loopless</span> -- a decision intelligence platform I&apos;m building as my capstone at George Brown College. Both started with real research and real problems I watched go unsolved.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 group"
              style={{ color: '#6b6a72' }}
            >
              <span className="group-hover:text-ink transition-colors duration-300">See my work</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#c8b89a' }}>→</span>
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ border: '1px solid #2e2d35', background: '#2e2d35' }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start p-6"
              style={{ background: '#131316' }}
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ color: '#e8e6e1' }}>
                {s.value}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#4a4855' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pl-6 text-base md:text-lg leading-relaxed italic"
          style={{ borderLeft: '2px solid #c8b89a', color: '#6b6a72' }}
        >
          &ldquo;The best products are built at the intersection of customer pain and business constraint. My process starts with listening -- I&apos;ve spent 6 years doing exactly that.&rdquo;
        </motion.blockquote>

      </div>
    </section>
  )
}
