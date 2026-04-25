import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiCpu,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPlay,
  FiTwitter,
  FiZap,
} from 'react-icons/fi';
import {
  SiFigma,
  SiFramer,
  SiGithub,
  SiNotion,
  SiOpenai,
  SiReact,
} from 'react-icons/si';
import memojiAvatar from './assets/harmisha-memoji.jpeg';
import evCaseBanner from '../case_study/EV app/BANNER_(1).png';
import evBanner from '../case_study/EV app/Ev_banner.png';
import stockExchangeBanner from '../case_study/Stocksense/SE banner (1).jpg';
import pcmBanner from '../case_study/pcm/banner.png';
import pcmExchangeMasterForm from '../case_study/pcm/notion_assets/exchange_master_form.png';
import ResumePage from './ResumePage';
import CaseStudyPage from './CaseStudyPage';

type Tool = {
  name: string;
  icon: IconType;
  tone: string;
};

type CaseStudy = {
  slug?: string;
  title: string;
  meta: string;
  summary: string;
  accent: string;
  image: string;
  imagePosition?: string;
  stats: { value: string; label: string }[];
};

type Capability = {
  title: string;
  copy: string;
};

type ServiceGroup = {
  title: string;
  items: string[];
};

type Faq = {
  question: string;
  answer: string;
};

const tools: Tool[] = [
  { name: 'Figma', icon: SiFigma, tone: 'rgba(244, 114, 182, 0.24)' },
  { name: 'Framer', icon: SiFramer, tone: 'rgba(148, 163, 184, 0.22)' },
  { name: 'React', icon: SiReact, tone: 'rgba(34, 211, 238, 0.2)' },
  { name: 'Antigravity', icon: FiZap, tone: 'rgba(139, 92, 246, 0.24)' },
  { name: 'Claude', icon: FiCpu, tone: 'rgba(210, 123, 45, 0.22)' },
  { name: 'ChatGPT', icon: SiOpenai, tone: 'rgba(16, 185, 129, 0.2)' },
  { name: 'Notion', icon: SiNotion, tone: 'rgba(244, 244, 245, 0.12)' },
  { name: 'GitHub', icon: SiGithub, tone: 'rgba(255, 255, 255, 0.1)' },
];

const caseStudies: CaseStudy[] = [
  {
    slug: 'ev-connect',
    title: 'EV Connect+',
    meta: 'Mobile app UX case study',
    summary:
      'Designed an EV charging experience for BP that helps drivers find nearby stations, check battery reach, and reserve a charging slot with less friction.',
    accent: 'linear-gradient(145deg, rgba(20, 23, 25, 0.12) 0%, rgba(15, 17, 20, 0.4) 42%, rgba(7, 7, 8, 0.88) 100%)',
    image: evBanner,
    imagePosition: 'center center',
    stats: [
      { value: '3 mo', label: 'timeline' },
      { value: 'iOS app', label: 'mobile focus' },
    ],
  },
  {
    slug: 'stock-exchange',
    title: 'Stock Exchange Sign-Up',
    meta: 'Responsive web UX case study',
    summary:
      'Redesigned a stock exchange website sign-up flow to reduce information overload, simplify navigation, and create a more secure onboarding experience.',
    accent: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.45) 100%)',
    image: stockExchangeBanner,
    imagePosition: '85% center',
    stats: [
      { value: '2 mo', label: 'timeline' },
      { value: '10 users', label: 'tested' },
    ],
  },
  {
    slug: 'pcm',
    title: 'PCM Platform Revamp',
    meta: 'Enterprise UI/UX Case Study',
    summary:
      'Redesigned a complex enterprise system for internal operations, improving data entry accuracy and form usability through structured layouts and JSON configuration.',
    accent: 'linear-gradient(145deg, rgba(15, 30, 45, 0.14) 0%, rgba(10, 25, 40, 0.42) 38%, rgba(5, 10, 15, 0.88) 100%)',
    image: pcmExchangeMasterForm,
    imagePosition: 'center center',
    stats: [
      { value: '9 mo+', label: 'timeline' },
      { value: 'Enterprise', label: 'domain' },
    ],
  },
];

