import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { INSIGHTS } from '../../data/brandData';
import { Search, Clock, ChevronRight } from 'lucide-react';

export default function InsightsIndex() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Dual filter: filter by category AND query match in title/description
  const filteredInsights = INSIGHTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-blue selection:text-white">
      <Head>
        <title>Insights &amp; Market Intelligence | LightCastle Partners</title>
        <meta name="description" content="Read LightCastle Partners economic reports, startup assessments, and industry value chain insights in Bangladesh." />
      </Head>

      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 md:px-12 border-b border-slate-200/80 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,115,187,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,115,187,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Research Portal</span>
          <h1 className="font-editorial text-3xl md:text-5xl font-semibold text-slate-900 mt-2 tracking-tight leading-tight">
            Data-backed economic intelligence &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">emerging insights.</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-6 leading-relaxed max-w-2xl mx-auto">
            Access our database of industry value chain studies, economic impact reports, and startup investment climate briefings.
          </p>
        </div>
      </section>

      {/* Filters Hub */}
      <section className="py-8 px-6 md:px-12 bg-white border-b border-slate-200/80 sticky top-18 z-20 backdrop-blur-md bg-white/90 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase tracking-wider w-full md:w-auto">
            {['all', 'economy', 'industry', 'entrepreneurship'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg border transition-all cursor-pointer shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-brand-blue border-brand-blue text-white shadow-brand-blue/15' 
                    : 'border-slate-200 hover:border-slate-350 text-slate-600 hover:text-slate-950 bg-slate-50'
                }`}
              >
                {cat === 'industry' ? 'Industry Insights' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-slate-900 shadow-sm"
            />
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          </div>

        </div>
      </section>

      {/* Grid Container */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-mono text-xs">
              No reports found matching your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredInsights.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 hover:border-brand-blue/30 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all shadow-sm hover:shadow-md"
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
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 mb-2">
                        <Clock className="h-3 w-3" />
                        <span>{item.readTime} Read</span>
                      </div>
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
                      <span>Read Full Report</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
