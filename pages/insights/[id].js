import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { INSIGHTS } from '../../data/brandData';
import { Clock, ChevronRight, CheckCircle2, UserCheck } from 'lucide-react';

export default function InsightDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Hydration safety check
  if (!router.isReady) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-400 flex items-center justify-center font-mono">
        Aggregating Report Briefs...
      </div>
    );
  }

  const article = INSIGHTS.find((item) => item.slug === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold font-mono">Report Not Found</h2>
        <Link href="/insights" className="text-xs text-brand-blue hover:underline">
          Return to insights database
        </Link>
      </div>
    );
  }

  // Get related reports (exclude current one)
  const relatedReports = INSIGHTS.filter((item) => item.slug !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-slate-100">
      <Head>
        <title>{article.title} | LightCastle Partners</title>
        <meta name="description" content={article.desc} />
      </Head>

      <Header />

      {/* Breadcrumbs & Header */}
      <section className="py-12 px-6 md:px-12 bg-slate-950 border-b border-slate-900/60">
        <div className="max-w-4xl mx-auto">
          <Link href="/insights" className="text-[9px] font-mono tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 mb-4">
            <span>&lt; Back to Insights</span>
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[8px] font-mono font-bold text-brand-orange border border-brand-orange/30 px-2 py-0.5 rounded tracking-wider uppercase">
              {article.category}
            </span>
            <span className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime} Read
            </span>
          </div>
          <h1 className="font-editorial text-2xl md:text-4xl font-black text-slate-100 leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-4 leading-relaxed font-mono">
            Summary: {article.desc}
          </p>
        </div>
      </section>

      {/* Cover Image Banner */}
      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto h-64 md:h-96 rounded-3xl overflow-hidden border border-slate-900 bg-slate-950 relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* Reading Grid Layout */}
      <section className="py-16 px-6 md:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-6 text-xs md:text-sm text-slate-300 leading-relaxed">
            <p className="font-bold text-slate-200">
              {article.content.introduction}
            </p>

            {/* Glowing Brand Blockquote */}
            <div className="border-l-3 border-brand-orange bg-slate-900/40 p-5 rounded-r-2xl italic text-slate-300 font-mono text-[11px] md:text-xs">
              "{article.content.blockquote}"
            </div>

            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3 pt-4 border-t border-slate-900/60">
                <h3 className="font-editorial text-sm md:text-lg font-black text-slate-100">{sec.title}</h3>
                <p className="text-slate-400 leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Key Takeaways Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/40 border border-slate-850 p-5 rounded-2xl">
              <h3 className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-4 tracking-wider">Key Takeaways</h3>
              <div className="space-y-4">
                {article.content.takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-[11px] text-slate-300 leading-relaxed">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-blue/5 border border-brand-blue/10 p-5 rounded-2xl text-center">
              <h4 className="text-[10px] font-mono font-bold uppercase text-brand-blue mb-2 tracking-wider">Practice Advisory</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                Need customized data modeling or value chain assessments in this sector?
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-1 bg-brand-blue hover:bg-brand-blue-hover text-slate-100 px-4 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all"
              >
                <span>Partner with us</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Related Reports */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-900/60 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-editorial text-lg font-black text-slate-200 mb-8">Related Briefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedReports.map((item, idx) => (
              <Link 
                href={`/insights/${item.slug}`}
                key={idx}
                className="bg-slate-900/40 border border-slate-850 hover:border-slate-800 p-4 rounded-xl flex gap-3 transition-all group items-center"
              >
                <div className="h-16 w-16 shrink-0 bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-brand-orange uppercase mb-1">{item.category}</div>
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
