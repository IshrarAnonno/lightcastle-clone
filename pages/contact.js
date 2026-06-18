import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserCheck, Send } from 'lucide-react';

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-slate-100">
      <Head>
        <title>Collaborate With Us | LightCastle Partners</title>
        <meta name="description" content="Configure a B2B project advisory profile. Define your sector, goals, and briefs to connect with our practice leads." />
      </Head>

      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 md:px-12 border-b border-slate-900/60 overflow-hidden bg-slate-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001224_1px,transparent_1px),linear-gradient(to_bottom,#001224_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Collaborate</span>
          <h1 className="font-editorial text-3xl md:text-5xl font-black text-slate-100 mt-2 tracking-tight leading-tight">
            Configure your B2B advisory <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">project profile.</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto">
            Use our multi-step intake tool to outline your organizational domain and strategic goals. A practice lead will coordinate a briefing meeting within 24 hours.
          </p>
        </div>
      </section>

      {/* Funnel Planner Body */}
      <section className="py-20 px-6 md:px-12 bg-slate-950">
        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-850 rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Stepper Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  plannerStep >= s ? 'bg-brand-orange' : 'bg-slate-850'
                }`}
              ></div>
            ))}
          </div>

          {plannerStep === 0 && (
            <div className="animate-fade-in">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold mb-1 block">Project Intake • Step 1</span>
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
                    className="p-5 text-left border border-slate-850 hover:border-brand-blue/40 bg-slate-950/40 rounded-2xl hover:bg-slate-900/50 cursor-pointer transition-all focus:outline-none flex flex-col justify-between h-28"
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
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold mb-1 block">Project Intake • Step 2</span>
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
                    className="p-5 text-left border border-slate-850 hover:border-brand-blue/40 bg-slate-950/40 rounded-2xl hover:bg-slate-900/50 cursor-pointer transition-all focus:outline-none flex flex-col justify-between h-28"
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
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold mb-1 block">Project Intake • Step 3</span>
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
                        className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-blue outline-none text-slate-200"
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
                        className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-blue outline-none text-slate-200"
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
                      className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-blue outline-none text-slate-200"
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
                      className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs focus:border-brand-blue outline-none text-slate-200 resize-none"
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
                      className="bg-brand-blue hover:bg-brand-blue-hover text-slate-100 px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer disabled:opacity-50 flex items-center gap-2"
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

      <Footer />
    </div>
  );
}
