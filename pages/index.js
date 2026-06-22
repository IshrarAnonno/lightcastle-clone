import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SERVICES, CLIENTS, INSIGHTS, VIDEOS, LATEST_NEWS } from '../data/brandData';
import { 
  ArrowRight, 
  ChevronRight, 
  Compass, 
  TrendingUp, 
  Cpu, 
  Globe, 
  Users, 
  FilePieChart, 
  Play, 
  X,
  Send,
  Heart
} from 'lucide-react';

const iconMap = {
  Compass: Compass,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Cpu: Cpu
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('management');
  const [videoModal, setVideoModal] = useState({ isOpen: false, id: '', title: '' });

  // Get first 3 insights to display on the Home page preview
  const homeInsights = INSIGHTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-blue selection:text-white">
      <Head>
        <title>LightCastle Partners | Upgraded Corporate Portal</title>
        <meta name="description" content="An upgraded B2B consulting portal for LightCastle Partners. Dynamic service models, custom insights filter, and interactive project onboarding planner." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Lightbox Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden max-w-4xl w-full relative shadow-2xl animate-scale-up">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="text-xs font-mono font-bold text-brand-orange tracking-widest uppercase flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
                Now Streaming
              </span>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-1 pr-4">{videoModal.title}</h4>
              <button 
                onClick={() => setVideoModal({ isOpen: false, id: '', title: '' })}
                className="text-slate-500 hover:text-slate-800 transition-colors p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer"
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

      <Header />

      {/* Hero Section */}
      <section id="about" className="relative py-20 px-6 md:px-12 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,115,187,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,115,187,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80"></div>
        <div className="absolute top-20 right-0 h-96 w-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Data-Driven Advisory</span>
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 tracking-tight">
              At LightCastle, we take a systemic and data-driven approach to create opportunities for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">growth and impact.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-6 leading-relaxed max-w-xl">
              We are an international management consulting firm operating at the intersection of private enterprises, venture ecosystems, and global development. We simplify emerging market complexity to build competitive industries, mobilize capital, and scale impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="flex items-center gap-2 text-xs font-bold bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-blue/10">
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-sm">
                <span>Configure Project</span>
                <ChevronRight className="h-4 w-4 text-brand-orange" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-blue/35 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Scale</span>
                <Users className="h-4 w-4 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">150+</h3>
              <p className="text-xs text-slate-500 mt-1">Clients served across public, private, and development domains.</p>
            </div>

            <div className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-orange/35 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Reach</span>
                <FilePieChart className="h-4 w-4 text-brand-orange" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">30+</h3>
              <p className="text-xs text-slate-500 mt-1">Sectors impacted with deep market intelligence and assessment.</p>
            </div>

            <div className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/35 p-6 rounded-2xl transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Funding</span>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">U$150Mn+</h3>
              <p className="text-xs text-slate-500 mt-1">Impact investment capital mobilized to scale high-potential ventures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix Section */}
      <section id="services" className="py-24 px-6 md:px-12 border-b border-slate-200/80 bg-slate-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Capabilities</span>
              <h2 className="font-editorial text-2xl md:text-4xl font-semibold text-slate-900 mt-1 tracking-tight">
                Systemic &amp; Targeted Services
              </h2>
            </div>
            <Link href="/services" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
              <span>View All Services Directory</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(SERVICES).map((key) => {
                const s = SERVICES[key];
                const Icon = iconMap[s.iconName] || Compass;
                const isActive = activeTab === key;
                return (
                  <button 
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none ${
                      isActive 
                        ? 'bg-white border-brand-blue/30 text-brand-blue shadow-md shadow-brand-blue/5' 
                        : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-brand-blue' : 'text-slate-400'}`} />
                      <span className="text-xs font-bold tracking-wide uppercase">{s.title.split(' & ')[0]}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-brand-blue' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-editorial">
                    {SERVICES[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {SERVICES[activeTab].description}
                  </p>
                </div>
                <Link 
                  href={`/services/${SERVICES[activeTab].id}`} 
                  className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Methodology
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES[activeTab].features.slice(0, 4).map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-50 border border-slate-100 p-5 rounded-xl hover:border-brand-orange/40 hover:shadow-sm hover:shadow-brand-orange/2 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
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
      <section id="clients" className="py-20 px-6 md:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Collaborations</span>
            <h2 className="font-editorial text-2xl md:text-3xl font-semibold text-slate-900 mt-1 tracking-tight">
              Featured Corporate &amp; Development Clients
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We consult and partner with international institutions, corporate conglomerates, and bilateral agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENTS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-brand-blue/40 hover:shadow-sm rounded-xl p-4 flex items-center justify-center h-20 transition-all duration-300 group cursor-default"
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
      <section id="insights" className="py-24 px-6 md:px-12 border-b border-slate-200/80 bg-slate-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Thought Leadership</span>
              <h2 className="font-editorial text-2xl md:text-4xl font-semibold text-slate-900 mt-1 tracking-tight">
                Featured Insights &amp; Analytics
              </h2>
            </div>
            <Link 
              href="/insights" 
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-brand-blue/10"
            >
              Enter Thought Leadership Portal
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeInsights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-brand-blue/45 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all hover:shadow-lg hover:shadow-brand-blue/5"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 border border-slate-200 text-[8px] font-mono font-bold text-brand-orange uppercase px-2 py-0.5 rounded tracking-wider shadow-sm">
                      {item.category === 'industry' ? 'Industry Insights' : item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 font-editorial mb-3 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link 
                    href={`/insights/${item.slug}`} 
                    className="text-[10px] font-mono font-bold tracking-wider text-slate-500 group-hover:text-brand-blue transition-colors flex items-center gap-1"
                  >
                    <span>Read Full Brief</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Embedded Videos Showcase */}
      <section className="py-24 px-6 md:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Videos</span>
            <h2 className="font-editorial text-2xl md:text-4xl font-semibold text-slate-900 mt-1 tracking-tight">
              Featured Case Studies &amp; Diaries
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Watch interviews with impact leaders, changemakers, and analysis updates from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video) => (
              <div 
                key={video.id}
                onClick={() => setVideoModal({ isOpen: true, id: video.id, title: video.title })}
                className="bg-white border border-slate-200/80 hover:border-brand-orange/45 rounded-2xl overflow-hidden cursor-pointer group transition-all hover:shadow-lg hover:shadow-brand-orange/5"
              >
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-102 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="bg-brand-orange hover:bg-brand-orange/90 text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 bg-black/75 text-[8px] font-mono font-bold text-white px-1.5 py-0.5 rounded">
                    {video.time}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates at LightCastle */}
      <section id="news" className="py-24 px-6 md:px-12 border-b border-slate-200/80 bg-slate-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Press Room</span>
            <h2 className="font-editorial text-2xl md:text-4xl font-semibold text-slate-900 mt-1 tracking-tight">
              Latest at LightCastle
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
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
                className="bg-white border border-slate-200/80 hover:border-brand-blue/45 p-4 rounded-xl flex gap-4 transition-all group items-center hover:shadow-lg hover:shadow-brand-blue/5"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-500 mb-1">{item.date}</div>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug font-editorial">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Planner Funnel CTA */}
      <section className="py-24 px-6 md:px-12 border-b border-slate-200/80 text-center">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 h-40 w-40 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold mb-2 block">Enterprise Collaboration</span>
          <h2 className="font-editorial text-2xl md:text-4xl font-semibold text-slate-900 mt-1 tracking-tight leading-tight">
            Structure your project advisory scope.
          </h2>
          <p className="text-xs text-slate-600 mt-4 max-w-md mx-auto leading-relaxed">
            Initialize an interactive onboarding planner profile. Choose your practice areas and goals to generate tailored deliverables.
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-lg shadow-brand-blue/10 inline-flex items-center gap-2"
            >
              <span>Launch Intake Funnel Planner</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
