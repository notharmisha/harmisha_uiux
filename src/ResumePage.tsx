import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import memojiAvatar from './assets/harmisha-memoji.jpeg';
import resumeFile from './Harmisha UI_UX.pdf';

type ResumePageProps = {
  onBack: () => void;
};

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  location: string;
  bullets: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type EducationItem = {
  institution: string;
  period: string;
  program: string;
  location: string;
  note?: string;
};

const resumeSummary =
  'UX/Product Designer with 1-2 years of experience crafting user-centric interfaces across fintech, HR, EdTech, and AI-driven environments. Skilled in wireframing, high-fidelity prototyping, and design systems to simplify complex, compliance-heavy workflows into intuitive dashboards and admin tools. Proven ability to drive end-to-end product design from discovery and user flows through developer handoff using Figma.';

const resumeHighlights = [
  {
    value: '1-2 yrs',
    label: 'UX/Product design experience',
  },
  {
    value: '06+',
    label: 'projects shaped across product and interface design',
  },
  {
    value: 'Figma',
    label: 'from wireframes to developer-ready handoff',
  },
];

const resumeExperience: ExperienceItem[] = [
  {
    company: 'Abans',
    period: 'Nov 2024 - Present',
    role: 'Product / UX Designer (Intern - Full-time)',
    location: 'Mumbai',
    bullets: [
      'Designed and improved KYC dashboards with robust information architecture to streamline complex entity-based workflows and compliance-heavy data.',
      'Worked extensively with JSON-driven UI configurations, fixing structure issues and improving form scalability.',
      'Collaborated with developers using high-fidelity prototypes to enhance field visibility, conditional rendering, and form states (Add/Edit/View).',
      'Designed internal tools and admin panels leveraging design system principles for improved efficiency, accuracy, and reduced user error.',
      'Used AI tools actively as part of daily design workflow for research, ideation, and validation.',
      'Delivered developer-ready designs in Figma with clear documentation and edge-case handling.',
    ],
  },
  {
    company: 'Talent Corner HR Services Pvt. Ltd.',
    period: 'Apr 2024 - Aug 2024',
    role: 'UI/UX Designer Intern',
    location: 'Mumbai',
    bullets: [
      'Designed company brochures, HR manuals, banners, and expo creatives, all used officially by the company.',
      'Created structured documentation for industry-specific HR processes across multiple sectors.',
      'Worked on internal tools and content systems with a focus on clarity and usability.',
      'Collaborated with HR and business teams to align design with recruitment and compliance needs.',
    ],
  },
];

const resumeSkillGroups: SkillGroup[] = [
  {
    title: 'User Experience',
    items: ['UX Research & User Flows', 'Dashboard & Admin UX'],
  },
  {
    title: 'UI Design & Prototyping',
    items: ['Wireframing & Prototyping', 'High-Fidelity UI Design'],
  },
  {
    title: 'Information Architecture & Systems',
    items: ['Design Systems', 'Information Architecture'],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Framer', 'LottieFiles', 'Notion', 'Basic Frontend Understanding (JSON-driven UIs)', 'Canva'],
  },
];

const resumeEducation: EducationItem[] = [
  {
    institution: 'Google UX Design by Coursera',
    period: 'Sep 2023',
    program: 'UI/UX Design',
    location: 'Mumbai',
  },
  {
    institution: 'KJ Somaiya College of Arts and Commerce, Vidyavihar',
    period: 'Jun 2021',
    program: 'Advanced Diploma, Interior Design',
    location: 'Mumbai',
    note: 'GPA: A',
  },
  {
    institution: 'KJ Somaiya College of Arts and Commerce, Vidyavihar',
    period: 'Apr 2021',
    program: 'Bachelor of Arts, Sociology and Literature',
    location: 'Mumbai',
    note: 'GPA: 7.54',
  },
];

const resumeCertificates = [
  'Accenture North America Product Design - Forage',
  'BCG Strategic & Experience Design Job Simulation - Forage',
  'bp Digital Design & UX Job Simulation - Forage',
];

function ResumeSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      className="resume-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="resume-section-heading">
        <span className="section-tag">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function ResumePage({ onBack }: ResumePageProps) {
  return (
    <>
      <header className="site-header resume-site-header">
        <motion.div
          className="resume-topbar panel"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <button type="button" className="resume-back-button" onClick={onBack} data-cursor="Back">
            <FiArrowLeft />
            <span>Back to home</span>
          </button>

          <a
            className="button resume-download-button"
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            data-cursor="Resume"
          >
            <span>Download Resume</span>
            <FiArrowUpRight />
          </a>
        </motion.div>
      </header>

      <main className="resume-page" id="resume">
        <motion.section
          className="resume-hero panel"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="resume-hero-copy">
            <span className="hero-kicker">Resume</span>
            <h1>
              Harmisha Patel
              <span>UX/Product Designer</span>
            </h1>
            <p className="resume-summary">{resumeSummary}</p>

            <div className="resume-contact-grid">
              <a className="resume-contact-card panel" href="mailto:harmishapatel.india@gmail.com" data-cursor="Email">
                <FiMail />
                <span>harmishapatel.india@gmail.com</span>
              </a>
              <a className="resume-contact-card panel" href="tel:+919082442898" data-cursor="Call">
                <FiPhone />
                <span>+91 90824 42898</span>
              </a>
              <a
                className="resume-contact-card panel"
                href="https://my-portfolio-website-y7w.pages.dev/"
                target="_blank"
                rel="noreferrer"
                data-cursor="Portfolio"
              >
                <FiGlobe />
                <span>Portfolio Website</span>
              </a>
              <div className="resume-contact-card panel">
                <FiMapPin />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="resume-hero-side">
            <div className="resume-profile-card panel">
              <div className="resume-avatar-wrap">
                <img src={memojiAvatar} alt="Harmisha Patel avatar" />
              </div>
              <div className="resume-profile-copy">
                <strong>Available for product, UX, and UI work</strong>
                <p>Focused on intuitive systems, admin workflows, and polished interfaces that feel clear from the first click.</p>
              </div>
            </div>

            <div className="resume-metric-grid">
              {resumeHighlights.map((item) => (
                <div key={item.label} className="resume-metric-card panel">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <ResumeSection eyebrow="Experience" title="Roles shaped around clarity, systems, and product thinking.">
          <div className="resume-experience-list">
            {resumeExperience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="resume-role-card panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="resume-role-heading">
                  <div>
                    <span className="resume-role-company">
                      <FiBriefcase />
                      {item.company}
                    </span>
                    <h3>{item.role}</h3>
                  </div>
                  <div className="resume-role-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="resume-bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection eyebrow="Skills" title="Core strengths across research, interface craft, and execution.">
          <div className="resume-skill-grid">
            {resumeSkillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="resume-skill-card panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <h3>{group.title}</h3>
                <div className="resume-chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="resume-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection eyebrow="Education" title="Formal learning layered with UX-focused training.">
          <div className="resume-education-grid">
            {resumeEducation.map((item, index) => (
              <motion.article
                key={`${item.institution}-${item.program}`}
                className="resume-education-card panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <span className="resume-role-company">
                  <FiBookOpen />
                  {item.period}
                </span>
                <h3>{item.program}</h3>
                <p>{item.institution}</p>
                <div className="resume-role-meta">
                  <span>{item.location}</span>
                  {item.note ? <span>{item.note}</span> : null}
                </div>
              </motion.article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection eyebrow="Certificates" title="Additional programs that support strategy and product execution.">
          <div className="resume-certificate-shell panel">
            <div className="resume-certificate-list">
              {resumeCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate}
                  className="resume-certificate-item"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <FiAward />
                  <span>{certificate}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ResumeSection>

        <motion.section
          className="resume-footer-cta panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-tag">Resume PDF</span>
            <h2>Need the printable version too?</h2>
          </div>

          <div className="resume-footer-actions">
            <button type="button" className="resume-back-button" onClick={onBack} data-cursor="Back">
              <FiArrowLeft />
              <span>Back to home</span>
            </button>
            <a
              className="button resume-download-button"
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              data-cursor="Resume"
            >
              <span>Download Resume</span>
              <FiArrowUpRight />
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}
