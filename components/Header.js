import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const isLinkActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="sticky top-0 z-35 bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 group">
          <img 
            src="https://lightcastlepartners.com/wp-content/uploads/2024/09/LCP-Logo-Website-12.png" 
            alt="LightCastle Partners" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider text-slate-600">
          <Link 
            href="/about" 
            className={`hover:text-brand-blue transition-colors ${isLinkActive('/about') ? 'text-brand-blue' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            href="/services" 
            className={`hover:text-brand-blue transition-colors ${isLinkActive('/services') || router.pathname.startsWith('/services/') ? 'text-brand-blue' : ''}`}
          >
            SERVICES
          </Link>
          <Link 
            href="/insights" 
            className={`hover:text-brand-blue transition-colors ${isLinkActive('/insights') || router.pathname.startsWith('/insights/') ? 'text-brand-blue' : ''}`}
          >
            INSIGHTS
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-brand-blue transition-colors ${isLinkActive('/contact') ? 'text-brand-blue' : ''}`}
          >
            PARTNER WITH US
          </Link>
        </nav>

        <div>
          <Link 
            href="/contact" 
            className="bg-brand-blue hover:bg-brand-blue-hover text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-lg shadow-brand-blue/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
