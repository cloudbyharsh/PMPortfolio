'use client'

import { motion } from 'framer-motion'

const education = [
  {
    badge: 'DPM',
    degree: 'Digital Product Management',
    school: 'George Brown College, Toronto',
    year: 'Expected Aug 2026',
    coursework: 'Product Discovery, Problem Validation, Agile and Scrum, UX Research Methods, Product Strategy, Roadmapping, Go-to-Market Planning, RICE / ICE Prioritization, Jobs-to-be-Done',
    capstone: 'Loopless -- Decision Intelligence Platform (Team of 4)',
  },
  {
    badge: 'B.E.',
    degree: 'Bachelor of Engineering -- Mechanical',
    school: 'S B Jain Institute of Technology, India',
    year: 'May 2015',
    coursework: null,
    capstone: null,
  },
]

const certifications = [
  { badge: 'AZ-900', name: 'Azure Fundamentals', issuer: 'Microsoft' },
  { badge: 'IBM', name: 'Product Management Essentials', issuer: 'IBM' },
  { badge: 'GGL', name: 'Digital Marketing and E-commerce Certificate', issuer: 'Google / Coursera' },
  { badge: 'PM', name: 'Product Management: An Introduction', issuer: 'Industry' },
  { badge: 'CX', name: 'Customer Engagement and CX Foundations', issuer: 'Industry' },
  { badge: 'KAM', name: 'Key Account Management', issuer: 'Industry' },
]

const skillGroups = [
  {
    category: 'PM Skills',
    items: ['Product Discovery', 'User Research', 'PRD Writing', 'Roadmapping', 'RICE Prioritization', 'Sprint Planning', 'Jobs-to-be-Done', 'Voice of Customer', 'Go-to-Market'],
  },
  {
    category: 'Customer Success',
    items: ['QBR Facilitation', 'Renewal Strategy', 'Churn Prevention', 'Stakeholder Management'],
  },
  {
    category: 'AI and Product Building',
    items: ['Claude API', 'LLM Integration', 'Figma (UI/UX)', 'React / TypeScript', 'Prompt Engineering'],
  },
  {
    category: 'Data and Strategy',
    items: ['Data Analysis', 'KPI Tracking', 'Strategic Planning', 'Customer Segmentation'],
  },
]

const exploring = ['Generative AI in product workflows', 'LLM-powered product architecture', 'Agentic product design', 'B2B SaaS pricing strategy']

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] as const } }),
}

const cardStyle = { background: '#1c1c21', border: '1px solid #2e2d35' }
const labelStyle = { color: '#4a4855' }
const titleStyle = { color: '#e8e6e1' }
const mutedStyle = { color: '#6b6a72' }
const dimStyle = { color: '#4a4855' }
const badgeStyle = { background: '#131316', border: '1px solid #2e2d35', color: '#4a4855' }
const skillBadgeStyle = { background: '#1a1a20', border: '1px solid #3d3b4a', color: '#c8b89a' }
const skillCategoryStyle = { color: '#9997a3' }