// removed capabilities array as requested

const serviceGroups: ServiceGroup[] = [
  {
    title: 'Strategy',
    items: ['UX audits', 'Product structure', 'Journey mapping', 'Conversion flows'],
  },
  {
    title: 'Interface',
    items: ['UI systems', 'Landing pages', 'Prototype design', 'Editorial layouts'],
  },
  {
    title: 'Motion',
    items: ['Micro-interactions', 'Reveal timing', 'Hero animation', 'Scroll rhythm'],
  },
  {
    title: 'Build',
    items: ['Framer-ready specs', 'Design QA', 'Responsive polish', 'Developer handoff'],
  },
];

const skills = [
  'UX Design',
  'UI Design',
  'Product Design',
  'Design Systems',
  'HTML',
  'CSS',
  'Java (Basics)',
  'JSON Structure',
  'Interaction Design',
  'Motion Direction',
  'Prototyping',
  'Creative Direction',
  'Front-End Collaboration',
  'Responsive Layouts',
  'User Research',
  'Brand-Led Experiences',
];

const faqs: Faq[] = [
  {
    question: 'What kind of websites or products do you design?',
    answer:
      'I mostly work on portfolio sites, SaaS marketing pages, and product interfaces that need a stronger visual identity without losing clarity.',
  },
  {
    question: 'Do you use AI in your design process?',
    answer:
      'Yes. I use tools like ChatGPT, Claude, Lovable, Google Stitch, Antigravity, and Codex to speed up ideation, explore UI directions, and refine flows while keeping final decisions user-focused and design-led.',
  },
  {
    question: 'Do you only design, or can you also help with implementation?',
    answer:
      'Primarily I focus on UI/UX design, but I also have working knowledge of HTML, CSS, Java basics, and JSON structure. That helps me collaborate better with developers and make sure designs are practical to implement.',
  },
];

