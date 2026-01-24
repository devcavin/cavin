'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#education', label: 'Education' },
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-slate-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
           
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === '/blog' 
                ? pathname?.startsWith('/blog')
                : false;
              
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-teal-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-sm border-b border-slate-800 shadow-lg">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => {
                const isActive = link.href === '/blog' 
                  ? pathname?.startsWith('/blog')
                  : false;
                
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-6 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-teal-300 bg-slate-800/50'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}