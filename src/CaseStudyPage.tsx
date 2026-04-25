import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiTool, FiTag, FiUser } from 'react-icons/fi';

import evCaseBanner from '../case_study/EV app/BANNER_(1).png';
import evBanner from '../case_study/EV app/Ev_banner.png';
import evProcess from '../case_study/EV app/Process_(1).png';
import evPersona from '../case_study/EV app/Untitled.png';
import evFlow from '../case_study/EV app/Untitled 1.png';
import evWireframes from '../case_study/EV app/IMG_20240103_135224.jpg';
import evLofi from '../case_study/EV app/Lofi_(1).png';
import evDesignSystem from '../case_study/EV app/Design_system.png';

// PCM Assets
import pcmBanner from '../case_study/pcm/banner.png';
import pcmDashboardVideo from '../case_study/pcm/dashboard_video.mp4';
import pcmTableView from '../case_study/pcm/table_view.png';
import pcmQueryFilter from '../case_study/pcm/query_filter_new.png';
import pcmAccordion from '../case_study/pcm/notion_assets/accordion.png';
import pcmExchangeMasterForm from '../case_study/pcm/notion_assets/exchange_master_form.png';
import pcmIcons from '../case_study/pcm/notion_assets/icons.png';
import pcmNewUi from '../case_study/pcm/notion_assets/new_ui.png';
import pcmOldUi from '../case_study/pcm/notion_assets/old_ui.png';
import pcmOldLegacy from '../case_study/pcm/notion_assets/oldlegacy.png';
import pcmPagination from '../case_study/pcm/notion_assets/pagination.png';
import pcmSmartField from '../case_study/pcm/notion_assets/smart_field.png';
import pcmTabBasedFormVideo from '../case_study/pcm/notion_assets/tab_based_form.mp4';
import pcmValidation from '../case_study/pcm/notion_assets/validation.png';
import pcmPg from '../case_study/pcm/pg.png';

// Stock Exchange Assets
import seBanner from '../case_study/Stocksense/SE banner (1).jpg';
import seHeroFrame from '../case_study/Stocksense/Frame 11.png';
import seProcess from '../case_study/Stocksense/Stock exchange (1).jpg';
import sePersona from '../case_study/Stocksense/Untitled (8).png';
import seSitemap from '../case_study/Stocksense/Sitemap (1).png';
import seUserTesting from '../case_study/Stocksense/SE user testing (1).jpg';
import seDesignSystem from '../case_study/Stocksense/SE design systems (1).jpg';
import seSignIn from '../case_study/Stocksense/Sign In.png';
import seLogIn from '../case_study/Stocksense/Log In.png';
import seOtp from '../case_study/Stocksense/OTP.png';
import seVerify from '../case_study/Stocksense/2- Verify.png';
import seInvestmentJourney from '../case_study/Stocksense/3 - Investment Journey.png';
import seUploadDocs from '../case_study/Stocksense/4 - Upload Docs.png';
import seReviewEsign from '../case_study/Stocksense/5 - Review and Esign.png';
import sePaperFirst from '../case_study/Stocksense/ChatGPT Image Apr 25, 2026, 07_04_30 PM.png';

type CaseStudyPageProps = {
  slug: string;
  onBack: () => void;
};

