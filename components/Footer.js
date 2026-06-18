import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Heart } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-slate-900/60 bg-slate-950/40 pt-16 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-1.5">
            <img 
              src="https://lightcastlepartners.com/wp-content/uploads/2024/09/LCP-Logo-Website-13.png" 
              alt="LightCastle Partners" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>
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
                alt="Google Play Store App"
                className="h-9" 
              />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-xs">
          <div className="flex flex-col gap-3">
            <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Organization</span>
            <Link href="/about" className="text-slate-400 hover:text-slate-200 transition-colors">About Us</Link>
            <Link href="/services" className="text-slate-400 hover:text-slate-200 transition-colors">Services Index</Link>
            <Link href="/contact" className="text-slate-400 hover:text-slate-200 transition-colors">Collaborate</Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Capabilities</span>
            <Link href="/services/management" className="text-slate-400 hover:text-slate-200 transition-colors">Consulting</Link>
            <Link href="/services/ecosystem" className="text-slate-400 hover:text-slate-200 transition-colors">Ecosystems</Link>
            <Link href="/services/digital" className="text-slate-400 hover:text-slate-200 transition-colors">Digital Advisory</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold tracking-wider uppercase text-slate-500 font-mono text-[9px]">Resources</span>
            <Link href="/insights" className="text-slate-400 hover:text-slate-200 transition-colors">Insights Database</Link>
            <Link href="/contact" className="text-slate-400 hover:text-slate-200 transition-colors">Get in Touch</Link>
            <Link href="/about" className="text-slate-400 hover:text-slate-200 transition-colors">Privacy Policy</Link>
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
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-brand-blue outline-none text-slate-200 flex-1"
              />
              <button 
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-brand-blue p-2.5 rounded-lg cursor-pointer transition-all active:scale-95"
              >
                <Send className="h-4.5 w-4.5 fill-current" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
        <span>© 2026 LIGHTCASTLE PARTNERS. ALL RIGHTS RESERVED.</span>
        <span className="text-brand-blue/60 flex items-center gap-1.5 text-[9px]">
          <Heart className="h-3 w-3 fill-current text-brand-orange" />
          Designed for Systemic Impact
        </span>
      </div>
    </footer>
  );
}
