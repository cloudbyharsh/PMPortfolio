'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Types ──────────────────────────────────────────────────────────── */
type ProjectLink = { label: string; href: string }
type Project = {
  number: string
  title: string
  tagline: string
  problem: string
  discovery?: string
  myRole: string
  keyDecision: string
  features: string[]
  tech: string[]
  status: 'Live' | 'In Progress'
  featured?: boolean
  links?: ProjectLink[]
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    number: '01',
    title: 'PathPlan',
    tagline: 'AI career readiness for the intentional career switcher.',
    problem:
      'The job market has a skills-mismatch problem, not an application-volume problem. Most tools solve the top of funnel (ATS, resume formatting) but leave the middle unaddressed: what should a candidate actually do with gap information? My research revealed a key behavioral pattern -- candidates know their gaps but address them reactively. One interviewee completed a 12-hour Udemy course the night after receiving an interview call. PathPlan flips that sequence.',
    discovery:
      'Conducted 5+ user interviews with job seekers actively applying in Canada. Key insight: users self-filter responsibly (apply when 70–80% qualified) but have no structured system for closing the remaining gap. Learning resource preferences are clear: YouTube for orientation, Udemy for depth + certification, Coursera too expensive. Certificates matter -- interviewees mention them in interviews. That\'s a monetization signal.',
    myRole:
      'Solo PM and builder. Defined the problem, ran user research, wrote the product strategy, designed UI/UX in Figma, and built the working prototype in React/TypeScript.',
    keyDecision:
      'Renamed from SkillGap AI → PathPlan. Users seek tools that promise outcomes, not surfaces deficiencies. Restructured the core loop to lead with the plan, not the match score -- a score without a path is useless.',
    features: [
      'Resume + JD gap analysis (AI-powered)',
      '14-day personalized study plan',
      'Daily micro-task check-ins',
      'Re-score before applying',
      'Phase 3: LinkedIn share cards + accountability streaks',
    ],
    tech: ['React', 'TypeScript', 'Claude API', 'Figma'],
    status: 'In Progress',
    featured: true,
    links: [
      { label: 'View Prototype', href: 'https://cabin-rise-77599189.figma.site/' },
    ],
  },
  {
    number: '02',
    title: 'Loopless',
    tagline: 'Decision intelligence that detects outcome drift before it becomes a failed initiative.',
    problem:
      'Teams in fast-growing organisations repeatedly waste time relitigating past decisions, losing alignment on outcomes, and holding meetings that confirm activity rather than alignment. Research across 6 interviews with PMs, CS leads, and program managers surfaced four patterns: drift detected too late, an evidence gap (leaders sense misalignment but lack defensible data), meetings as a psychological safety net, and learning decay -- insights never stored, same problems re-surfaced every retro.',
    myRole:
      'PM on a team of 4 (George Brown College Capstone). Led competitive analysis, product strategy, Drift Alignment Monitor feature, and Loop Frequency Graph. Drove the core positioning: Loopless is an intelligence layer on top of existing tools (Jira, Asana, Slack) -- not a replacement.',
    keyDecision:
      'API layer over existing tools, not a new PM platform. Every competitor tracks tasks and progress. None track whether those tasks are driving toward the intended outcome. That\'s the white space Loopless owns.',
    features: [
      'Outcomes Memory Book -- decision history with context + outcomes',
      'Loop Frequency Graph -- patterns that predict drift',
      'Drift Alignment Monitor -- real-time outcome scoring',
      'Team Voting -- close loops without another meeting',
      'AI Agent recommendations -- early intervention signals',
    ],
    tech: ['React', 'GCP', 'Jira API', 'Asana API', 'Salesforce API'],
    status: 'In Progress',
    featured: true,
    links: [
      { label: 'View PRD', href: '#' },
      { label: 'View Prototype', href: '#' },
    ],
  },
  {
    number: '03',
    title: 'HospitalityIQ',
    tagline: 'Competitive intelligence for hotels -- without the enterprise price tag.',
    problem:
      'Hospitality businesses have almost no affordable way to track competitors in real time. They rely on gut feel or expensive enterprise tools. I watched this gap cost clients real revenue for years while managing their digital accounts.',
    myRole:
      'Solo PM and builder. Defined the problem, scoped MVP, wrote requirements, and built it. Prioritized competitor analysis and visibility scoring first -- the two pain points mentioned most in client QBRs.',
    keyDecision:
      'Display insights in plain language, not raw data. Most hotel operators are not data analysts. The product needed to answer "What should I do next?" -- not "Here\'s what changed."',
    features: ['Competitor analysis', 'AI-generated narrative insights', 'Visibility scoring'],
    tech: ['React', 'Claude API', 'Vercel'],
    status: 'Live',
  },
  {
    number: '04',
    title: 'CS Automation Tool',
    tagline: 'End-to-end automation for customer success workflows.',
    problem:
      'CS teams spend enormous time on work that shouldn\'t require a human -- scheduling QBRs, chasing confirmations, assembling health dashboards from five tools. Every hour on logistics is an hour not spent on strategic customer conversations.',
    myRole:
      'Solo PM and builder. Designed workflow architecture based on personally running 50+ accounts. Identified QBR scheduling as highest-effort, lowest-value activity -- built that first.',
    keyDecision:
      'Built the health dashboard to surface only the signals that actually predict churn -- not vanity metrics. Required deliberate prioritization of which data sources to connect and which to ignore.',
    features: ['QBR automation', 'Calendar integration', 'Client health dashboard'],
    tech: ['Node.js', 'Microsoft Graph API'],
    status: 'In Progress',
  },
  {
    number: '05',
    title: 'Claude SEO Tool',
    tagline: 'Cut a 200-item audit down to a top-10 action list any marketer can use.',
    problem:
      'SEO audits surface hundreds of issues without telling you which ones move the needle. Smaller teams can\'t act on full crawl reports.',
    myRole:
      'Solo PM and builder. Designed the prioritization logic -- weighting signals by potential impact, not severity alone.',
    keyDecision:
      'Rank recommendations by potential impact, not just severity. A technically severe issue on a zero-traffic page ranks below a moderate issue on a high-traffic page.',
    features: ['Technical audits', 'Content gap analysis', 'Impact-ranked recommendations'],
    tech: ['Python', 'Claude API'],
    status: 'In Progress',
  },
]

