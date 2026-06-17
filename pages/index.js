import React, { useState } from 'react';
import Head from 'next/head';
import { 
  ArrowRight, 
  ChevronRight, 
  Compass, 
  TrendingUp, 
  Cpu, 
  SearchCode, 
  FileText, 
  Users, 
  HelpCircle, 
  Play, 
  X, 
  Mail, 
  Building2, 
  Globe, 
  FilePieChart,
  UserCheck,
  Send,
  MessageSquare,
  Clock,
  Heart
} from 'lucide-react';

const SERVICES = {
  management: {
    title: "Management & Development Consulting",
    description: "We work with global development partners, corporate foundations, and NGOs to evaluate, design, and manage programs that foster inclusive growth.",
    icon: Compass,
    features: [
      { name: "Market Assessment", desc: "Rigorous feasibility studies, demand-supply mapping, and trade lane assessments to guide B2B strategy." },
      { name: "Value Chain Assessment", desc: "Structuring sector-wide assessments to identify market linkages and opportunities for smallholder farmers/SMEs." },
      { name: "Policy Advocacy", desc: "Evidence-based research and alignment workshops to advocate for regulatory improvements in emerging markets." },
      { name: "Technical Assistance", desc: "Monitoring, Evaluation, and Learning (MEL) systems configured to measure impact indicators at scale." },
      { name: "Strategy Implementation", desc: "Providing project management offices (PMO) and implementation support for systemic growth initiatives." }
    ]
  },
  ecosystem: {
    title: "Ecosystem & Investments",
    description: "We catalyze the entrepreneurship landscape by scaling early-stage companies and mobilizing private capital into high-impact enterprises.",
    icon: TrendingUp,
    features: [
      { name: "Accelerator & Incubator Management", desc: "Configuring end-to-end acceleration pipelines, cohort selection, and mentor-matching frameworks." },
      { name: "Investment Advisory", desc: "Structuring buy-side and sell-side transactions, due diligence, and capital raise portfolios." },
      { name: "Blended Finance & Catalytic Funding", desc: "Mobilizing philanthropic and commercial capital to configure high-leverage impact funding windows." },
      { name: "Advocacy & Systems Development", desc: "Conducting thought-leadership forums and investment climate assessments to foster market readiness." }
    ]
  },
  market: {
    title: "Market Entry Advisory",
    description: "We assist international corporate brands, investors, and trade agencies in establishing and scaling operations in Bangladesh.",
    icon: Globe,
    features: [
      { name: "Market Entry Strategy", desc: "Regulatory mapping, tax structuring advice, and risk audits for a seamless launch sequence." },
      { name: "Local Partner Matching", desc: "Connecting foreign entrants with high-trust local distributors, joint venture candidates, and trade bureaus." },
      { name: "Operational Setup Support", desc: "Providing end-to-end project management support during corporate formation and launch phases." }
    ]
  },
  digital: {
    title: "Digital Transformation",
    description: "We bridge data science and international development to create tools that optimize field operations and institutional intelligence.",
    icon: Cpu,
    features: [
      { name: "Technology for Social Good", desc: "Developing digital platforms, field survey apps, and supply chain tracking utilities for development programs." },
      { name: "Advanced Analytics Engines", desc: "Configuring predictive dashboards, macro-trend tracking modules, and predictive economic dashboards." }
    ]
  }
};

