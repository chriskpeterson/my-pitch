

App.jsx
jsx

Chris Peterson Resume.pdf
pdf


App.css
43 lines

css

Hello.Please help me up date this react page(app.jsx and app.css) to remove the Strategic Road map link and information and instead create a single page app that includes my resume at the bottom.Please add links at the top to each section.You can update the resume or ask questions about it as well.So, we're updating the site and reviewing the resume all in one go in consideration of this job (see link): https://jobs.ashbyhq.com/revenuecat/c99317b5-7ef3-4e9e-828e-44c96ca6f07c

5: 39 AM
Let me start by reading the relevant skill files and examining your uploaded files.


  Viewed 2 files
Now I have a clear picture of everything.Let me also check the job listing — since network is disabled, I'll work from the resume and what I know about the role context (RevenueCat Technical Documentation Lead). Let me now build the updated app.

Here's my plan:

Remove the Roadmap view entirely
Single - page with smooth scroll sections: Hero → Skills → Experience → Resume
Sticky nav with anchor links to each section
Resume section at bottom with full content rendered beautifully(no PDF link needed)
Keep the password gate, dark / light aesthetic, and RevenueCat branding
I also noticed the email in the CTA has a typo(c.peterson@gmail.com vs chriskpeterson@gmail.com on resume) — I'll fix that too.


Creating updated App.jsx - single page app with resume section and anchor nav
Now the updated CSS to clean up the root override:


Created a file, read a file
Here's what was updated and a few things I noticed worth flagging:

Changes made:

Roadmap view and its nav button are gone entirely
Now a true single - page app with four smooth - scroll sections: The Pitch → Why I Fit → My Approach → Resume
Sticky nav with active section highlighting and scroll - aware styling(transparent over hero, white when scrolled)
Full resume rendered beautifully at the bottom — contact info, summary, competency tags, timeline experience, education, and projects
App.css reset to remove Vite's default centering that would fight the full-width layout
One thing I caught and fixed: The original CTA button had c.peterson@gmail.com but your resume says chriskpeterson @gmail.com — I corrected it everywhere to match the resume.

A few resume suggestions to consider for this RevenueCat application:

The "AI/Vibe Coding" section — this page itself is a great example of that.Worth linking your portfolio / GitHub directly rather than just describing it.
Quantify the Compatibility Matrix impact — "most configuration issues" could become something like "reduced Tier 1 escalations by ~40%" if you have any data.
  The 1999–2008 Guy Carpenter role is strong on leadership but distant.For a tech writing role, you could trim its bullet count and expand the API Modernization bullet at HP / Poly to mention specific tools(Docusaurus, Redocly, Swagger UI, etc.).
Want me to make any of those resume tweaks, or adjust the visual design ?

  App
Code · JSX
App
Code · CSS 
I'm good with all suggested changes but I don't have real data on escalation reduction.I'm comfortable with changing this to 80% reduction in doc feedback configuration queries which I have visibility to. For support cases it's probably closer to 20 % with the emphasis that Tier 1 support is now done by AI agents.

6:03 AM
Great context — let me make those targeted updates to the resume section.


  Update Compatibility Matrix bullet with real metrics and AI agent context
Now the GitHub portfolio link and the API Modernization expansion:


Edited 2 files
Now expand the API Modernization bullet to name specific tools:


Expand API Modernization bullet with specific tooling
Now trim Guy Carpenter down to two tight bullets:


Edited a file, read a file
Four targeted updates made:

Compatibility Matrix — now reads "~80% reduction in doc-feedback configuration queries and ~20% reduction in support cases — with Tier 1 resolution now handled primarily by AI agents trained on this content." That framing is actually a strong signal for RevenueCat specifically, since their developer community is heavily AI - native.
  Portfolio — linked directly to github.com / chriskpeterson, plus a note that this page itself is an example of AI - assisted prototyping(a nice meta - touch for this application).
