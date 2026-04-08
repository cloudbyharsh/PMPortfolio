'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Theme = 'dark' | 'light'

const navItems = [
  { label: 'About', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  // Detect hero vs rest of page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Detect which section's background is under the nav → drives text color
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest the top of the viewport
        const active = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]

        if (active) {
          setTheme((active.target.getAttribute('data-bg') as Theme) ?? 'dark')
        }
      },
      { rootMargin: '-5% 0px -90% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'
  const linkCls = `text-[10px] tracking-[0.35em] uppercase transition-colors duration-500 ${
    isDark ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'
  }`
  const iconCls = `transition-colors duration-500 ${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-black'}`
  const lineCls = `w-px transition-colors duration-500 ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 md:px-14 ${
          scrolled
            ? 'py-4 backdrop-blur-md [background:rgba(13,13,15,0.92)] [border-bottom:1px_solid_#1c1c21]'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="flex items-center">
          {/* Left slot: monogram when scrolled */}
          <div className="w-24 flex-shrink-0">
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  key="logo"
                  href="/"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  HS
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* Center: name (hero state only) */}
          <div className="flex-1 flex justify-center">
            <AnimatePresence>
              {!scrolled && (
                <motion.span
                  key="name"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className={`text-[10px] tracking-[0.55em] uppercase transition-colors duration-500 ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}
                >
                  Harsh Shah
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Right: nav links + hamburger */}
          <div className="w-24 flex-shrink-0 flex justify-end items-center gap-8">
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-8" role="list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkCls}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`md:hidden flex flex-col gap-[5px] p-2 -mr-2 transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Left social sidebar (hero only, desktop) ── */}
      <motion.aside
        initial={{ opacity: 0, x: -12 }}
        animate={{
          opacity: scrolled ? 0 : 1,
          x: scrolled ? -12 : 0,
          pointerEvents: scrolled ? 'none' : 'auto',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Social links"
        className="fixed left-7 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-5"
      >
        <a href="https://www.linkedin.com/in/harshashwinshah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className={`${iconCls} p-2 rounded-full`} style={{ background: 'rgba(255,255,255,0.07)' }}>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/cloudbyharsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className={`${iconCls} p-2 rounded-full`} style={{ background: 'rgba(255,255,255,0.07)' }}>
          <GitHubIcon />
        </a>
        <div className={`${lineCls} h-14 mt-1`} aria-hidden="true" />
      </motion.aside>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden" style={{ background: '#0d0d0f', borderBottom: '1px solid #1c1c21' }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="px-8 py-6 flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm tracking-[0.3em] uppercase text-neutral-300 hover:text-white transition-colors duration-200 block py-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
