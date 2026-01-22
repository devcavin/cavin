/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import { about, personalInfo } from '@/data/content';
import { FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaReddit, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Mail } from 'lucide-react';

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

export default function About() {
  return (
    <section 
      id="about" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      
      <div className="space-y-4">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div>
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
      </div>
    </section>
  );
}