export default function Academic() {
  return (
    <section id="credentials" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#0d0d0f' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20 md:mb-24" aria-hidden="true">
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#2e2d35' }}>04</span>
          <div className="h-px flex-1" style={{ background: '#1c1c21' }} />
          <span className="text-[9px] tracking-[0.5em] uppercase font-mono" style={{ color: '#2e2d35' }}>Credentials</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2 initial={{ y: '110%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#e8e6e1' }}>
            The foundation.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

          {/* Profile */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={card}
            className="md:col-span-2 p-8 md:p-10" style={cardStyle}>
            <span className="text-[9px] tracking-[0.45em] uppercase block mb-5 font-mono" style={labelStyle}>Profile</span>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl" style={mutedStyle}>
              Product manager with 6+ years on the front lines of enterprise SaaS. I have driven renewals, retention, and expansion for mid-market B2B clients, and built AI-powered products that solve the exact problems I watched go unsolved. Completing a Digital Product Management program at George Brown College (2026) while actively building PathPlan and contributing to Loopless as my capstone project.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div custom={0.08} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={card}
            className="p-8" style={cardStyle}>
            <span className="text-[9px] tracking-[0.45em] uppercase block mb-7 font-mono" style={labelStyle}>Education</span>
            <ul className="flex flex-col gap-8" role="list">
              {education.map((e) => (
                <li key={e.degree} className="flex items-start gap-4">
                  <span className="text-[9px] font-mono px-2 py-1.5 flex-shrink-0 mt-0.5 tracking-wide" style={badgeStyle}>{e.badge}</span>
                  <div>
                    <p className="font-medium text-sm leading-snug" style={titleStyle}>{e.degree}</p>
                    <p className="text-xs mt-1" style={dimStyle}>{e.school} -- {e.year}</p>
                    {e.coursework && (
                      <p className="text-xs mt-2 leading-relaxed" style={{ color: '#3d3b4a' }}>
                        <span style={{ color: '#4a4855' }}>Coursework:</span> {e.coursework}
                      </p>
                    )}
                    {e.capstone && (
                      <p className="text-xs mt-1.5" style={{ color: '#4a4855' }}>
                        Capstone: <span style={{ color: '#6b6a72' }}>{e.capstone}</span>
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div custom={0.13} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={card}
            className="p-8" style={cardStyle}>
            <span className="text-[9px] tracking-[0.45em] uppercase block mb-7 font-mono" style={labelStyle}>Certifications</span>
            <ul className="flex flex-col gap-5" role="list">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start gap-4">
                  <span className="text-[9px] font-mono px-2 py-1.5 flex-shrink-0 mt-0.5 tracking-wide" style={badgeStyle}>{c.badge}</span>
                  <div>
                    <p className="font-medium text-sm leading-snug" style={titleStyle}>{c.name}</p>
                    <p className="text-xs mt-1" style={dimStyle}>{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div custom={0.18} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={card}
            className="p-8" style={cardStyle}>
            <span className="text-[9px] tracking-[0.45em] uppercase block mb-7 font-mono" style={labelStyle}>Skills</span>
            <div className="flex flex-col gap-6">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-[10px] tracking-widest uppercase mb-2.5" style={skillCategoryStyle}>{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="text-[10px] px-3 py-1.5 tracking-wide" style={skillBadgeStyle}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              {/* Currently Exploring */}
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-2.5" style={{ color: '#6b6a72' }}>Currently Exploring</p>
                <div className="flex flex-wrap gap-2">
                  {exploring.map((item) => (
                    <span key={item} className="text-[10px] px-3 py-1.5 tracking-wide" style={{ background: 'transparent', border: '1px dashed #3d3b4a', color: '#4a4855' }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume + GitHub */}
          <motion.div custom={0.23} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={card}
            className="p-8 flex flex-col justify-between gap-8" style={cardStyle}>
            <div>
              <span className="text-[9px] tracking-[0.45em] uppercase block mb-5 font-mono" style={labelStyle}>Resume and Work Samples</span>
              <p className="text-sm leading-relaxed" style={mutedStyle}>Download my full resume or explore my open-source work on GitHub.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/harsh-shah-resume.docx" download="Harsh_Shah_Resume.docx" aria-label="Download Harsh Shah resume"
                className="group flex items-center justify-between w-full px-5 py-3.5 text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-200"
                style={{ background: '#e8e6e1', color: '#0d0d0f' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c8b89a' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#e8e6e1' }}
              >
                <span>Download Resume</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">v</span>
              </a>
              <a href="https://github.com/cloudbyharsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"
                className="group flex items-center justify-between w-full px-5 py-3.5 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
                style={{ border: '1px solid #2e2d35', color: '#6b6a72' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#4a4855'; el.style.color = '#e8e6e1' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2e2d35'; el.style.color = '#6b6a72' }}
              >
                <span>GitHub Portfolio</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">-&gt;</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
