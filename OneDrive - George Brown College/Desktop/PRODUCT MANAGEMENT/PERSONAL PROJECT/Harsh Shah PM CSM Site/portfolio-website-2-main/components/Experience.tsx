'use client'

import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Strategic Customer Success Manager',
    company: 'Milestone Inc.',
    period: '2023 -- Present',
    location: 'Toronto, ON',
    bullets: [
      'Own full lifecycle strategy for 50+ mid-market accounts from onboarding through renewal -- 100% renewal rate, 140% NRR growth.',
      'Translate product performance data into C-suite narratives monthly; recommendations have driven a measured 30% improvement in client ROI.',
      'Ran structured Voice of Customer research across accounts, synthesized patterns into a prioritized opportunity backlog, and collaborated with the product team to ship 2 features directly from that input.',
      'Led end-to-end expansion of a hotel management group from 3 to 7 properties -- scoping requirements, coordinating onboarding, securing full portfolio renewal.',
    ],
  },
  {
    title: 'Customer Success Manager',
    company: 'Milestone Internet Pvt Ltd',
    period: '2020 -- 2023',
    location: 'India (Remote)',
    bullets: [
      'Maintained 0% logo churn across all managed accounts -- every client renewed. Part of a 3-year company-wide zero churn record.',
      'Identified expansion signals through usage analysis and QBR trends; partnered with Sales to convert them into 35% YOY expansion revenue.',
      'Built a structured escalation process for at-risk accounts -- reducing time-to-resolution by documenting intervention playbooks used across the team.',
    ],
  },
  {
    title: 'Product Specialist -- Voice of Customer and Product Feedback',
    company: 'Adit Tech',
    period: '2018 -- 2020',
    location: 'India',
    bullets: [
      'Owned the Voice of Customer process -- conducted interviews, identified recurring friction patterns, delivered weekly synthesis reports to the product team.',
      'Drove 3 product improvements in 6 months by building a structured escalation process: tagging, categorizing, and prioritizing customer pain points before presenting them to the PM.',
      'Led a cross-functional onboarding redesign with CS and Engineering -- reducing time-to-value by 2 weeks. Defined the problem, proposed the solution, tracked the outcome.',
      'Represented the customer perspective in sprint planning -- translating qualitative feedback into prioritized requirements that influenced sprint scope.',
    ],
  },
]

function RoleBlock({ role, index }: { role: typeof roles[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-12 py-10"
      style={{ borderTop: '1px solid #1c1c21' }}
    >
      {/* Left: meta */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold" style={{ color: '#e8e6e1' }}>{role.company}</p>
        <p className="text-xs" style={{ color: '#4a4855' }}>{role.period}</p>
        <p className="text-xs" style={{ color: '#4a4855' }}>{role.location}</p>
      </div>

      {/* Right: title + bullets */}
      <div>
        <p className="text-base font-semibold mb-5" style={{ color: '#c8b89a' }}>{role.title}</p>
        <ul className="flex flex-col gap-3">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#6b6a72' }}>
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#2e2d35' }} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#16161a' }}>
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20 md:mb-24"
          aria-hidden="true"
        >
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>03</span>
          <div className="h-px flex-1" style={{ background: '#2e2d35' }} />
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>Experience</span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#e8e6e1' }}
          >
            Where I came from.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm mb-12"
          style={{ color: '#4a4855' }}
        >
          6 years in the room where customers tell you what is broken. That is where product thinking comes from.
        </motion.p>

        <div>
          {roles.map((role, i) => (
            <RoleBlock key={role.company} role={role} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