function Reveal({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 54 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function MagneticButton({
  href,
  label,
  secondary,
}: {
  href: string;
  label: string;
  secondary?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });

  return (
    <motion.a
      href={href}
      className={secondary ? 'button button-secondary' : 'button'}
      data-cursor={secondary ? 'Contact' : 'View'}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{label}</span>
      <FiArrowRight />
    </motion.a>
  );
}

function App() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cursorPointX = useMotionValue(-100);
  const cursorPointY = useMotionValue(-100);
  const cursorX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.25 });
  const cursorY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.25 });
  const premiumCursorX = useSpring(cursorPointX, { stiffness: 420, damping: 34, mass: 0.18 });
  const premiumCursorY = useSpring(cursorPointY, { stiffness: 420, damping: 34, mass: 0.18 });
  const glowX = useTransform(cursorX, [-320, 320], ['38%', '62%']);
  const glowY = useTransform(cursorY, [-320, 320], ['12%', '28%']);
  const cursorGlow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(218, 195, 150, 0.18), transparent 28%)`;
  const heroShiftX = useTransform(cursorX, [-280, 280], [-18, 18]);
  const heroShiftY = useTransform(cursorY, [-280, 280], [-12, 12]);

  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const [submitMessage, setSubmitMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cursorLabel, setCursorLabel] = useState('');
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [isResumePage, setIsResumePage] = useState(() => window.location.hash === '#resume');
  const [currentCaseStudy, setCurrentCaseStudy] = useState<string | null>(() => {
    if (window.location.hash.startsWith('#work/')) {
      return window.location.hash.replace('#work/', '');
    }
    return null;
  });

  const heroRef = useRef<HTMLElement | null>(null);
  const toolsRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: toolsProgress } = useScroll({
    target: toolsRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: workProgress } = useScroll({
    target: workRef,
    offset: ['start end', 'end start'],
  });

  const heroCopyY = useTransform(heroProgress, [0, 1], [0, 110]);
  const heroCopyOpacity = useTransform(heroProgress, [0, 0.78, 1], [1, 1, 0.58]);
  const heroVisualScrollY = useTransform(heroProgress, [0, 1], [0, -72]);
  const heroVisualY = useTransform(() => heroShiftY.get() + heroVisualScrollY.get());
  const toolSectionY = useTransform(toolsProgress, [0, 1], [64, -48]);
  const toolSectionRotate = useTransform(toolsProgress, [0, 1], [1.25, -1.25]);
  const workHeadingY = useTransform(workProgress, [0, 1], [52, -26]);
  const workGridY = useTransform(workProgress, [0, 1], [74, -42]);
  const workGridScale = useTransform(workProgress, [0, 0.5, 1], [0.96, 1, 0.985]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (!supportsFinePointer) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - window.innerWidth / 2);
      pointerY.set(event.clientY - window.innerHeight / 2);
      cursorPointX.set(event.clientX);
      cursorPointY.set(event.clientY);
      setCursorVisible(true);
    };

    const handleOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');

      if (!target) {
        return;
      }

      setCursorActive(true);
      setCursorLabel(target.dataset.cursor ?? '');
    };

    const handleOut = (event: PointerEvent) => {
      const currentTarget = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      const relatedTarget = (event.relatedTarget as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');

      if (currentTarget && currentTarget !== relatedTarget) {
        setCursorActive(false);
        setCursorLabel('');
      }
    };

    const handleLeave = () => {
      setCursorVisible(false);
      setCursorActive(false);
      setCursorLabel('');
    };

    window.addEventListener('pointermove', handleMove);
    document.addEventListener('pointerover', handleOver);
    document.addEventListener('pointerout', handleOut);
    document.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
      document.removeEventListener('pointerout', handleOut);
      document.removeEventListener('pointerleave', handleLeave);
    };
  }, [cursorPointX, cursorPointY, pointerX, pointerY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavCompact(currentScrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const syncView = () => {
      setIsResumePage(window.location.hash === '#resume');
      if (window.location.hash.startsWith('#work/')) {
        setCurrentCaseStudy(window.location.hash.replace('#work/', ''));
      } else {
        setCurrentCaseStudy(null);
      }
    };

    syncView();
    window.addEventListener('hashchange', syncView);

    return () => {
      window.removeEventListener('hashchange', syncView);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage('Your message is ready. I will get back to you with the next steps.');
    event.currentTarget.reset();
  };

  const handleResumeOpen = () => {
    if (window.location.hash !== '#resume') {
      window.location.hash = 'resume';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeBack = () => {
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
    setIsResumePage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCaseStudyOpen = (slug: string) => {
    window.location.hash = `#work/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCaseStudyBack = () => {
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}#work`);
    setCurrentCaseStudy(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <motion.div className="ambient-spot ambient-spot-one" style={{ y: ambientY }} />
      <motion.div className="ambient-spot ambient-spot-two" style={{ y: gridY }} />
      <motion.div className="ambient-spot ambient-spot-three" style={{ y: ambientY }} />
      <motion.div className="cursor-aura" style={{ backgroundImage: cursorGlow }} />
      <motion.div
        className={`premium-cursor${cursorVisible ? ' visible' : ''}${cursorActive ? ' active' : ''}`}
        style={{ x: premiumCursorX, y: premiumCursorY }}
        aria-hidden="true"
      >
        <span className="premium-cursor-core">
          <FiArrowUpRight />
        </span>
        <span className="premium-cursor-label">{cursorLabel || 'Move'}</span>
      </motion.div>

      {isResumePage ? (
        <ResumePage onBack={handleResumeBack} />
      ) : currentCaseStudy ? (
        <CaseStudyPage slug={currentCaseStudy} onBack={handleCaseStudyBack} />
      ) : (
        <>
      <header className={`site-header${navCompact ? ' is-compact' : ''}`}>
        <motion.div
          className={`nav-shell panel${navCompact ? ' is-compact' : ''}`}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {navCompact ? (
            <a className="nav-availability" href="#contact" data-cursor="Contact">
              <span className="brand-mark">
                <img src={memojiAvatar} alt="Harmisha Patel memoji avatar" />
              </span>
              <span className="nav-availability-copy">
                <strong>Available for work</strong>
                <span className="nav-availability-dot" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <>
              <a className="brand-lockup" href="#top" data-cursor="Home">
                <span className="brand-mark">
                  <img src={memojiAvatar} alt="Harmisha Patel memoji avatar" />
                </span>
                <span className="brand-copy">
                  <strong>Harmisha Patel</strong>
                  <small>Product & UX Designer</small>
                </span>
              </a>

              <nav className="nav-links">
                <a href="#about" data-cursor="About">About</a>
                <a href="#work" data-cursor="Work">Work</a>
                <a href="#contact" data-cursor="Contact">Contact</a>
              </nav>

              <a
                className="nav-cta"
                href="#resume"
                data-cursor="Resume"
                onClick={(event) => {
                  event.preventDefault();
                  handleResumeOpen();
                }}
              >
                Resume
              </a>
            </>
          )}
        </motion.div>
      </header>

      <main id="top">
        <section ref={heroRef} className="hero-section">
          <motion.div
            className="hero-copy"
            style={{ y: heroCopyY, opacity: heroCopyOpacity }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            <span className="hero-kicker">Independent designer crafting immersive product experiences</span>
            <h1>
              Digital work with
              <span>depth, pace, and intention.</span>
            </h1>
            <p className="hero-lead">
              I design editorial-feeling product experiences for startups and modern brands, pairing sharp
              structure with restrained motion and a premium dark aesthetic.
            </p>

            <div className="hero-actions">
              <MagneticButton href="#work" label="View selected work" />
              <MagneticButton href="#contact" label="Start a project" secondary />
            </div>

            <div className="hero-facts">
              <div className="fact-pill panel">
                <FiMapPin />
                <span>Based in India, collaborating globally</span>
              </div>
              <div className="fact-pill panel">
                <FiCpu />
                <span>Product design, systems, and motion direction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            style={{ x: heroShiftX, y: heroVisualY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.18 }}
          >
            <motion.div
              className="floating-chip panel"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiPlay />
              Motion-first prototypes
            </motion.div>

            <motion.div
              className="showcase-card panel"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="showcase-topline">
                <span>Featured portfolio</span>
                <span>2026</span>
              </div>

              <div className="showcase-stage">
                <div className="showcase-orbit showcase-orbit-one" />
                <div className="showcase-orbit showcase-orbit-two" />
                <div className="showcase-center">
                  <span>Harmisha Patel</span>
                  <strong>Designing intuitive digital experiences with a strong visual edge</strong>
                </div>
                <div className="showcase-bottom">
                  <span>Figma-first workflows</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="floating-note panel"
              animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <strong>Selected work</strong>
              <span>6+ UX/UI projects across fintech, EV, and consumer apps</span>
              <span>End-to-end design from research to high-fidelity UI</span>
            </motion.div>

            <motion.div
              className="metric-stack panel"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div>
                <strong>06+</strong>
                <span>projects designed</span>
              </div>
              <div>
                <strong>01+</strong>
                <span>year hands-on UX/UI experience</span>
              </div>
              <p className="metric-support">Focused on usability, clarity &amp; visual hierarchy</p>
            </motion.div>

            <motion.div
              className="skill-card panel"
              animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <strong>04</strong>
              <span>core skills</span>
              <p>UX Research Â· Wireframing Â· UI Design Â· Prototyping</p>
            </motion.div>
          </motion.div>
        </section>

        <Reveal className="section-block" id="about">
          <div className="about-shell panel">
            <div className="about-intro">
              <span className="section-tag">About</span>
              <h2>Strong visual atmosphere, backed by product thinking that stays practical.</h2>
            </div>

            <div className="about-copy">
              <p>
                My work sits between art direction and product clarity. I like interfaces that feel decisive,
                tactile, and alive, but I care just as much about whether a user can move through them with ease.
              </p>
              <p>
                That balance is where the best portfolio-inspired products live: bold enough to be remembered and
                structured enough to perform.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.section
          ref={toolsRef}
          className="tool-band-section"
          style={{ y: toolSectionY, rotate: toolSectionRotate }}
        >
          <div className="tool-band-heading">
            <span>Tools used</span>
            <p>Daily stack for concepting, prototyping, and shipping polished interface systems.</p>
          </div>

          <div className="tool-band panel">
            <div className="tool-band-fade tool-band-fade-left" />
            <div className="tool-band-fade tool-band-fade-right" />
            <div className="tool-track">
              {[...tools, ...tools].map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={`${tool.name}-${index}`}
                    className="tool-card"
                    style={{ backgroundColor: tool.tone }}
                    aria-hidden={index >= tools.length}
                  >
                    <span className="tool-icon">
                      <Icon />
                    </span>
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <Reveal className="section-block" id="work">
          <motion.div ref={workRef} className="section-heading" style={{ y: workHeadingY }}>
            <span className="section-tag">Selected Work</span>
            <h2>Real case studies from EV mobility and fintech, grounded in process work and shipped interface thinking.</h2>
          </motion.div>

          <motion.div className="case-grid" style={{ y: workGridY, scale: workGridScale }}>
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                className="case-card panel"
                data-cursor="View"
                onClick={() => {
                  if (study.slug) handleCaseStudyOpen(study.slug);
                }}
                initial={{ opacity: 0, y: 48, rotateX: index % 2 === 0 ? 4 : -4 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.75, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="case-preview"
                  style={{
                    backgroundImage: `${study.accent}, url("${study.image}")`,
                    backgroundPosition: `${study.imagePosition ?? 'center center'}, ${study.imagePosition ?? 'center center'}`,
                  }}
                >
                  <div className="case-preview-frame">
                    <span>{study.meta}</span>
                    <FiArrowUpRight />
                  </div>
                </div>

                <div className="case-body">
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <div className="case-stats">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Reveal>

        <Reveal className="section-block">
          <div className="section-heading narrow">
            <span className="section-tag">What I Do</span>
            <h2>Services framed like a capability deck, not a generic checklist.</h2>
          </div>

          <div className="service-grid">
            {serviceGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="service-card panel"
                data-cursor="Explore"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span className="service-title">{group.title}</span>
                <div className="service-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>

        {/* Removed Capabilities section as requested */}

        <Reveal className="section-block">
          <div className="skills-shell panel">
            <div className="section-heading compact-heading">
              <span className="section-tag">Skills</span>
              <h2>A broader toolkit presented in the tag-led style the reference uses.</h2>
            </div>

            <div className="skill-cloud">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-chip"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section-block" id="faq">
          <div className="faq-shell panel">
            <div className="section-heading narrow compact-heading">
              <span className="section-tag">FAQ</span>
              <h2>Short answers for the questions clients usually ask before starting.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.question} className="faq-item">
                    <button
                      className="faq-trigger"
                      type="button"
                      data-cursor={isOpen ? 'Close' : 'Open'}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        <FiChevronRight />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal className="section-block" id="contact">
          <div className="contact-shell panel">
            <div className="contact-copy">
              <span className="section-tag">Contact</span>
              <h2>Ready to give your site or product a sharper visual presence?</h2>
              <p>
                If you want something that feels closer to a curated designer portfolio than a generic template,
                let&apos;s build it together.
              </p>

              <div className="contact-links">
                <a href="mailto:harmishapatel.india@gmail.com" data-cursor="Email">
                  <FiMail />
                  <span>harmishapatel.india@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/harmishapatel/" target="_blank" rel="noreferrer" data-cursor="LinkedIn">
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/harmisha" target="_blank" rel="noreferrer" data-cursor="Twitter">
                  <FiTwitter />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            <motion.form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Project</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the site, product, or redesign you want to shape."
                  required
                />
              </label>

              <button className="button submit-button" type="submit" data-cursor="Send">
                <span>Send inquiry</span>
                <FiArrowRight />
              </button>

              {submitMessage ? <p className="submit-message">{submitMessage}</p> : null}
            </motion.form>
          </div>
        </Reveal>

        <footer className="site-footer">
          <div className="footer-panel panel">
            <div>
              <span className="section-tag">Closing Note</span>
              <h2>Built to feel closer to a curated Framer portfolio than a default template.</h2>
            </div>
            <a href="#top" className="footer-link" data-cursor="Top">
              Back to top
              <FiArrowUpRight />
            </a>
          </div>
        </footer>
      </main>
        </>
      )}
    </div>
  );
}

export default App;
