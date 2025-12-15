/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

'use client';

import { personalInfo } from '@/data/content';
import { Mail, User, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaReddit, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
  ];

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaGitlab, url: personalInfo.social.gitlab, label: 'GitLab' },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FaInstagram, url: personalInfo.social.instagram, label: 'Instagram' },
    { icon: FaReddit, url: personalInfo.social.reddit, label: 'Reddit' },
    { icon: FaTwitch, url: personalInfo.social.twitch, label: 'Twitch' },
    { icon: FaYoutube, url: personalInfo.social.youtube, label: 'YouTube' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ].filter(link => link.url);

  return (
    <>
      {/* Mobile/Tablet Top Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-slate-200">
            {personalInfo.name}
          </Link>
          
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar Header */}
      <header className="hidden lg:flex lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">{personalInfo.name}</Link>
          </h1>
          
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {personalInfo.role}
          </h2>
          
          <p className="mt-4 max-w-xs leading-normal">
            {personalInfo.tagline}
          </p>

          {/* Desktop Navigation */}
          <nav className="nav mt-16" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`group flex items-center py-3 ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all ${
                          activeSection === item.id
                            ? 'w-16 bg-slate-200'
                            : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                        }`}
                      ></span>
                      <span className="flex items-center gap-2">
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            activeSection === item.id
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}
                        />
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === item.id
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}
                        >
                          {item.label}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-slate-200 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}