// We can extend this if we add more case studies in the future
const caseStudyData = {
  'ev-connect': {
    title: 'EV Connect+',
    kicker: 'Mobile app UX case study',
    summary: 'Designed an EV charging experience for BP that helps drivers find nearby stations, check battery reach, and reserve a charging slot with less friction.',
    banner: evCaseBanner,
    metadata: [
      { label: 'Role', value: 'UX Designer', icon: FiUser },
      { label: 'Timeline', value: 'Three months', icon: FiClock },
      { label: 'Tags', value: 'Mobile App, UI/UX, iOS App', icon: FiTag },
      { label: 'Tools', value: 'Figma, Gmail, Notion, Zoom', icon: FiTool },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Project Overview: Electric Vehicle charging app for BP',
        content: (
          <>
            <ul>
              <li><strong>Client:</strong> bp emphasises being at the forefront of the sustainable energy transition and, as such, has recognised electric vehicles (EVs) as the way of the future. With so many new EVs appearing on the market daily, there is a basic need for a universal mobile app that helps owners navigate to the closest charging station.</li>
            </ul>
            <p>The user should be able to do the following key tasks, listed in order of importance:</p>
            <ol>
              <li>Find the closest charging station.</li>
              <li>See if they have enough battery to get to the charging station.</li>
            </ol>
            <ul>
              <li><strong>Goal:</strong> The primary goal of the project is to design and develop a user-friendly mobile application, EV Connect+, aimed at enhancing the experience of electric vehicle (EV) users in locating and utilizing charging stations.</li>
            </ul>
          </>
        ),
        image: evBanner
      },
      {
        id: 'problem',
        title: 'Problem',
        content: (
          <p>Many electric vehicle users, including new owners like Bhavika Bisht, face challenges in efficiently finding nearby charging stations and estimating if they can reach them in time. The lack of a user-friendly solution contributes to anxiety and inconvenience, highlighting the need for a straightforward and reliable EV app like EV Connect+ to enhance the charging experience.</p>
        )
      },
      {
        id: 'solution',
        title: 'Solution',
        content: (
          <p>EV Connect+ provides a convenient solution for electric vehicle users, like Bhavika Bisht, with a user-friendly app. This app helps users easily find nearby charging stations and determines if they can reach them in time. This improves the overall EV charging experience by addressing the challenges involved.</p>
        )
      },
      {
        id: 'process',
        title: 'Process',
        content: (
          <p>Keeping in mind to design the best user experience for Ev connect+, the design process that I’ve followed:</p>
        ),
        image: evProcess
      },
      {
        id: 'persona',
        title: 'Persona',
        image: evPersona
      },
      {
        id: 'user-flow',
        title: 'User Flow',
        content: (
          <p>A user flow represents the path that a user takes through a website or application to complete a specific task or achieve a particular goal.</p>
        ),
        image: evFlow
      },
      {
        id: 'paper-wireframes',
        title: 'Paper Wireframes',
        content: (
          <p>Starting with conceptual wireframes, progressing to detailed mockups, and culminating in a high-fidelity prototype, this approach effectively addresses and resolves user needs.</p>
        ),
        image: evWireframes
      },
      {
        id: 'low-fidelity',
        title: 'Low Fidelity Prototype',
        content: (
          <p>Based on the research and user persona, I started designing the wireframes concept. The main goal was to get the user to see the nearest EV stations and reserve a slot with automatic payment with a little to no effort.</p>
        ),
        image: evLofi
      },
      {
        id: 'design-systems',
        title: 'Design Systems',
        image: evDesignSystem
      },
      {
        id: 'high-fidelity',
        title: 'High Fidelity Prototype',
        iframe: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIGW40LOcnYdx7MNtShSoi1%2FUntitled%3Ftype%3Ddesign%26node-id%3D6-2%26t%3DW1fEDQInsDlR645F-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D6%253A2%26mode%3Ddesign'
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: (
          <p>The EV Connect+ app helps electric vehicle users find and use charging stations easily. It improves the charging experience and supports BP's diverse user base in creating a more sustainable and convenient future.</p>
        )
      },
      {
        id: 'learned',
        title: 'What I Learned',
        content: (
          <p>I've learned how important it is to understand and relate to different types of users, including those who care about the environment and newcomers like Bhavika Bisht. This has helped me understand the difficulties they face when trying to find and use charging stations. I want to create a design that focuses on what they need by including features like instant notifications, accurate battery estimates, and smooth integration. This will make their electric vehicle charging experience better and more convenient.</p>
        )
      }
    ]
  },
  'pcm': {
    title: 'Professional Clearing Member',
    kicker: 'Enterprise UI/UX Revamp',
    summary: 'Professional Clearing Member (PCM) is an enterprise system used by internal operations teams to manage exchange configurations.\n\nContext: Operations teams responsible for maintaining exchange configurations frequently interacted with long and complex forms within the PCM system.\n\nIssue: The existing interface made it difficult to quickly locate relevant fields and complete configurations efficiently.\n\nImpact: This slowed down the process of creating or updating exchange records and increased the chances of incorrect data entry.',
    banner: pcmExchangeMasterForm,
    metadata: [
      { label: 'Role', value: 'UX/UI Designer', icon: FiUser },
      { label: 'Timeline', value: '9 months and above', icon: FiClock },
      { label: 'Tags', value: 'FinTech, Enterprise, Dashboard, Form Design', icon: FiTag },
      { label: 'Tools', value: 'Figma, Shadcn, JSON Configuration', icon: FiTool },
    ],
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Operations teams responsible for maintaining exchange configurations frequently interacted with long and complex forms within the PCM system. However, the existing interface made it difficult to quickly locate relevant fields and complete configurations efficiently.

This often slowed down the process of creating or updating exchange records and increased the chances of incorrect data entry.

The previous interface had several usability and structural challenges:
- Outdated UI that lacked consistency across modules
- Poor visual hierarchy in forms, making them difficult to scan
- No clear grouping of related fields
- Limited validation feedback, which could lead to incorrect data entry
- Creating or modifying forms required significant development effort

Since the platform handles financial operational data, accuracy and clarity were critical.`}
          </div>
        )
      },
      {
        id: 'users',
        title: 'Users',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`The Exchange Master module is primarily used by internal operations teams responsible for maintaining exchange-related configurations in the system.

Primary users include:
- Operations executives managing exchange records
- Back-office settlement teams responsible for financial operations
- Compliance teams ensuring accurate operational data`}
          </div>
        )
      },
      {
        id: 'goal',
        title: 'Goal',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Design a modern, scalable, and structured form interface that:
- Improves readability and usability
- Reduces input errors with validations
- Standardizes form layouts across modules
- Supports dynamic form creation using JSON configuration`}
          </div>
        )
      },
      {
        id: 'my-role',
        title: 'My Role',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Role: UX/UI Designer

Responsibilities included:
- Designing UI layouts for master configuration forms
- Structuring fields into logical sections for better usability
- Introducing visual hierarchy using icons and accordions
- Defining field behaviors and validations using JSON configuration
- Collaborating with developers to integrate designs within the PCM system`}
          </div>
        )
      },
      {
        id: 'design-approach',
        title: 'Design Approach',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`1. Structuring the Form
To make complex forms easier to navigate, fields were grouped into clear sections such as: General Information, Mailing Details, Segment Details. This helped users scan and complete the form more efficiently.

2. Improving Visual Hierarchy
To reduce visual clutter and improve readability:
- Accordion sections were introduced for secondary information
- Icons were used to visually distinguish sections
- A grid-based layout ensured consistent alignment
- Required fields and validations were clearly indicated

3. JSON-Driven Form Configuration
Instead of hardcoding form fields, the UI was built using JSON-based configuration. This allowed: Dynamic form generation, Built-in validation rules, Reusable form structures across modules.

4. Smart Form Interactions
To reduce repetitive input and improve efficiency:
- "Same as Exchange Address" automatically fills mailing address fields
- Conditional logic populates related fields when specific values are selected
This streamlined the data entry process.`}
          </div>
        )
      },
      {
        id: 'query-filters',
        title: 'Key Features: Query Filters',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Users can filter records using fields such as Exchange Code, Exchange Name. This makes it easier to locate specific records.`}
          </div>
        ),
        image: pcmTableView,
        caption: 'Query Filters'
      },
      {
        id: 'table-view',
        title: 'Key Features: Table View',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`The module includes a structured table showing: Exchange Code, Exchange Name, State, Short Name, City. Users can perform quick actions such as: View, Edit, Delete.`}
          </div>
        ),
        image: pcmValidation,
        caption: 'Table View'
      },
      {
        id: 'tab-layout',
        title: 'Key Features: Tab-Based Form Layout',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Forms are divided into tabs like General Information, Segment Details. This keeps complex configurations organized and manageable.`}
          </div>
        ),
        image: pcmSmartField,
        caption: 'Part 1',
        image2: pcmAccordion,
        caption2: 'Part 2'
      },
      {
        id: 'outcome',
        title: 'Outcome',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`The redesigned UI improved the overall usability and scalability of the PCM platform.

Key improvements included:
- Cleaner and more modern interface
- Improved readability through structured sections and tab-based layouts
- Reduced chances of incorrect data entry through validation rules
- Faster form completion due to smart autofill interactions
- Easier navigation of complex forms using accordions and grouping
- Scalable structure for creating additional master forms through JSON configuration
- Consistent UI patterns applied across multiple configuration modules

The same design approach was later extended to other master configuration modules across the PCM system, improving overall interface consistency.`}
          </div>
        ),
        video: pcmDashboardVideo,
        caption: 'Walkthrough Video'
      },
      {
        id: 'validation',
        title: 'UX Decisions & Design Improvements: 1. Validation for Accurate Data Entry',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Since PCM manages financial operational data, input accuracy is critical. Validation rules were implemented through JSON configuration to ensure: Required fields are completed, Input formats are correct, Character limits are enforced.

Impact:
- Reduced data entry errors
- Improved system data quality`}
          </div>
        ),
        image: pcmIcons,
        caption: 'Validation for Accurate Data Entry'
      },
      {
        id: 'smart-field',
        title: 'UX Decisions: 2. Smart Field Behavior',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`To minimize repetitive data entry, certain fields were designed with conditional behavior. For example: "Same as Exchange Address" automatically fills mailing address fields when selected. This eliminates the need for users to manually re-enter the same information.

Impact:
- Faster form completion
- Improved user efficiency`}
          </div>
        ),
        image: pcmOldUi,
        caption: 'Smart Field Behavior'
      },
      {
        id: 'accordion',
        title: 'UX Decisions: 3. Accordion-Based Information Grouping',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Certain sections contained secondary information that did not need to be visible at all times. Accordion sections were introduced so users can hide secondary information and focus on primary fields, reducing visual clutter in complex forms.

Impact:
- Cleaner interface
- Reduced cognitive load
- Improved focus on primary inputs`}
          </div>
        ),
        image: pcmPagination,
        caption: 'Accordion Grouping'
      },
      {
        id: 'visual-hierarchy',
        title: 'UX Decisions: 4. Visual Hierarchy with Icons',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Enterprise applications often contain large forms with many inputs. To make sections easier to identify, icons were introduced alongside section headers. This created visual cues that help users quickly distinguish between different sections of the form.

Impact:
- Better visual hierarchy
- Faster navigation within the form`}
          </div>
        ),
        image: pcmValidation,
        caption: 'Visual Hierarchy with Icons'
      },
      {
        id: 'pagination',
        title: 'UX Decisions: 5. Pagination for Data Management',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`Since the Exchange Master module displays multiple records, it was important to ensure that users could easily navigate through large datasets.

I designed a pagination component in Figma to organize records across pages and improve data browsing. The pagination included controls such as First, Previous, Next, Last, and direct page navigation, along with a "Show per page" option to control the number of records displayed.

Impact:
- Easier navigation across large data sets
- Improved table usability and record management
- Consistent table interaction pattern across modules`}
          </div>
        ),
        image: pcmPg,
        caption: 'Pagination Design'
      },
      {
        id: 'comparison',
        title: 'Comparison: Old vs New UI',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`A comparison of the previous system interface and the newly redesigned enterprise interface.`}
          </div>
        ),
        image: pcmOldLegacy,
        caption: 'Old UI',
        image2: pcmNewUi,
        caption2: 'New UI'
      },
      {
        id: 'learnings',
        title: 'Learnings',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`This project helped me understand the challenges of designing enterprise financial software.

Key takeaways:
- Clear structure and hierarchy are essential for complex forms
- JSON-driven UI can significantly improve scalability
- Small UX improvements like auto-fill logic and field grouping can greatly improve usability
- Close collaboration with developers is crucial when designing configuration-driven interfaces`}
          </div>
        )
      }
    ]
  },
  'stock-exchange': {
    title: 'Stock Exchange Sign-Up Website',
    kicker: 'Responsive Web UX Case Study',
    summary: 'Designing an Intuitive Sign-Up Process for a Stock Exchange Website.\n\nThe goal was to create a user-centered, seamless, and secure registration experience that encourages user engagement and trust in the platform — addressing information overload, complex navigation, and security concerns.',
    banner: seBanner,
    metadata: [
      { label: 'Role', value: 'UX Designer', icon: FiUser },
      { label: 'Timeline', value: 'Two months', icon: FiClock },
      { label: 'Tags', value: 'E-Commerce, Responsive Web, UI/UX', icon: FiTag },
      { label: 'Tools', value: 'Figma, Gmail, Notion, Zoom', icon: FiTool },
    ],
    sections: [
      {
        id: 'hero-screens',
        title: 'Design Overview',
        image: seHeroFrame,
      },
      {
        id: 'introduction',
        title: 'Introduction',
        content: (
          <p>In this UX case study, we'll explore the design and implementation of an intuitive sign-up process for a stock exchange website. The goal is to create a user-centered, seamless, and secure registration experience that encourages user engagement and trust in the platform.</p>
        ),
      },
      {
        id: 'problem',
        title: 'Problem',
        content: (
          <div style={{ whiteSpace: 'pre-line' }}>
            {`The main problems include unclear stock listings, too much data shown at once, hard to navigate, and not enough personalized features. This makes users feel confused, uninterested, and they might not trust the platform.

Key pain points identified:
- Information Overload: Users feel overwhelmed when using stock exchange websites. The menus are complex and the design is not user-friendly, making it difficult to find the information they need.
- Complex Navigation: Users find existing platforms overwhelming and confusing to navigate, leading to frustration and a sense of being lost.
- Security Concerns: Users have valid concerns about the security of their personal and financial information, making them hesitant to provide sensitive information or engage in online transactions.

Also, there isn't enough educational information to help users improve their investment knowledge and strategies.`}
          </div>
        ),
      },
      {
        id: 'solution',
        title: 'Solution',
        content: (
          <p>Our solution for the stock exchange website is to completely redesign it. The redesign will make it easier to use, navigate, and engage with. We will also provide valuable resources for investors of all levels of expertise. Our main goal is to create a platform that is easy to understand, interactive, and secure — empowering users to make informed investment decisions and addressing their specific needs and concerns.</p>
        ),
      },
      {
        id: 'process',
        title: 'Process',
        content: (
          <p>User Research → Definition → Market Research → Solution → Design Process → Prototyping</p>
        ),
        image: seProcess,
      },
      {
        id: 'persona',
        title: 'Persona',
        image: sePersona,
      },
      {
        id: 'sitemap',
        title: 'Site Map',
        content: (
          <p>By following this site map, the stock exchange website can offer a well-organized and user-friendly platform that caters to the diverse needs of investors and ensures smooth navigation throughout the site.</p>
        ),
        image: seSitemap,
      },
      {
        id: 'paper-first',
        title: 'Paper First',
        content: (
          <p>The home screen paper wireframe variations are designed to enhance the user browsing experience, addressing pain points related to navigation, information overload, and overwhelming interfaces.</p>
        ),
        image: sePaperFirst,
        caption: 'Paper Wireframe Sketches',
      },
      {
        id: 'user-testing',
        title: 'User Testing',
        content: (
          <p>I conducted a user testing session on ten participants. I employed a combination of moderated usability testing and remote testing to gather insights from a diverse range of participants. The testing was conducted in a controlled environment, and participants were given specific tasks to complete during the sign-up process.</p>
        ),
        image: seUserTesting,
        caption: 'User Testing Session',
      },
      {
        id: 'design-systems',
        title: 'Design Systems',
        image: seDesignSystem,
        caption: 'Design System — Colors, Typography & Components',
      },
      {
        id: 'high-fidelity-1',
        title: 'High Fidelity Prototype',
        content: (
          <p>My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design changes made after the usability study. The iterative design process, guided by user testing, allowed for a refined experience that directly addresses user concerns and enhances the sign-up experience.</p>
        ),
        image: seSignIn,
        caption: 'Sign In',
        image2: seLogIn,
        caption2: 'Log In / Sign Up',
      },
      {
        id: 'high-fidelity-2',
        title: 'High Fidelity — OTP & Verification',
        image: seOtp,
        caption: 'OTP Verification',
        image2: seVerify,
        caption2: 'Verify Identity',
      },
      {
        id: 'high-fidelity-3',
        title: 'High Fidelity — Investment Journey & Documents',
        image: seInvestmentJourney,
        caption: 'Investment Journey',
        image2: seUploadDocs,
        caption2: 'Upload Documents',
      },
      {
        id: 'high-fidelity-4',
        title: 'High Fidelity — Review & E-Sign',
        image: seReviewEsign,
        caption: 'Review and E-Sign',
      },
      {
        id: 'impact',
        title: 'Impact',
        content: (
          <p>The design changes have effectively addressed user pain points, resulting in a more user-friendly, engaging, and visually appealing stock exchange website. These improvements are likely to contribute to higher user satisfaction, increased user engagement, and improved overall usability of the platform.</p>
        ),
      },
      {
        id: 'learned',
        title: 'What I Learned',
        content: (
          <p>I learned that even small design changes can make a significant difference in the user experience. The commitment to putting users first will undoubtedly lead to more successful and impactful design solutions.</p>
        ),
      },
    ]
  }
};

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.section
      className="case-study-section panel"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2>{title}</h2>
      <div className="case-study-content">
        {children}
      </div>
    </motion.section>
  );
}