const CLIENTS = [
  { name: "ADB", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_adb-logo1.png" },
  { name: "IFC", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_ifc-logo1.png" },
  { name: "Swiss Embassy", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/swiss-embassy-logo.png" },
  { name: "Netherlands Embassy", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_ekn-logo1.png" },
  { name: "Meta", img: "https://lightcastlepartners.com/wp-content/uploads/2022/05/meta-logo.png" },
  { name: "UN Women", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_unwomen-logo1.png" },
  { name: "Asia Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2023/04/logo-asia-found.png" },
  { name: "Gates Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_gatesfoundation-logo1-1.png" },
  { name: "H&M Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2023/04/hm_foundation.png" },
  { name: "ILO", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/ilo_logo_png.png" },
  { name: "HSBC", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_hsbc1-1.png" },
  { name: "WFP", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/wfp.png" }
];

const INSIGHTS = [
  {
    title: "Advancing Mango Production & Forward Marketing in Bangladesh",
    category: "industry",
    image: "https://lightcastlepartners.com/wp-content/uploads/2025/12/Marketing-Report-2025-Q3-8.webp",
    readTime: "8 Mins",
    desc: "Examines structural value chain bottlenecks, export quality frameworks, and market opportunities."
  },
  {
    title: "US/Israel–Iran Conflict: Implications for Bangladesh’s Logistics Across Key Sectors",
    category: "economy",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/03/Untitled-design-13-4.png",
    readTime: "4 Mins",
    desc: "A macro evaluation of the geopolitical changes in global shipping corridors and national import impact."
  },
  {
    title: "Childcare as Social Protection: An Avenue of Unlocking Labor Force Participation",
    category: "industry",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design-6-1.jpg",
    readTime: "6 Mins",
    desc: "Fostering inclusive growth by building public-private structures for female labor force integration."
  },
  {
    title: "A Billion Dollars Over a Decade: How Startup Capital Took Shape in Bangladesh",
    category: "entrepreneurship",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design.png",
    readTime: "5 Mins",
    desc: "An exhaustive historical review of capital mobilization, startup accelerations, and venture funding."
  },
  {
    title: "Next-Gen Growth: Reimagining Bangladesh’s Economic Future",
    category: "economy",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design-3.png",
    readTime: "8 Mins",
    desc: "Re-evaluating reform strategies, industrial diversification targets, and systemic capital allocation."
  }
];

const VIDEOS = [
  {
    id: "GasrQswo3-o",
    title: "Meet Faiza Tahiya | Life at LightCastle",
    desc: "A Business Analyst shares her personal journey, professional growth, and day-to-day life inside Bangladesh's top consulting team.",
    time: "3 Mins"
  },
  {
    id: "yMYRBuJXBGc",
    title: "Startup Funding Landscape | Interactive Dashboard",
    desc: "A structural preview of LightCastle's interactive dashboard built to map venture capital and impact funding data.",
    time: "1 Min"
  },
  {
    id: "GzaPyxdH3r8",
    title: "Voices of the Changemakers | Sustainable RMG Energy Transitions",
    desc: "An in-depth dialogue on circular RMG production models, renewable energy adoption, and structural industry futures.",
    time: "4 Mins"
  },
  {
    id: "dyny84LBljo",
    title: "EU Sustainability Regulations & RMG Trade Preparedness",
    desc: "Analyzing the impact of global trade directives, digital product passport requirements, and ESG compliance.",
    time: "2 Mins"
  }
];

const LATEST_NEWS = [
  {
    title: "Zahedul Amin Moderates Strategic Panel at Bangladesh Denim Expo 2026",
    date: "June 15, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-1-1.png",
    link: "https://lightcastlepartners.com/news/denim-expo-2026-zahedul-amin-diversification-panel/"
  },
  {
    title: "SheSTEM Action Dialogue: Turning Female STEM Talent into Leadership",
    date: "June 14, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-2.png",
    link: "https://lightcastlepartners.com/news/gender-equity-advancing-women-stem-leadership/"
  },
  {
    title: "Celebrating Industry Exposure for Female STEM Students with CUET & BSRM",
    date: "June 11, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-1.png",
    link: "https://lightcastlepartners.com/news/stem-career-readiness-through-industry-exposure/"
  },
  {
    title: "LightCastle Partners Joins the Larive Business Forum 2026 in the Netherlands",
    date: "June 10, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/JOURNAL-2.jpg",
    link: "https://lightcastlepartners.com/news/lightcastle-partners-larive-business-forum-2026-netherlands-trade-investment/"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('management');
  const [activeCategory, setActiveCategory] = useState('all');
  const [videoModal, setVideoModal] = useState({ isOpen: false, id: '', title: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Multi-step Collaboration Form State
  const [plannerStep, setPlannerStep] = useState(0);
  const [plannerData, setPlannerData] = useState({
    sector: '',
    goal: '',
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmittingPlanner, setIsSubmittingPlanner] = useState(false);
  const [isPlannerSuccess, setIsPlannerSuccess] = useState(false);

  const handleSectorSelect = (sector) => {
    setPlannerData(prev => ({ ...prev, sector }));
    setPlannerStep(1);
  };

  const handleGoalSelect = (goal) => {
    setPlannerData(prev => ({ ...prev, goal }));
    setPlannerStep(2);
  };

  const handlePlannerSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingPlanner(true);
    setTimeout(() => {
      setIsSubmittingPlanner(false);
      setIsPlannerSuccess(true);
    }, 1200);
  };

  const resetPlanner = () => {
    setPlannerData({
      sector: '',
      goal: '',
      name: '',
      email: '',
      company: '',
      message: ''
    });
    setPlannerStep(0);
    setIsPlannerSuccess(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const filteredInsights = activeCategory === 'all' 
    ? INSIGHTS 
    : INSIGHTS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-red selection:text-slate-100">
      <Head>
        <title>LightCastle Partners | Upgraded Corporate Portal</title>
        <meta name="description" content="An upgraded B2B consulting portal for LightCastle Partners. Dynamic service models, custom insights filter, and interactive project onboarding planner." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Lightbox Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full relative shadow-2xl animate-scale-up">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <span className="text-xs font-mono font-bold text-brand-red tracking-widest uppercase flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                Now Streaming
              </span>
              <h4 className="text-xs font-bold text-slate-300 line-clamp-1 max-w-lg pr-4">{videoModal.title}</h4>
              <button 
                onClick={() => setVideoModal({ isOpen: false, id: '', title: '' })}
                className="text-slate-500 hover:text-slate-200 transition-colors p-1.5 hover:bg-slate-850 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe 
                src={`https://www.youtube.com/embed/${videoModal.id}?autoplay=1`}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
                title="Video Stream"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-35 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/60 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="font-editorial text-xl md:text-2xl font-black text-slate-100 tracking-tight">
              LightCastle
            </span>
            <span className="font-sans text-xs uppercase tracking-widest font-extrabold text-brand-red border border-brand-red/30 px-1.5 py-0.5 rounded">
              Partners
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider text-slate-400">
            <a href="#about" className="hover:text-slate-100 transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-slate-100 transition-colors">SERVICES</a>
            <a href="#clients" className="hover:text-slate-100 transition-colors">CLIENTS</a>
            <a href="#insights" className="hover:text-slate-100 transition-colors">INSIGHTS</a>
            <a href="#news" className="hover:text-slate-100 transition-colors">NEWS</a>
            <a href="#planner" className="hover:text-slate-100 transition-colors">PARTNER WITH US</a>
          </nav>

          <div>
            <a 
              href="#planner" 
              className="bg-brand-red hover:bg-red-700 text-slate-100 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-lg shadow-brand-red/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-20 px-6 md:px-12 overflow-hidden border-b border-slate-900/60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        <div className="absolute top-20 right-0 h-96 w-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-brand-red"></span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Data-Driven Advisory</span>
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-100 tracking-tight">
              At LightCastle, we take a systemic and data-driven approach to create opportunities for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">growth and impact.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-6 leading-relaxed max-w-xl">
              LightCastle Partners — an international management consulting firm — creates systemic and data-driven opportunities for growth and impact in emerging markets. By collaborating with development partners and leveraging the power of the private sector, we strive to boost economies, inspire businesses, and change lives at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="flex items-center gap-2 text-xs font-bold bg-slate-900 border border-slate-800 hover:border-slate-700 py-3 px-6 rounded-xl hover:bg-slate-850 transition-all cursor-pointer">
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 text-brand-red" />
              </a>
              <a href="#planner" className="flex items-center gap-2 text-xs font-bold bg-brand-red/10 border border-brand-red/20 text-brand-red hover:bg-brand-red/20 py-3 px-6 rounded-xl transition-all cursor-pointer">
                <span>Configure Project</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-slate-900/40 border border-slate-850 hover:border-slate-800/80 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Scale</span>
                <Users className="h-4 w-4 text-brand-red" />
              </div>
              <h3 className="text-3xl font-black text-slate-100 tracking-tight">150+</h3>
              <p className="text-xs text-slate-400 mt-1">Clients served across public, private, and development domains.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-850 hover:border-slate-800/80 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Reach</span>
                <FilePieChart className="h-4 w-4 text-amber-500" />
              </div>
              <h3 className="text-3xl font-black text-slate-100 tracking-tight">30+</h3>
              <p className="text-xs text-slate-400 mt-1">Sectors impacted with deep market intelligence and assessment.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-850 hover:border-slate-800/80 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Funding</span>
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-black text-slate-100 tracking-tight">U$150Mn+</h3>
              <p className="text-xs text-slate-400 mt-1">Impact investment capital mobilized to scale high-potential ventures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix Section */}
      <section id="services" className="py-24 px-6 md:px-12 border-b border-slate-900/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Capabilities</span>
            <h2 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 mt-1 tracking-tight">
              Systemic & Targeted Services
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-md">
              We leverage data intelligence, consulting frameworks, and local insights to solve structural business bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(SERVICES).map((key) => {
                const s = SERVICES[key];
                const Icon = s.icon;
                const isActive = activeTab === key;
                return (
                  <button 
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none ${
                      isActive 
                        ? 'bg-slate-900 border-slate-800 text-slate-100 shadow-md shadow-brand-red/5' 
                        : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-brand-red' : 'text-slate-600'}`} />
                      <span className="text-xs font-bold tracking-wide uppercase">{s.title.split(' & ')[0]}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-brand-red' : 'text-slate-700'}`} />
                  </button>
                );
              })}
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-8 bg-slate-900/30 border border-slate-850 p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg font-black text-slate-100 mb-2 font-editorial">
                {SERVICES[activeTab].title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {SERVICES[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES[activeTab].features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-900/60 border border-slate-850 p-5 rounded-xl hover:border-slate-800 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grayscale to Color Clients Grid */}
      <section id="clients" className="py-20 px-6 md:px-12 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Collaborations</span>
            <h2 className="font-editorial text-2xl md:text-3xl font-black text-slate-100 mt-1 tracking-tight">
              Featured Corporate & Development Clients
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              We consult and partner with international institutions, corporate conglomerates, and bilateral agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENTS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/5 hover:border-brand-red/30 rounded-xl p-4 flex items-center justify-center h-20 transition-all duration-300 group cursor-default"
              >
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="max-h-10 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership (Insights Grid) */}
      <section id="insights" className="py-24 px-6 md:px-12 border-b border-slate-900/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Thought Leadership</span>
              <h2 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 mt-1 tracking-tight">
                Featured Insights & Analytics
              </h2>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase tracking-wider">
              {['all', 'economy', 'industry', 'entrepreneurship'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-brand-red border-brand-red text-slate-100' 
                      : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 bg-slate-900/40'
                  }`}
                >
                  {cat === 'industry' ? 'Industry Insights' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/40 border border-slate-850 hover:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden relative bg-slate-950">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                    />
                    <span className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800/80 text-[8px] font-mono font-bold text-brand-red uppercase px-2 py-0.5 rounded tracking-wider">
                      {item.category === 'industry' ? 'Industry Insights' : item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 mb-2">
                      <Clock className="h-3 w-3" />
                      <span>{item.readTime} Read</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-200 font-editorial mb-3 leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <a 
                    href="#planner" 
                    className="text-[10px] font-mono font-bold tracking-wider text-slate-400 group-hover:text-brand-red transition-colors flex items-center gap-1"
                  >
                    <span>Read Report</span>
                    <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Embedded Videos Showcase */}
      <section className="py-24 px-6 md:px-12 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Videos</span>
            <h2 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 mt-1 tracking-tight">
              Featured Case Studies & Diaries
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Watch interviews with impact leaders, changemakers, and analysis updates from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video) => (
              <div 
                key={video.id}
                onClick={() => setVideoModal({ isOpen: true, id: video.id, title: video.title })}
                className="bg-slate-900/40 border border-slate-850 hover:border-slate-800 rounded-2xl overflow-hidden cursor-pointer group transition-all"
              >
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  {/* YouTube static thumbnail mockup */}
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-102 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                    <div className="bg-brand-red/90 group-hover:bg-brand-red border border-brand-red/50 text-slate-100 p-3 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 bg-slate-950/80 border border-slate-800/80 text-[8px] font-mono font-bold text-slate-300 px-1.5 py-0.5 rounded">
                    {video.time}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-bold text-slate-200 group-hover:text-brand-red transition-colors line-clamp-1 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates at LightCastle */}
      <section id="news" className="py-24 px-6 md:px-12 border-b border-slate-900/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold">Press Room</span>
            <h2 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 mt-1 tracking-tight">
              Latest at LightCastle
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Press releases, events, and dialogue panels featuring our research leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LATEST_NEWS.map((item, idx) => (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={idx}
                className="bg-slate-900/40 border border-slate-850 hover:border-slate-800 p-4 rounded-xl flex gap-4 transition-all group items-center"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-500 mb-1">{item.date}</div>
                  <h3 className="text-xs font-bold text-slate-200 group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Planner Funnel */}
      <section id="planner" className="py-24 px-6 md:px-12 border-b border-slate-900/60">
        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-850 rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Stepper Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  plannerStep >= s ? 'bg-brand-red' : 'bg-slate-850'
                }`}
              ></div>
            ))}
          </div>

          {plannerStep === 0 && (
            <div className="animate-fade-in">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold mb-1 block">Project Intake • Step 1</span>
              <h3 className="font-editorial text-2xl font-black text-slate-100 tracking-tight mb-2">
                What is your primary sector?
              </h3>
              <p className="text-xs text-slate-400 mb-6">Select the pillar that best matches your organization type to segment your project.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'development', label: 'Development Sector', desc: 'Embassies, NGOs, Multilateral partners' },
                  { key: 'corporate', label: 'Corporate & Private', desc: 'Conglomerates, MNCs, Local enterprises' },
                  { key: 'startup', label: 'Startup / SME Ecosystem', desc: 'Early stage startups, founders' },
                  { key: 'investment', label: 'Investment Funds', desc: 'Venture Capital, Private Equity, Impact Funds' }
                ].map((s) => (
                  <button 
                    key={s.key}
                    onClick={() => handleSectorSelect(s.key)}
                    className="p-5 text-left border border-slate-850 hover:border-brand-red/40 bg-slate-950/40 rounded-2xl hover:bg-slate-900/50 cursor-pointer transition-all focus:outline-none flex flex-col justify-between h-28"
                  >
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{s.label}</span>
                    <span className="text-[10px] text-slate-500 leading-snug">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {plannerStep === 1 && (
            <div className="animate-fade-in">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold mb-1 block">Project Intake • Step 2</span>
              <h3 className="font-editorial text-2xl font-black text-slate-100 tracking-tight mb-2">
                What challenge are you trying to solve?
              </h3>
              <p className="text-xs text-slate-400 mb-6">Select the capability scope needed to configure your deliverables.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'research', label: 'Research & Strategy', desc: 'Market entry, feasibility assessment, sector mapping' },
                  { key: 'program', label: 'Program Implementation', desc: 'Technical assistance, MEL systems, accelerators' },
                  { key: 'digital', label: 'Data & Analytics Engine', desc: 'Custom database engines, predictive analytics, tech apps' },
                  { key: 'capital', label: 'Capital Raising', desc: 'Blended finance structuring, transactional advisory' }
                ].map((g) => (
                  <button 
                    key={g.key}
                    onClick={() => handleGoalSelect(g.key)}
                    className="p-5 text-left border border-slate-850 hover:border-brand-red/40 bg-slate-950/40 rounded-2xl hover:bg-slate-900/50 cursor-pointer transition-all focus:outline-none flex flex-col justify-between h-28"
                  >
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{g.label}</span>
                    <span className="text-[10px] text-slate-500 leading-snug">{g.desc}</span>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setPlannerStep(0)}
                className="mt-6 text-[10px] font-mono font-bold uppercase text-slate-500 hover:text-slate-300 transition-colors"
              >
                Go Back
              </button>
            </div>
          )}

          {plannerStep === 2 && (
            <div className="animate-fade-in">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-red font-bold mb-1 block">Project Intake • Step 3</span>
              <h3 className="font-editorial text-2xl font-black text-slate-100 tracking-tight mb-2">
                Complete Project Scope
              </h3>
              <p className="text-xs text-slate-400 mb-6">Leave your details and a brief project overview. Our practice leads will coordinate with you.</p>

              {isPlannerSuccess ? (
                <div className="bg-emerald-950/30 border border-emerald-900/40 p-6 rounded-2xl text-center flex flex-col items-center gap-3">
                  <UserCheck className="h-10 w-10 text-emerald-400" />
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">PROJECT PROFILE INITIALIZED</h4>
                  <p className="text-xs text-slate-400 max-w-sm">Thank you. An analyst will review your sector configurations and coordinate a briefing meeting within 24 hours.</p>
                  <button 
                    onClick={resetPlanner}
                    className="mt-4 text-xs font-bold bg-slate-800 border border-slate-700 py-2 px-4 rounded-lg hover:bg-slate-750 transition-all cursor-pointer"
                  >
                    Reset intake funnel
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePlannerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Contact Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        value={plannerData.name}
                        onChange={(e) => setPlannerData(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-red outline-none text-slate-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Business Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="name@organization.com"
                        value={plannerData.email}
                        onChange={(e) => setPlannerData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-red outline-none text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Company/Organization</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Organization Name"
                      value={plannerData.company}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, company: e.target.value }))}
                      className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-red outline-none text-slate-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Project Brief / Scope Details</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Detail your challenges, goals, or timeframes..."
                      value={plannerData.message}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, message: e.target.value }))}
                      className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-red outline-none text-slate-200 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-850/60">
                    <button 
                      type="button"
                      onClick={() => setPlannerStep(1)}
                      className="text-[10px] font-mono font-bold uppercase text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                    >
                      Go Back
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmittingPlanner}
                      className="bg-brand-red hover:bg-red-700 text-slate-100 px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmittingPlanner ? 'Configuring Profile...' : 'Submit Profile'}
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="border-t border-slate-900/60 bg-slate-950/40 pt-16 pb-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-1.5">
              <span className="font-editorial text-2xl font-black text-slate-100 tracking-tight">
                LightCastle
              </span>
              <span className="font-sans text-xs uppercase tracking-widest font-extrabold text-brand-red border border-brand-red/30 px-1.5 py-0.5 rounded">
                Partners
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We take a systemic and data-driven approach to create opportunities for growth and impact in emerging markets.
            </p>
            <div className="flex gap-3 mt-2">
              {/* Play Store App Mockup */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.lightcastle.light_castle_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img 
                  src="https://lightcastlepartners.com/wp-content/uploads/2022/08/google-play-badge.svg" 
                  alt="Play Store App"
                  className="h-9" 
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-xs">
            <div className="flex flex-col gap-3">
              <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Organization</span>
              <a href="#about" className="text-slate-400 hover:text-slate-200 transition-colors">About Us</a>
              <a href="#clients" className="text-slate-400 hover:text-slate-200 transition-colors">Clients</a>
              <a href="#planner" className="text-slate-400 hover:text-slate-200 transition-colors">Collaborate</a>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Capabilities</span>
              <a href="#services" className="text-slate-400 hover:text-slate-200 transition-colors">Consulting</a>
              <a href="#services" className="text-slate-400 hover:text-slate-200 transition-colors">Ecosystems</a>
              <a href="#services" className="text-slate-400 hover:text-slate-200 transition-colors">Digital Advisory</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Resources</span>
              <a href="#insights" className="text-slate-400 hover:text-slate-200 transition-colors">Featured Insights</a>
              <a href="#news" className="text-slate-400 hover:text-slate-200 transition-colors">Latest News</a>
              <a href="#about" className="text-slate-400 hover:text-slate-200 transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px] mb-3 block">Subscribe</span>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
              Get the latest micro-economic analytics and investment briefs in your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="text-[10px] text-emerald-400 bg-emerald-950/20 border border-emerald-900/20 p-2.5 rounded-lg text-center font-bold">
                Email registered for updates!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  required
                  type="email" 
                  placeholder="name@organization.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-brand-red outline-none text-slate-200 flex-1"
                />
                <button 
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-brand-red p-2.5 rounded-lg cursor-pointer transition-all active:scale-95"
                >
                  <Send className="h-4.5 w-4.5 fill-current" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <span>© 2026 LIGHTCASTLE PARTNERS. ALL RIGHTS RESERVED.</span>
          <span className="text-brand-red/60 flex items-center gap-1.5 text-[9px]">
            <Heart className="h-3 w-3 fill-current text-brand-red" />
            Designed for Systemic Impact
          </span>
        </div>
      </footer>
    </div>
  );
}
