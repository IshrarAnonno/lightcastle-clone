import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CLIENTS } from '../data/brandData';
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-slate-100">
      <Head>
        <title>About Us | LightCastle Partners</title>
        <meta name="description" content="Learn about LightCastle Partners. Discover our mission, data-driven methodology, corporate values, and the scale of our impact." />
      </Head>

      <Header />

      {/* Main Hero Header */}
      <section className="relative py-20 px-6 md:px-12 border-b border-slate-900/60 overflow-hidden bg-slate-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001224_1px,transparent_1px),linear-gradient(to_bottom,#001224_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Our Organization</span>
          <h1 className="font-editorial text-3xl md:text-5xl font-black text-slate-100 mt-2 tracking-tight leading-tight">
            We simplify emerging market complexity for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">growth and impact.</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
            LightCastle Partners was founded on a simple premise: emerging economies need high-fidelity primary data to fuel capital allocation and systemic interventions. Today, we stand as a premier B2B consultancy operating at the intersection of private enterprises, venture ecosystems, and global development.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-6 md:px-12 border-b border-slate-900/60 bg-slate-950/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl">
            <h3 className="text-4xl font-black text-brand-blue tracking-tight">150+</h3>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">Clients Served</h4>
            <p className="text-[11px] text-slate-400 mt-1">Institutional NGO sponsors, local corporate hubs, and venture capitals.</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl">
            <h3 className="text-4xl font-black text-brand-orange tracking-tight">30+</h3>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">Sectors Analyzed</h4>
            <p className="text-[11px] text-slate-400 mt-1">RMG transitions, agricultural logistics, green energy, and micro-finance.</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl">
            <h3 className="text-4xl font-black text-brand-blue tracking-tight">USD 150M+</h3>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">Capital Mobilized</h4>
            <p className="text-[11px] text-slate-400 mt-1">Catalytic impact funding, angel cohorts, and seed/series transaction rounds.</p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-900/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">Core Beliefs</span>
            <h2 className="font-editorial text-2xl md:text-3xl font-black text-slate-100 mt-1 tracking-tight">
              Our Professional Principles
            </h2>
            <p className="text-xs text-slate-400 mt-1">We ground our assessments on transparency, objective frameworks, and localized insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-900/20 border border-slate-850/60 rounded-2xl">
              <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Institutional Objectivity</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We believe in letting data dictate the conclusions. Our diagnostic frameworks avoid confirmation bias, generating insights that reflect real field variables.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-900/20 border border-slate-850/60 rounded-2xl">
              <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Localized Context</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Emerging markets cannot be mapped with generic templates. We operate deep research cohorts across Bangladesh to translate local challenges into strategic opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-900/20 border border-slate-850/60 rounded-2xl">
              <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Systemic Collaboration</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Development happens at the intersection of private efficiency and public scale. We align development policies with scalable private sector incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Client Grid */}
      <section className="py-20 px-6 md:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Trusted By</span>
            <h2 className="font-editorial text-2xl md:text-3xl font-black text-slate-100 mt-1 tracking-tight">
              Our Development & Corporate Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENTS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-xl p-4 flex items-center justify-center h-20 transition-all duration-300 group cursor-default"
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

      <Footer />
    </div>
  );
}
