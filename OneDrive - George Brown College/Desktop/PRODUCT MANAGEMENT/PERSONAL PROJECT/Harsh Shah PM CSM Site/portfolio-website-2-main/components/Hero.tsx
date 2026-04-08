'use client'

import { CSSProperties } from 'react'
import { motion } from 'framer-motion'

/* ─── Per-char clip reveal ───────────────────────────────────────────── */
function CharReveal({
  text, delay = 0, className = '', style,
}: {
  text: string; delay?: number; className?: string; style?: CSSProperties
}) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className="inline-block"
            style={style}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, delay: delay + i * 0.038, ease: [0.16, 1, 0.3, 1] }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ─── Rotating badge ─────────────────────────────────────────────────── */
function RotatingBadge() {
  const label = 'AI PRODUCT MANAGER · TORONTO · BUILDER · '
  return (
    <a href="#story" aria-label="Scroll to About section" className="group relative inline-block w-28 h-28">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="bp" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
          </defs>
          <text fill="#4a4855" fontSize="7.5" letterSpacing="0.7">
            <textPath href="#bp">{label}</textPath>
          </text>
        </svg>
      </motion.div>
      <div
        className="absolute inset-0 flex items-center justify-center text-ink-muted text-xl group-hover:text-ink group-hover:scale-110 transition-all duration-300"
        aria-hidden="true"
      >
        ↓
      </div>
    </a>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      data-bg="dark"
      aria-label="Introduction"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* ── Spline 3D Background ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <iframe
          src="https://my.spline.design/thresholddarkambientui-cK0EK5PfXc5HFI4XadACsGkh/"
          frameBorder={0}
          width="100%"
          height="100%"
          title="3D ambient background"
          aria-hidden="true"
          style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
        />
        {/* Cover the "Built with Spline" badge (bottom-right corner) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 240,
            height: 52,
            background: '#000',
            zIndex: 10,
          }}
        />
      </div>

      {/* Vignette -- keeps text readable over 3D scene */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 20%, rgba(0,0,0,0.55) 70%, #000 100%)',
          zIndex: 2,
        }}
      />

      {/* ── Text Stack ── */}
      <div className="relative text-center px-4" style={{ zIndex: 3 }}>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.75rem)', fontWeight: 700, letterSpacing: '0.28em', color: '#e8e6e1' }}
            className="uppercase"
          >
            Harsh Shah
          </motion.p>
        </div>

        {/* Identity tag -- AI Product Manager */}
        <div className="overflow-hidden mb-8 md:mb-10">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.55em] uppercase"
            style={{ color: '#c8b89a' }}
          >
            AI Product Manager
          </motion.p>
        </div>

        <h1 aria-label="6 years hearing customers. Now building for them." className="select-none leading-none">
          <div className="block" style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '0.95', color: '#e8e6e1' }}>
            <CharReveal text="6 YEARS" delay={0.2} />
          </div>
          <div className="block" aria-hidden="true" style={{ fontSize: 'clamp(4.6rem, 14.5vw, 13.8rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: '0.88' }}>
            <CharReveal text="HEARING" delay={0.42} style={{ WebkitTextStroke: '1.5px #e8e6e1', color: 'transparent' }} />
          </div>
          <div className="block" aria-hidden="true" style={{ fontSize: 'clamp(3.8rem, 12vw, 11.5rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: '0.88', color: '#e8e6e1' }}>
            <CharReveal text="CUSTOMERS." delay={0.72} />
          </div>
          <div className="block mt-2" aria-hidden="true" style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '0.95', color: '#2e2d35' }}>
            <CharReveal text="NOW BUILDING" delay={1.0} />
          </div>
          <div className="block" aria-hidden="true" style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '0.95', color: '#c8b89a' }}>
            <CharReveal text="FOR THEM." delay={1.18} />
          </div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: '#6b6a72', letterSpacing: '0.02em' }}
        >
          I&apos;ve spent 6 years translating customer pain into product decisions. Now I&apos;m building the tools I always wished existed -- AI-powered, research-backed, grounded in real user behavior.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-7 py-3 text-[10px] tracking-[0.35em] uppercase font-bold transition-all duration-300"
            style={{ background: '#e8e6e1', color: '#0d0d0f' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c8b89a' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#e8e6e1' }}
          >
            View My Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-7 py-3 text-[10px] tracking-[0.35em] uppercase transition-all duration-300"
            style={{ border: '1px solid #2e2d35', color: '#6b6a72' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#4a4855'; el.style.color = '#e8e6e1' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2e2d35'; el.style.color = '#6b6a72' }}
          >
            Read My Story
          </a>
        </motion.div>
      </div>

      {/* Rotating badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ zIndex: 3 }}
      >
        <RotatingBadge />
      </motion.div>
    </section>
  )
}
