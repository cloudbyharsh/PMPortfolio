'use client'

import { motion } from 'framer-motion'

type Role = {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  highlight?: string
}

const roles: Role[] = [
  {
    title: 'Strategic Customer Success Manager',
    company: 'Milestone Inc.',
    location: 'Toronto, ON',
    period: 'Mar 2024 — Present',
    highlight: '100% renewal rate · 140% NRR growth',
    bullets: [
      'Own lifecycle management for 50+ mid-market accounts, driving renewals and expansion.',
      'Present monthly performance reports to C-suite executives, improving client ROI by 30%.',
      'Reduced time-to-value by streamlining onboarding across SEO, Paid Media, and Analytics teams.',
      'Channeled structured customer feedback into product roadmap, influencing 2 feature releases.',
      'Scaled a hotel management group from 3 to 7 properties with full portfolio renewal in Q4 2025.',
    ],
  },
  {
    title: 'Customer Success Manager',
    company: 'Milestone Internet Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Mar 2023 — Feb 2024',
    highlight: '0% churn · 35% YOY expansion revenue',
    bullets: [
      'Managed 40+ enterprise and mid-market B2B SaaS accounts with focus on renewals and expansion.',
      'Achieved 0% churn — every client renewed, contributing to a 3-year zero logo churn record.',
      'Drove 35% year-over-year expansion revenue via upsell and cross-sell strategies with Sales.',
      'Reduced time-to-value by 20% through standardized onboarding and customer success playbooks.',
    ],
  },
  {
    title: 'Product Specialist',
    company: 'Adit Tech Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Oct 2021 — Mar 2023',
    highlight: '3 product improvements · 25% support ticket reduction',
    bullets: [
      'Acted as the bridge between customers and product team — synthesizing VoC into weekly reports.',
      'Contributed to 3 product improvements in 6 months by escalating recurring friction patterns to PM.',
      'Reduced support ticket volume by 25% by identifying and resolving key workflow friction points.',
      'Cut average time-to-value by 2 weeks by redesigning onboarding with CS and Engineering.',
      'Served as primary Voice of Customer in sprint planning across CS, Product, and Engineering.',
    ],
  },
  {
    title: 'Assistant Customer Success Manager',
    company: 'Adit Tech Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Nov 2020 — Sep 2021',
    bullets: [
      'Supported 150+ SaaS clients, driving platform adoption and long-term retention.',
      'Contributed to MRR growth from $60K to $1.8M as adoption accelerated.',
      'Reduced churn by 18% YOY through data-driven engagement and reactivation campaigns.',
    ],
  },
  {
    title: 'Senior Executive',
    company: '_VOIS (Vodafone Group)',
    location: 'Ahmedabad, India',
    period: 'Sep 2017 — Oct 2020',
    bullets: [
      'Enterprise client support across high-volume regulated European markets.',
      'Ranked top performer across 8 consecutive quarters on first-contact resolution and CSAT.',
      'Built expertise in escalation management, consultative communication, and enterprise stakeholder engagement.',
    ],
  },
]

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 pt-8 pb-10"
      style={{ borderTop: '1px solid #1c1c21' }}
    >
      {/* Left: meta */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#4a4855' }}>
          {role.period}
        </p>
        <p className="text-xs" style={{ color: '#9997a3' }}>{role.company}</p>
        <p className="text-[10px]" style={{ color: '#2e2d35' }}>{role.location}</p>
        {role.highlight && (
          <p className="text-[10px] mt-2 leading-relaxed pl-2" style={{ color: '#4a4855', borderLeft: '1px solid #2e2d35' }}>
            {role.highlight}
          </p>
        )}
      </div>

      {/* Right: role + bullets */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4" style={{ color: '#f5f3ef' }}>
          {role.title}
        </h3>
        <ul className="flex flex-col gap-2.5" role="list">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 leading-relaxed" style={{ fontSize: '0.9rem', color: '#c8c6d0' }}>
              <span className="flex-shrink-0 mt-1" style={{ color: '#2e2d35' }} aria-hidden="true">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" data-bg="dark" className="py-32 md:py-48 px-6" style={{ background: '#131316' }}>
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20 md:mb-24"
          aria-hidden="true"
        >
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>03B</span>
          <div className="h-px flex-1" style={{ background: '#2e2d35' }} />
          <span className="text-[11px] tracking-[0.5em] uppercase font-mono font-semibold" style={{ color: '#9997a3' }}>Work History</span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#e8e6e1' }}
          >
            Where I&apos;ve been.
          </motion.h2>
        </div>

        {/* Role list */}
        <div role="list">
          {roles.map((role, i) => (
            <RoleCard key={`${role.company}-${i}`} role={role} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
