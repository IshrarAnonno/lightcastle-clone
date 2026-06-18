import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SERVICES } from '../../data/brandData';
import { Compass, TrendingUp, Globe, Cpu, ChevronRight, CheckCircle2, LayoutDashboard } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Cpu: Cpu
};

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Simple hydration safety check
  if (!router.isReady) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-400 flex items-center justify-center font-mono">
        Hydrating Route Configurations...
      </div>
    );
  }

  const s = SERVICES[id];

  if (!s) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold font-mono">Service Practice Not Found</h2>
        <Link href="/services" className="text-xs text-brand-blue hover:underline">
          Return to services directory
        </Link>
      </div>
    );
  }

  const Icon = iconMap[s.iconName] || Compass;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-slate-100">
      <Head>
        <title>{s.title} | LightCastle Partners</title>
        <meta name="description" content={s.description} />
      </Head>

      <Header />

      {/* Hero Block */}
      <section className="relative py-20 px-6 md:px-12 border-b border-slate-900/60 overflow-hidden bg-slate-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001224_1px,transparent_1px),linear-gradient(to_bottom,#001224_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/services" className="text-[9px] font-mono tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 mb-4">
            <span>&lt; Back to Services</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue shrink-0 w-max">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Advisory Pillar</span>
              <h1 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 mt-1 tracking-tight">
                {s.title}
              </h1>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-3xl">
            {s.extendedContent.tagline}
          </p>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-950 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Narrative & Methodology */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-lg font-black font-editorial text-slate-200 mb-3">Service Scope Overview</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {s.extendedContent.longDesc}
              </p>
            </div>

            <div className="border-t border-slate-850/60 pt-8">
              <h3 className="text-sm font-bold tracking-wider uppercase text-slate-300 mb-6 font-mono text-[10px]">Methodology Matrix</h3>
              <div className="space-y-4">
                {s.extendedContent.methodology.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/30 border border-slate-850 p-5 rounded-2xl">
                    <h4 className="text-xs font-bold text-brand-blue mb-1 uppercase tracking-wide flex items-center gap-2">
                      <span className="text-[10px] font-mono text-brand-orange">0{idx + 1}.</span>
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/30 border border-slate-850 p-6 md:p-8 rounded-3xl">
              <h3 className="text-sm font-bold tracking-wider uppercase text-slate-300 mb-6 font-mono text-[10px]">Capability Modules</h3>
              <div className="space-y-4">
                {s.features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-850 p-4 rounded-xl flex gap-3 items-start">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-orange mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">{feature.name}</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-6 md:px-12 border-b border-slate-900/60 bg-slate-900/10 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Impact Footprint</span>
          <h2 className="font-editorial text-2xl font-black text-slate-100 mt-1 mb-12">Advisory Results &amp; Verified Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.extendedContent.impactStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl">
                <div className="text-3xl font-black text-brand-blue tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-slate-950">
        <div className="max-w-2xl mx-auto bg-slate-900/40 border border-slate-850 rounded-3xl p-8 md:p-12">
          <h3 className="font-editorial text-xl md:text-2xl font-black text-slate-100 tracking-tight">
            Ready to design a diagnostic intervention?
          </h3>
          <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
            Partner with LightCastle leads to configure data trackers, accelerators, or feasibility studies.
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-slate-100 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-lg shadow-brand-blue/10"
            >
              <span>Initialize Project Funnel</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