export default function CaseStudyPage({ slug, onBack }: CaseStudyPageProps) {
  const data = caseStudyData[slug as keyof typeof caseStudyData];

  if (!data) {
    return (
      <div className="case-study-page not-found">
        <h2>Case study not found</h2>
        <button onClick={onBack}>Go back</button>
      </div>
    );
  }

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
        </motion.div>
      </header>

      <main className="case-study-page" id="case-study">
        <motion.section
          className="case-hero panel"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="case-hero-copy">
            <span className="hero-kicker">{data.kicker}</span>
            <h1>{data.title}</h1>
            <p className="resume-summary" style={{ whiteSpace: 'pre-line' }}>{data.summary}</p>

            <div className="case-meta-grid">
              {data.metadata.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="case-meta-card panel">
                    <div className="case-meta-header">
                      <Icon />
                      <span>{item.label}</span>
                    </div>
                    <strong>{item.value}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.div 
          className="case-banner-full panel"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
        >
           <img src={data.banner} alt={`${data.title} Banner`} />
        </motion.div>

        <div className="case-body-sections">
          {data.sections.map((section: any) => (
            <CaseSection key={section.id} title={section.title}>
              {section.content && <div className="case-text-block">{section.content}</div>}
              {section.image && (
                <div style={{ margin: '2rem 0' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}>
                    <img src={section.image} alt={section.title} style={{ width: '100%', display: 'block' }} />
                  </div>
                  {section.caption && <p style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>{section.caption}</p>}
                </div>
              )}
              {section.image2 && (
                <div style={{ margin: '2rem 0' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}>
                    <img src={section.image2} alt={section.title + ' 2'} style={{ width: '100%', display: 'block' }} />
                  </div>
                  {section.caption2 && <p style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>{section.caption2}</p>}
                </div>
              )}
              {section.video && (
                <div className="case-image-block panel">
                  <video src={section.video} autoPlay loop muted playsInline controls style={{ width: '100%', borderRadius: '12px' }} />
                  {section.caption && <p style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>{section.caption}</p>}
                </div>
              )}
              {section.iframe && (
                <div className="case-iframe-block panel">
                  <iframe 
                    src={section.iframe} 
                    allowFullScreen 
                    title={`${section.title} Prototype`}
                  />
                </div>
              )}
            </CaseSection>
          ))}
        </div>

        <motion.section
          className="resume-footer-cta panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-tag">Next steps</span>
            <h2>Ready to see more?</h2>
          </div>

          <div className="resume-footer-actions">
            <button type="button" className="resume-back-button" onClick={onBack} data-cursor="Back">
              <FiArrowLeft />
              <span>Back to home</span>
            </button>
          </div>
        </motion.section>
      </main>
    </>
  );
}