/* ─── Featured card (PathPlan + Loopless) ────────────────────────────── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col p-8 md:p-10 cursor-default transition-colors duration-300"
      style={{ background: '#1c1c21', border: '1px solid #2e2d35', gridColumn: '1 / -1' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#4a4855' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2e2d35' }}
    >
      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, #c8b89a, transparent)' }} aria-hidden="true" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[9px] font-mono tracking-[0.4em]" style={{ color: '#2e2d35' }}>{project.number}</span>
            <span
              className="text-[9px] tracking-[0.25em] uppercase px-2.5 py-1"
              style={
                project.status === 'Live'
                  ? { background: 'rgba(200,184,154,0.1)', color: '#c8b89a', border: '1px solid rgba(200,184,154,0.3)' }
                  : { background: 'transparent', color: '#4a4855', border: '1px solid #2e2d35' }
              }
            >
              {project.status}
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase px-2.5 py-1" style={{ background: 'rgba(200,184,154,0.05)', color: '#c8b89a', border: '1px solid rgba(200,184,154,0.15)' }}>
              Featured
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ color: '#e8e6e1' }}>
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: '#6b6a72' }}>{project.tagline}</p>
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            {project.links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase px-4 py-2.5 transition-all duration-200"
                style={{ border: '1px solid #2e2d35', color: '#6b6a72' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#c8b89a'; el.style.color = '#c8b89a' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2e2d35'; el.style.color = '#6b6a72' }}
              >
                {l.label}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* PM case study grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase mb-3 font-mono" style={{ color: '#4a4855' }}>The Problem</p>
          <p className="text-sm leading-relaxed" style={{ color: '#6b6a72' }}>{project.problem}</p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase mb-3 font-mono" style={{ color: '#4a4855' }}>My Role</p>
          <p className="text-sm leading-relaxed" style={{ color: '#6b6a72' }}>{project.myRole}</p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase mb-3 font-mono" style={{ color: '#4a4855' }}>Key Decision</p>
          <p className="text-sm leading-relaxed" style={{ color: '#6b6a72' }}>{project.keyDecision}</p>
        </div>
      </div>

      {/* Expandable: Discovery + Features */}
      <div>
        <button
          onClick={() => setOpen(v => !v)}
          className="flex items-center gap-2 text-[9px] tracking-[0.35em] uppercase transition-colors duration-200 mb-4"
          style={{ color: '#4a4855' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e8e6e1' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a4855' }}
          aria-expanded={open}
        >
          <span className="inline-block transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
          {open ? 'Collapse' : 'Show discovery & features'}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-4">
                {project.discovery && (
                  <div>
                    <p className="text-[9px] tracking-[0.4em] uppercase mb-3 font-mono" style={{ color: '#4a4855' }}>Discovery</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b6a72' }}>{project.discovery}</p>
                  </div>
                )}
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase mb-3 font-mono" style={{ color: '#4a4855' }}>Features</p>
                  <ul className="flex flex-col gap-2">
                    {project.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-xs" style={{ color: '#4a4855' }}>
                        <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c8b89a' }} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: '1px solid #1c1c21' }}>
        {project.tech.map(t => (
          <span key={t} className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 font-mono" style={{ border: '1px solid #2e2d35', color: '#4a4855' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

/* ─── Regular card ───────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative flex flex-col p-7 md:p-8 cursor-default transition-colors duration-300"
      style={{ background: '#1c1c21', border: '1px solid #2e2d35' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#4a4855' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2e2d35' }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[9px] font-mono tracking-[0.4em]" style={{ color: '#2e2d35' }}>{project.number}</span>
        <span
          className="text-[9px] tracking-[0.25em] uppercase px-2.5 py-1"
          style={
            project.status === 'Live'
              ? { background: 'rgba(200,184,154,0.1)', color: '#c8b89a', border: '1px solid rgba(200,184,154,0.3)' }
              : { background: 'transparent', color: '#4a4855', border: '1px solid #2e2d35' }
          }
        >
          {project.status}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2" style={{ color: '#e8e6e1' }}>{project.title}</h3>
      <p className="text-xs mb-4" style={{ color: '#c8b89a' }}>{project.tagline}</p>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6b6a72' }}>{project.problem}</p>

      {/* Expandable PM details */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase mb-4 transition-colors duration-200"
        style={{ color: '#2e2d35' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#6b6a72' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#2e2d35' }}
        aria-expanded={open}
      >
        <span style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.3s' }}>▶</span>
        {open ? 'Less' : 'PM details'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-4"
          >
            <div className="flex flex-col gap-4 pb-2">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase mb-2 font-mono" style={{ color: '#4a4855' }}>My Role</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6b6a72' }}>{project.myRole}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase mb-2 font-mono" style={{ color: '#4a4855' }}>Key Decision</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6b6a72' }}>{project.keyDecision}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 mt-auto" aria-label="Tech stack">
        {project.tech.map(t => (
          <span key={t} className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 font-mono" style={{ border: '1px solid #2e2d35', color: '#4a4855' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

/* ─── Section ────────────────────────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const regular = projects.filter(p => !p.featured)

  return (
    <section id="work" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#0d0d0f' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20 md:mb-24"
          aria-hidden="true"
        >
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>02</span>
          <div className="h-px flex-1" style={{ background: '#2e2d35' }} />
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>Work Samples</span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e8e6e1' }}
          >
            What I build.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm mb-16 md:mb-20"
          style={{ color: '#4a4855' }}
        >
          Each project starts with a user problem. Click &ldquo;PM details&rdquo; to see the thinking behind the build.
        </motion.p>

        {/* Featured (full-width) */}
        <div className="grid grid-cols-1 gap-3 md:gap-4 mb-3 md:mb-4">
          {featured.map((p, i) => (
            <FeaturedCard key={p.number} project={p} index={i} />
          ))}
        </div>

        {/* Regular (3-col grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {regular.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/cloudbyharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase transition-colors duration-300"
            style={{ color: '#4a4855' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e8e6e1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4a4855' }}
          >
            <span>All projects on GitHub</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
