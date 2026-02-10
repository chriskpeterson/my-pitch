import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  FileText,
  CheckCircle,
  Terminal,
  Cpu,
  Zap,
  Layers,
  Search,
  RefreshCcw,
  Mail,
  ChevronRight,
  Monitor,
  Layout,
  Clock,
  Lock
} from 'lucide-react';

// --- Password Protection Component ---

const PasswordGate = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // SET YOUR PASSWORD HERE
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
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl text-center animate-in fade-in zoom-in duration-500">
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

// --- Reusable Content Components ---

const StrategyCard = ({ title, description, label, accent = "accent" }) => (
  <div className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all border-l-4 ${accent === 'accent' ? 'border-l-[#FF6B35]' : 'border-l-[#4ECDC4]'}`}>
    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{label}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TimelineItem = ({ title, company, period, bullets }) => (
  <div className="relative pl-10 pb-12 last:pb-0">
    <div className="absolute left-0 top-1 w-4 h-4 bg-[#FF6B35] rounded-full z-10 border-4 border-[#F7F7F2]"></div>
    <div className="absolute left-[7px] top-1 bottom-0 w-0.5 bg-gray-200"></div>
    <h3 className="text-xl font-bold text-[#0A0E27]">{title}</h3>
    <div className="text-[#FF6B35] font-semibold text-sm mb-4">{company} | {period}</div>
    <ul className="space-y-3">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3 text-gray-600">
          <ChevronRight className="w-5 h-5 text-[#4ECDC4] shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RequirementCard = ({ label, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-l-[#FF6B35] hover:-translate-y-1 transition-transform">
    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-1 rounded mb-4 text-gray-500">
      {label}
    </span>
    <h3 className="text-lg font-bold text-[#0A0E27] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// --- Main Views ---

const LandingView = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero */}
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] text-[#F7F7F2] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="max-w-4xl w-full z-10">
        <div className="text-[#4ECDC4] font-bold tracking-[0.2em] uppercase text-sm mb-6">Strategic Application</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
          Why I'd be a great fit<br />at <span className="text-[#FF6B35] font-semibold italic">RevenueCat</span>
        </h1>
        <div className="space-y-6 text-xl opacity-90 max-w-3xl font-light leading-relaxed">
          <p>
            RevenueCat is solving one of the hardest problems in mobile development: making subscription
            infrastructure invisible. You've scaled to billions in revenue and thousands of developers with a
            product-led growth model that depends entirely on documentation quality. That's a strategic advantage waiting to be unlocked.
          </p>
          <p>
            I've spent 10+ years building documentation systems that scale. I know how to prevent docs from drifting,
            how to make content AI-readable, and how to build processes that let engineers contribute without bottlenecks.
            I want to build that system for you.
          </p>
          <p>
            I spent a week researching your docs and developer sentiment. I identified 8 friction points and built a
            roadmap. Not as a pitch, but as a conversation starter.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-12">
          <button
            onClick={() => onNavigate('roadmap')}
            className="px-8 py-4 bg-[#FF6B35] text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-orange-500/20"
          >
            View Strategic Roadmap <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="resume.pdf"
            className="px-8 py-4 border-2 border-white/30 rounded-full font-bold hover:bg-white hover:text-[#0A0E27] transition-all"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>

    {/* Requirements Grid */}
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-serif text-4xl mb-16 relative inline-block">
        Technical Documentation Lead Skills
        <div className="absolute -bottom-4 left-0 w-2/3 h-1 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4]"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RequirementCard
          label="System Ownership"
          title="Scale & Infrastructure"
          description="10+ years documenting complex systems. I think in systems, not pages, ensuring documentation remains a durable asset as you scale."
        />
        <RequirementCard
          label="Git-Based Workflows"
          title="Markdown & Docusaurus"
          description="Daily experience with Markdown and GitHub. I treat documentation like code and am ready to own your Docusaurus environment."
        />
        <RequirementCard
          label="Technical Depth"
          title="Engineering Alignment"
          description="Bridging the gap between SDK engineers and customers. I translate complex architecture into clear, consistent technical prose."
        />
        <RequirementCard
          label="Editorial Focus"
          title="Style & Voice"
          description="Developing and enforcing style guidelines to ensure that even when 50 engineers contribute, the docs speak with a single voice."
        />
        <RequirementCard
          label="Information IA"
          title="Taxonomy & Navigation"
          description="At Plantronics, I overhauled our categorization to reduce friction and improve self-service success rates for technical users."
        />
        <RequirementCard
          label="The Future"
          title="AI & Machine Readability"
          description="Structuring content for LLMs and search. I treat AI readability as a first-class concern alongside human usability."
        />
      </div>
    </section>

    {/* Timeline Section */}
    <section className="w-full bg-gray-50 border-y border-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16">Career Highlights</h2>
        <div className="timeline">
          <TimelineItem
            title="Staff Technical Writer"
            company="HP / Poly"
            period="2022 – Present"
            bullets={[
              "Lead documentation owner for enterprise video and audio lines.",
              "Partnered with engineering squads to ensure new features shipped with high-quality API integration notes.",
              "Reduced support load by implementing compatibility matrices and clear troubleshooting paths."
            ]}
          />
          <TimelineItem
            title="Senior Technical Writer"
            company="Plantronics (now Poly)"
            period="2019 – 2022"
            bullets={[
              "Utilized DITA XML to implement large-scale content reuse and architectural modularity.",
              "Optimized information architecture and taxonomy systems, leading to a measurable improvement in doc search accuracy."
            ]}
          />
          <TimelineItem
            title="Technical Writing Lead"
            company="Product Support & Engineering Teams"
            period="2012 – 2019"
            bullets={[
              "7+ years collaborating with engineers to document hardware/software integrations.",
              "Developed materials across MadCap Flare, FrameMaker, and Oxygen XML."
            ]}
          />
        </div>
      </div>
    </section>

    {/* Footer CTA */}
    <section className="bg-[#0A0E27] text-white py-32 text-center px-6">
      <h2 className="text-4xl font-serif mb-6">Let's Talk About Your Docs</h2>
      <p className="max-w-2xl mx-auto opacity-70 mb-12 text-lg">
        I've identified 8 specific friction points in your current implementation flow and built prototypes for how to solve them.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="mailto:c.peterson@gmail.com" className="px-10 py-4 bg-[#FF6B35] rounded-full font-bold hover:scale-105 transition-transform">
          Start the Conversation
        </a>
        <button
          onClick={() => onNavigate('roadmap')}
          className="px-10 py-4 border-2 border-[#4ECDC4] text-[#4ECDC4] rounded-full font-bold hover:bg-[#4ECDC4] hover:text-[#0A0E27] transition-all"
        >
          View Full Deep Dive
        </button>
      </div>
    </section>
  </div>
);

const RoadmapView = ({ onNavigate }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-[#FAFAF8] min-h-screen">
    {/* Nav Header */}
    <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#E8383A] text-white rounded flex items-center justify-center font-bold">RC</div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">RevenueCat Strategy</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Proposal: Scaling the Doc Ecosystem</span>
        </div>
      </div>
      <button
        onClick={() => onNavigate('landing')}
        className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2"
      >
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Pitch
      </button>
    </header>

    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-16">
        <span className="text-[#E8383A] font-bold tracking-widest text-xs uppercase mb-3 block">Discovery & Hypotheses</span>
        <h1 className="text-5xl font-extrabold text-[#0A0E27] mb-6 tracking-tight">A Lifecycle-Centric Framework</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
          The current "Dashboard vs SDK" split can create cognitive load during initial setup. I suspect we could reduce friction by aligning the navigation to the developer's journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <StrategyCard
          label="Stage 1"
          title="Foundation"
          description="Unified quickstarts combining Dashboard and SDK setup into a single flow. No more jumping between tabs to get the first purchase working."
        />
        <StrategyCard
          label="Stage 2"
          title="Conversion"
          description="Grouping Paywalls, Offerings, and Web Billing as core store-building tools. Making revenue generation the center of the experience."
        />
        <StrategyCard
          label="Stage 3"
          title="Optimization"
          description="Surfacing growth features (Experiments, Targeting) as the implementation matures. Helping developers find value after the launch."
        />
        <StrategyCard
          label="Stage 4"
          title="Operations"
          description="A purpose-built home for troubleshooting, customer center management, and observability at scale."
        />
      </div>

      {/* GitHub Section */}
      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl mb-20">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <div className="badge inline-block px-3 py-1 bg-gray-100 rounded text-[10px] font-bold uppercase mb-6 text-gray-500 tracking-wider">Engineering Alignment</div>
            <h2 className="text-3xl font-bold mb-6">The "Evergreen" Maintenance Loop</h2>
            <p className="text-gray-600 mb-8">Accuracy is about process, not just prose. I'd focus on building the system that prevents docs from falling out of date.</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold">PR Integration</h4>
                  <p className="text-sm text-gray-500">Making doc-impact a visible requirement for every engineering commit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                  <RefreshCcw className="w-5 h-5 text-[#4ECDC4]" />
                </div>
                <div>
                  <h4 className="font-bold">Sync Loops</h4>
                  <p className="text-sm text-gray-500">Pulling live code from sample apps to ensure 100% syntax accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold">AI Readiness</h4>
                  <p className="text-sm text-gray-500">Implementing llms.txt to provide high-token-density context for AI-native builders.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0A0E27] p-8 font-mono text-sm text-gray-400 overflow-hidden relative">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-[10px] ml-4 opacity-50">docs-drift-check.yml</span>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400">name: <span className="text-white">Verify Doc Status</span></div>
              <div className="text-cyan-400">on: <span className="text-white">pull_request</span></div>
              <div className="mt-4 text-cyan-400">jobs:</div>
              <div className="pl-4 text-cyan-400">audit:</div>
              <div className="pl-8 text-cyan-400">steps:</div>
              <div className="pl-12 text-gray-500">- name: <span className="text-white">Analyze SDK change</span></div>
              <div className="pl-12 text-gray-500">- name: <span className="text-white">Verify /docs commit</span></div>
              <div className="pl-12 text-gray-500">- name: <span className="text-white">Check Codeowners</span></div>
              <div className="mt-6 text-orange-400"># Action: Fails build if SDK changed without docs</div>
            </div>
            {/* Visual Flair */}
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Root Component ---

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session storage on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('rc_pitch_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#F7F7F2]">
      {currentView === 'landing' ? (
        <LandingView onNavigate={setCurrentView} />
      ) : (
        <RoadmapView onNavigate={setCurrentView} />
      )}

      {/* Global Style overrides for Fonts */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=DM+Sans:wght@400;500;700&display=swap');
        h1, h2, h3, .font-serif { font-family: 'Crimson Pro', serif; }
        body { font-family: 'DM Sans', sans-serif; }
      `}} />
    </div>
  );
}