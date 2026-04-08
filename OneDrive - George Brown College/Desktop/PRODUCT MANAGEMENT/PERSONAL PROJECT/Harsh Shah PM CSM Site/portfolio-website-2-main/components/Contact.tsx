'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshashwinshah/', external: true },
  { label: 'GitHub', href: 'https://github.com/cloudbyharsh', external: true },
  { label: 'Calendly', href: 'https://calendly.com/haarsh-shahh/30min', external: true },
]

const Arrow = () => (
  <span aria-hidden="true" className="inline-block w-2 h-2 mr-3 flex-shrink-0" style={{ color: '#c8b89a' }}>▶</span>
)

const linkBase = {
  fontSize: 'clamp(1.6rem, 4vw, 3.5rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
  color: '#2e2d35',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.25s ease',
  textDecoration: 'none',
}

function SocialLink({ label, href, external }: { label: string; href: string; external: boolean }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
      style={linkBase}
      whileHover={{ color: '#e8e6e1' } as Record<string,string>}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Arrow />
      {label}
    </motion.a>
  )
}

export default function Contact() {
  return (
    <footer
      id="contact"
      data-bg="dark"
      className="py-28 md:py-40 px-8 md:px-14"
      style={{ background: '#0d0d0f', borderTop: '1px solid #1c1c21' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* CONNECT heading -- centered, like minhpham */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] tracking-[0.7em] uppercase font-mono" style={{ color: '#4a4855' }}>
            Connect
          </span>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Left col: social + portfolio links */}
          <div className="flex flex-col gap-1">
            {socialLinks.slice(0, 2).map((l) => (
              <SocialLink key={l.label} {...l} />
            ))}
          </div>

          {/* Center: rotating badge + tagline */}
          <div className="flex flex-col items-center gap-8">
            {/* Rotating badge */}
            <div className="relative w-28 h-28">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path id="cp2" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                  </defs>
                  <text fill="#2e2d35" fontSize="7.5" letterSpacing="0.7">
                    <textPath href="#cp2">TORONTO · OPEN TO WORK · AI PM · </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-xl" style={{ color: '#4a4855' }} aria-hidden="true">
                ↓
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-xs tracking-[0.25em] uppercase leading-relaxed"
              style={{ color: '#4a4855' }}
            >
              Currently open to AI PM roles, Associate PM positions, and product conversations. If you are building something ambitious, I would like to hear about it.
            </motion.p>
          </div>

          {/* Right col: email + calendly + contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-2 font-mono" style={{ color: '#4a4855' }}>Email</p>
              <a
                href="mailto:Haarsh.shahh@gmail.com"
                className="text-sm transition-colors duration-200"
                style={{ color: '#6b6a72' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e8e6e1' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b6a72' }}
              >
                Haarsh.shahh@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-2 font-mono" style={{ color: '#4a4855' }}>Book a Call</p>
              <a
                href="https://calendly.com/haarsh-shahh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: '#6b6a72' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e8e6e1' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b6a72' }}
              >
                calendly.com/haarsh-shahh/30min
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-2 font-mono" style={{ color: '#4a4855' }}>Location</p>
              <p className="text-sm" style={{ color: '#6b6a72' }}>Toronto, Ontario, Canada</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px mt-20 mb-8" style={{ background: '#1c1c21' }} aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[9px] tracking-[0.4em] uppercase font-mono" style={{ color: '#2e2d35' }}>
            © 2026 Harsh Shah
          </p>
          <p className="text-[9px] tracking-[0.4em] uppercase font-mono" style={{ color: '#2e2d35' }}>
            Toronto, Canada
          </p>
        </div>

      </div>
    </footer>
  )
}