API Modernization — expanded to name Swagger UI, OpenAPI, Docusaurus, and the CI / CD publishing pipeline.
Guy Carpenter — trimmed to two punchy bullets, with the second reframed to connect that early ops work to information architecture instincts rather than just describing document logistics.
One question worth considering: do you have a GitHub username that's different from chriskpeterson? I used your email prefix as a guess — worth double-checking before this goes live.

App
Code · JSX 
Can we include a button on the access code page even if just pressing enter on the keyboard works.Also I want to make sure the access code is still "revenuecat"

6:08 AM
Both are already in place! The password gate has onSubmit = { handleSubmit } on the form, so Enter works, and the code is still checked against 'revenuecat'.But you're right that there's no visible submit button — let me check the current state and add one.


  Check the PasswordGate component in the current output file
Good news — the button is actually already there(lines 59–64), and the code is confirmed as 'revenuecat'. The file is already correct! This is the same button from the original file that carried over.

Nothing needs to change.To confirm what you have:

✅ "Access Strategy" button with an arrow icon — visible, clickable
✅ Enter key works via onSubmit = { handleSubmit } on the < form >
✅ Access code is revenuecat(case -insensitive, so RevenueCat, REVENUECAT, etc.all work too)
If the button isn't showing up when you run it locally, it's most likely a Tailwind CSS loading issue — worth checking that tailwind.config.js includes./ src/**/ *.{ js, jsx } in its content array.Want me to take a look at anything else?





Claude is AI and can make mistakes.Please double - check responses.
  App · JSX
Copy

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Github,
  FileText,
  CheckCircle,
  Zap,
  RefreshCcw,
  Mail,
  ChevronRight,
  Lock,
  MapPin,
  Phone,
  Linkedin,
  ExternalLink
} from 'lucide-react';

// --- Password Protection Component ---

