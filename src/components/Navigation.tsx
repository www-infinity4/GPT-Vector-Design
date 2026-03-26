'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink, Zap } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  external: boolean;
  current: boolean;
}

const navLinks: NavLink[] = [
  { label: 'GPT Vector Design', href: '/', external: false, current: true },
  { label: 'Bitcoin Crusher', href: 'https://github.com/www-infinity4/Bitcoin-Crusher', external: true, current: false },
  { label: 'Alien Radio', href: 'https://github.com/www-infinity4/Alien-Radio', external: true, current: false },
  { label: 'Infinity Crown Index', href: 'https://github.com/www-infinity4', external: true, current: false },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-purple-950/20'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="GPT Vector Design home"
            >
              <Zap
                size={22}
                className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-200"
                aria-hidden="true"
              />
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GPT Vector Design
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Desktop navigation">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-purple-300 hover:bg-purple-900/20 transition-all duration-200"
                  >
                    {link.label}
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    aria-current="page"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-purple-400 hover:bg-purple-900/20 transition-all duration-200 border border-slate-700/50"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d0d18] border-l border-purple-900/40 shadow-2xl shadow-purple-950/50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-purple-900/30">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-purple-400" aria-hidden="true" />
              <span className="font-bold text-base bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GPT Vector Design
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <p className="text-xs uppercase tracking-widest text-slate-500 px-3 mb-3 font-medium">
              Projects
            </p>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-purple-300 hover:bg-purple-900/25 border border-transparent hover:border-purple-700/30 transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={14} className="text-slate-500" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 transition-all duration-200"
                  aria-current="page"
                >
                  <span>{link.label}</span>
                </Link>
              )
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-purple-900/30">
            <p className="text-xs text-slate-600 text-center">
              Neuromorphic AI Hub
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
