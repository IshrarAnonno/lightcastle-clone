import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SERVICES } from '../../data/brandData';
import { Compass, TrendingUp, Globe, Cpu, ArrowRight } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Cpu: Cpu
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-slate-100">
      <Head>
        <title>Our Services | LightCastle Partners</title>
        <meta name="description" content="Explore LightCastle Partners consulting capabilities. Management and development consulting, ecosystem and investment advisory, market entry, and digital transformation." />
      </Head>

      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 md:px-12 border-b border-slate-900/60 overflow-hidden bg-slate-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001224_1px,transparent_1px),linear-gradient(to_bottom,#001224_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Advisory &amp; Execution</span>
          <h1 className="font-editorial text-3xl md:text-5xl font-black text-slate-100 mt-2 tracking-tight leading-tight">
            Comprehensive practices to coordinate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">systemic growth.</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
            We operate across four major corporate practices, combining primary field research with transaction execution capabilities. Click on any sector to view specific methodologies, PMO setups, and impact dashboards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.keys(SERVICES).map((key) => {
            const s = SERVICES[key];
            const Icon = iconMap[s.iconName] || Compass;
            return (
              <div 
                key={key} 
                className="bg-slate-900/30 border border-slate-850 hover:border-slate-800 p-8 rounded-3xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:bg-brand-blue/20 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-sm font-black uppercase tracking-wider text-slate-200">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {s.description}
                  </p>
                  
                  <div className="border-t border-slate-850/60 pt-6 mb-8">
                    <h3 className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-3 tracking-wider">Practice Focus</h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {s.features.slice(0, 3).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0"></span>
                          <span>{f.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link 
                    href={`/services/${s.id}`} 
                    className="flex items-center justify-between text-xs font-bold bg-slate-950/60 border border-slate-800 hover:border-brand-blue/30 text-slate-300 hover:text-brand-blue py-3.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    <span>View Methodology &amp; Case Studies</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