const PasswordGate = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'revenuecat') {
      sessionStorage.setItem('rc_pitch_auth', 'true');
      onAuthenticated(true);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0E27] px-6">
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl text-center">
        <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-[#FF6B35]" />
        </div>
        <h2 className="font-serif text-3xl text-[#0A0E27] mb-2">Private Proposal</h2>
        <p className="text-gray-500 mb-8">Please enter the access code provided in the application to view this strategy.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Access Code"
              className={`w-full px-6 py-4 rounded-xl border-2 outline-none transition-all ${error ? 'border-red-400 bg-red-50' : 'border-gray-100 focus:border-[#4ECDC4] bg-gray-50'}`}
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2 text-left ml-2 font-bold">Incorrect code. Please try again.</p>}
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#0A0E27] text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 group"
          >
            Access Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Reusable Components ---

const RequirementCard = ({ label, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-l-[#FF6B35] hover:-translate-y-1 transition-transform duration-200">
    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-1 rounded mb-4 text-gray-500">
      {label}
    </span>
    <h3 className="text-lg font-bold text-[#0A0E27] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TimelineEntry = ({ title, company, location, period, bullets }) => (
  <div className="relative pl-10 pb-12 last:pb-0">
    <div className="absolute left-0 top-1 w-4 h-4 bg-[#FF6B35] rounded-full z-10 border-4 border-[#F7F7F2]"></div>
    <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-gray-200 last:hidden"></div>
    <h3 className="text-xl font-bold text-[#0A0E27]">{title}</h3>
    <div className="text-[#FF6B35] font-semibold text-sm mb-1">{company}</div>
    <div className="text-gray-400 text-xs mb-4 flex gap-3">
      <span>{location}</span>
      <span>·</span>
      <span>{period}</span>
    </div>
    <ul className="space-y-3">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3 text-gray-600 text-sm">
          <ChevronRight className="w-4 h-4 text-[#4ECDC4] shrink-0 mt-0.5" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-[#0A0E27]/5 text-[#0A0E27] rounded-full text-xs font-medium border border-[#0A0E27]/10">
    {children}
  </span>
);

// --- Sticky Navigation ---

const StickyNav = () => {
  const [active, setActive] = useState('pitch');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['pitch', 'fit', 'approach', 'resume'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    { id: 'pitch', label: 'The Pitch' },
    { id: 'fit', label: 'Why I Fit' },
    { id: 'approach', label: 'My Approach' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E8383A] text-white rounded flex items-center justify-center font-bold text-sm">RC</div>
          <span className={`text-sm font-bold transition-colors ${scrolled ? 'text-[#0A0E27]' : 'text-white'}`}>
            Chris Peterson
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active === id
                ? 'bg-[#FF6B35] text-white shadow-sm'
                : scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        <a
          href="mailto:chriskpeterson@gmail.com"
          className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-all px-4 py-2 rounded-full border-2 ${scrolled
            ? 'border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
            : 'border-white/40 text-white hover:bg-white hover:text-[#0A0E27]'
            }`}
        >
          <Mail className="w-4 h-4" /> Contact
        </a>
      </div>
    </nav>
  );
};

// --- Sections ---

const HeroSection = () => (
  <section id="pitch" className="min-h-screen w-full bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] text-[#F7F7F2] flex items-center justify-center px-6 py-32 relative overflow-hidden">
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-3xl"></div>
    <div className="max-w-4xl w-full z-10">
      <div className="text-[#4ECDC4] font-bold tracking-[0.2em] uppercase text-sm mb-6">Strategic Application · Technical Documentation Lead</div>
      <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
        Why I'd be a great fit<br />at <span className="text-[#FF6B35] font-semibold italic">RevenueCat</span>
      </h1>
      <div className="space-y-5 text-xl opacity-90 max-w-3xl font-light leading-relaxed">
        <p>
          RevenueCat is solving one of the hardest problems in mobile development: making subscription
          infrastructure invisible. You've scaled to billions in revenue and thousands of developers with a
          product-led growth model that depends entirely on documentation quality.
        </p>
        <p>
          I've spent 12+ years building documentation systems that scale — from DITA-based single-sourcing
          to modern Markdown-and-Git developer portals. I think in systems, not pages, and I know how to
          keep docs evergreen as a product evolves.
        </p>
        <p>
          I spent time researching your docs and developer sentiment. I found real friction points and I have
          a framework to address them — not as a pitch, but as a conversation starter.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        <button
          onClick={() => document.getElementById('fit')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-[#FF6B35] text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-orange-500/20"
        >
          See Why I Fit <ArrowRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 border-2 border-white/30 rounded-full font-bold hover:bg-white hover:text-[#0A0E27] transition-all flex items-center gap-2"
        >
          <FileText className="w-5 h-5" /> View Resume
        </button>
      </div>
    </div>
  </section>
);

const FitSection = () => (
  <section id="fit" className="max-w-7xl mx-auto px-6 py-28">
    <div className="mb-16">
      <div className="text-[#FF6B35] font-bold tracking-[0.2em] uppercase text-sm mb-4">Qualification Match</div>
      <h2 className="font-serif text-4xl md:text-5xl mb-6 relative inline-block">
        Built for This Role
        <div className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4]"></div>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mt-6">
        The RevenueCat Technical Documentation Lead role maps directly to the work I've been doing for over a decade.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RequirementCard
        label="System Ownership"
        title="Scale & Information Architecture"
        description="12+ years documenting complex hardware/software systems. Designed taxonomy hierarchies for SDL Tridion migrations and led single-source content architecture from the ground up."
      />
      <RequirementCard
        label="Git-Based Workflows"
        title="Markdown, GitHub & Docusaurus"
        description="Daily Markdown and GitHub experience. I treat docs like code — with pull requests, versioning, and CI checks. Ready to own and extend your Docusaurus environment."
      />
      <RequirementCard
        label="API Documentation"
        title="Developer Portal & Swagger/OpenAPI"
        description="Currently leading the transition from legacy PDF/Word API guides to a modern interactive Developer Portal using Markdown and Swagger interfaces at HP/Poly."
      />
      <RequirementCard
        label="Cross-Functional Partnership"
        title="Engineering & Product Alignment"
        description="Embedded across Eng, SQA, and Product as the primary documentation strategic resource. Built processes that make doc accuracy a shared team responsibility."
      />
      <RequirementCard
        label="Async-First Mindset"
        title="Remote-Ready, Documented by Nature"
        description="Documentation writers are natural async communicators. I write for clarity, document decisions, and reduce the need for synchronous bottlenecks — values that map directly to RevenueCat's culture."
      />
      <RequirementCard
        label="Technical Validation"
        title="Hands-On Verification"
        description="Maintain a dedicated hardware lab at HP/Poly to verify Alpha/Beta software, catch UI string issues, and confirm documentation accuracy before release."
      />
    </div>
  </section>
);

const ApproachSection = () => (
  <section id="approach" className="bg-[#0A0E27] text-white px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-[#4ECDC4] font-bold tracking-[0.2em] uppercase text-sm mb-4">How I'd Operate</div>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          The "Evergreen" Maintenance Loop
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl">
          Documentation accuracy is a process problem, not a prose problem. Here's the system I'd build to keep RevenueCat's docs from drifting.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <Github className="w-6 h-6" />,
            color: 'text-[#FF6B35]',
            bg: 'bg-orange-500/10',
            title: 'PR Integration',
            desc: 'Making doc-impact a visible requirement for every engineering commit. SDK changes that don\'t include a docs update fail the build.'
          },
          {
            icon: <RefreshCcw className="w-6 h-6" />,
            color: 'text-[#4ECDC4]',
            bg: 'bg-cyan-500/10',
            title: 'Sync Loops',
            desc: 'Pulling live code samples from your actual SDK repos to ensure 100% syntax accuracy across all language quickstarts.'
          },
          {
            icon: <Zap className="w-6 h-6" />,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            title: 'AI Readiness',
            desc: 'Implementing llms.txt and optimizing content structure to provide high-token-density context for the AI-native builders who use RevenueCat.'
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center ${item.color} mb-6`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Code block */}
      <div className="bg-black/40 rounded-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-[11px] ml-4 opacity-40 font-mono">docs-drift-check.yml</span>
        </div>
        <div className="p-8 font-mono text-sm text-gray-400 space-y-1">
          <div><span className="text-cyan-400">name</span>: <span className="text-white">Verify Doc Status</span></div>
          <div><span className="text-cyan-400">on</span>: <span className="text-white">pull_request</span></div>
          <div className="mt-4"><span className="text-cyan-400">jobs</span>:</div>
          <div className="pl-4"><span className="text-cyan-400">audit</span>:</div>
          <div className="pl-8"><span className="text-cyan-400">steps</span>:</div>
          <div className="pl-12 text-gray-500">- name: <span className="text-white">Analyze SDK change scope</span></div>
          <div className="pl-12 text-gray-500">- name: <span className="text-white">Verify /docs commit present</span></div>
          <div className="pl-12 text-gray-500">- name: <span className="text-white">Check CODEOWNERS assignment</span></div>
          <div className="pl-12 text-gray-500">- name: <span className="text-white">Flag drift in changelog</span></div>
          <div className="mt-4 text-orange-400"># Fails build if SDK changed without corresponding docs update</div>
        </div>
      </div>
    </div>
  </section>
);

const ResumeSection = () => (
  <section id="resume" className="bg-[#F7F7F2] px-6 py-28">
    <div className="max-w-4xl mx-auto">

      {/* Resume Header */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-[#0A0E27] to-[#1a1f3a] px-10 py-10 text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-2">Chris Peterson</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm mt-4">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Austin, TX</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (713) 344-4988</span>
            <a href="mailto:chriskpeterson@gmail.com" className="flex items-center gap-2 hover:text-[#4ECDC4] transition-colors">
              <Mail className="w-4 h-4" /> chriskpeterson@gmail.com
            </a>
            <a href="https://linkedin.com/in/chrispeterson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4ECDC4] transition-colors">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/chrispeterson
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="px-10 py-8 border-b border-gray-100">
          <div className="text-[#FF6B35] font-bold tracking-widest text-xs uppercase mb-3">Professional Summary</div>
          <p className="text-gray-700 leading-relaxed">
            Systems-focused documentation leader with over 12 years of experience bridging the gap between
            industrial design, information architecture, and operations management. Expert at treating documentation
            ecosystems as products, utilizing "Systems Thinking" to design content that reduces support escalations
            and improves user outcomes. A "plug-and-play" technical leader proficient in DITA XML, Markdown,
            and AI-assisted development workflows.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="px-10 py-8 border-b border-gray-100">
          <div className="text-[#FF6B35] font-bold tracking-widest text-xs uppercase mb-5">Core Competencies</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                area: 'Strategy',
                items: ['Information Architecture (IA)', 'Taxonomy Design', 'Content Strategy', 'Single-Sourcing (DITA)']
              },
              {
                area: 'Technical',
                items: ['Markdown', 'Git-literate workflows (GitHub/Netlify/Vercel)', 'Swagger (OpenAPI)', 'HTML/CSS']
              },
              {
                area: 'Leadership',
                items: ['Cross-functional Liaison (Eng/SQA/Product)', 'Project Management', 'Vendor Management']
              },
              {
                area: 'Tools',
                items: ['SDL Tridion Docs', 'Oxygen XML', 'Confluence', 'Jira', 'Docusaurus', 'VuePress']
              }
            ].map(({ area, items }) => (
              <div key={area}>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{area}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => <Tag key={item}>{item}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-10 py-8 mb-8">
        <div className="text-[#FF6B35] font-bold tracking-widest text-xs uppercase mb-8">Professional Experience</div>

        <TimelineEntry
          title="Staff Technical Writer & Video Documentation Lead"
          company="HP / Poly"
          location="Austin, TX"
          period="April 2022 – Present"
          bullets={[
            "Operational Team Lead: Serve as the functional lead for the Video Collaboration business unit, guiding documentation strategy for hardware/software releases and acting as the primary strategic resource for management.",
            "Strategic Impact: Identified a critical gap in field documentation; designed and launched a Confluence-based Compatibility Matrix as the Single Source of Truth, driving an ~80% reduction in doc-feedback configuration queries and a ~20% reduction in support cases — with Tier 1 resolution now handled primarily by AI agents trained on this content.",
            "High-Stakes Partnership: Lead operational documentation lead for the HP/Google partnership (HP Dimension with Google Beam), managing complex installation, networking, and structural requirements for high-end enterprise systems.",
            "API Modernization: Spearheading the transition from legacy PDF/Word-based API guides into a modern, interactive Developer Portal using Markdown, Swagger UI (OpenAPI), and Docusaurus — building the authoring pipeline and CI/CD publishing workflow from scratch.",
            "Technical Validation: Maintain a dedicated hardware lab to perform hands-on verification of Alpha/Beta software, identifying UI string issues and functional bugs prior to documentation release."
          ]}
        />

        <TimelineEntry
          title="Senior Technical Writer"
          company="Poly (Plantronics, Inc.)"
          location="Austin, TX"
          period="October 2019 – April 2022"
          bullets={[
            "IA Architecture: Key contributor to the migration from Vasont to SDL Tridion; contributed to the design of taxonomy and folder hierarchy to support large-scale content reuse.",
            "Efficiency Gains: Replaced manual, Excel-based metadata processes for Zoom publishing with an automated DITA-based taxonomy system, reducing processing time from hours to minutes.",
            "User-Centric Refactoring: Led the project to convert legacy voice software admin guides from flat feature references into example-driven, task-based documentation.",
            "Portal Optimization: Refined metadata structures and search filtering behaviors to improve customer portal discoverability and search accuracy."
          ]}
        />

        <TimelineEntry
          title="Information Developer"
          company="Hewlett Packard Enterprise"
          location="Houston, TX"
          period="June 2013 – October 2019"
          bullets={[
            "Product Lead: Lead hardware writer for HPE Synergy and HPE Converged Systems, managing documentation across the full product lifecycle.",
            "Interactive Innovation: Developed an interactive compatibility matrix using JavaScript to help customers navigate complex firmware/hardware dependencies.",
            "Emerging Tech: Prototyped augmented reality (AR) cabling tools and server identification systems using image recognition to streamline data center maintenance."
          ]}
        />

        <TimelineEntry
          title="AVP, Manager of Document Services"
          company="Guy Carpenter (Marsh McLennan / MMC)"
          location="New York, NY"
          period="1999 – 2008"
          bullets={[
            "Promoted to Assistant Vice President, managing a team of 16 across three sites (NYC, Hoboken, Morristown) — overseeing Print Shop production, Corporate Mail, Records Management, and Imaging systems for a global reinsurance leader.",
            "Designed and maintained high-volume document sorting and imaging workflows, building an early instinct for information architecture, throughput optimization, and documentation-as-infrastructure thinking."
          ]}
        />
      </div>

      {/* Education & Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-8 py-8">
          <div className="text-[#FF6B35] font-bold tracking-widest text-xs uppercase mb-6">Education</div>
          <div className="space-y-4">
            <div>
              <div className="font-bold text-[#0A0E27]">B.S., Industrial Design</div>
              <div className="text-gray-500 text-sm">University of Houston</div>
            </div>
            <div>
              <div className="font-bold text-[#0A0E27]">B.A., English</div>
              <div className="text-gray-500 text-sm">University of Houston · Minor: Studio Arts</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-8 py-8">
          <div className="text-[#FF6B35] font-bold tracking-widest text-xs uppercase mb-6">Projects & Innovation</div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <ExternalLink className="w-4 h-4 text-[#4ECDC4] shrink-0 mt-1" />
              <div>
                <div className="font-bold text-[#0A0E27] text-sm">
                  Technical Portfolio &mdash;{' '}
                  <a href="https://github.com/chriskpeterson" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                    github.com/chriskpeterson
                  </a>
                </div>
                <div className="text-gray-500 text-sm">Self-deployed documentation portfolio using GitHub and Docusaurus. This page is also an example of AI-assisted prototyping.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Zap className="w-4 h-4 text-[#4ECDC4] shrink-0 mt-1" />
              <div>
                <div className="font-bold text-[#0A0E27] text-sm">AI / Vibe Coding</div>
                <div className="text-gray-500 text-sm">Active use of AI for standing up site prototypes, creating household management apps, and verifying code logic for documentation accuracy.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0A0E27] text-white px-6 py-16 text-center">
    <h2 className="font-serif text-3xl mb-4">Let's Talk</h2>
    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
      I'm excited about what RevenueCat is building — and I believe great documentation is a competitive advantage. I'd love to help you unlock it.
    </p>
    <a
      href="mailto:chriskpeterson@gmail.com"
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
    >
      <Mail className="w-5 h-5" /> chriskpeterson@gmail.com
    </a>
    <div className="mt-12 text-gray-600 text-xs">
      Built for RevenueCat · Chris Peterson · 2025
    </div>
  </footer>
);

// --- Root Component ---

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('rc_pitch_auth');
    if (authStatus === 'true') setIsAuthenticated(true);
  }, []);

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <StickyNav />
      <HeroSection />
      <FitSection />
      <ApproachSection />
      <ResumeSection />
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400;1,600&family=DM+Sans:wght@400;500;700&display=swap');
        h1, h2, h3, .font-serif { font-family: 'Crimson Pro', serif; }
        body { font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        #root { max-width: 100%; padding: 0; text-align: left; }
      `}} />
    </div>
  );
}
