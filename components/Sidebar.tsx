/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

'use client';

import { personalInfo } from '@/data/content';
import { useState, useEffect } from 'react';
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


export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = ['about', 'experience', 'education', 'projects'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    {personalInfo.name}
                </h1>

                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {personalInfo.role}
                </h2>

                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    {personalInfo.tagline}
                </p>

                {/* Desktop Navigation */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="group flex items-center py-3"
                                >
                                    <span
                                        className={`nav-indicator mr-4 h-px transition-all ${activeSection === link.id
                                            ? 'w-16 bg-slate-200'
                                            : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                                            }`}
                                    ></span>
                                    <span
                                        className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${activeSection === link.id
                                            ? 'text-slate-200'
                                            : 'text-slate-500 group-hover:text-slate-200'
                                            }`}
                                    >
                                        {link.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                {/* Social Links */}
                <ul
                    className="ml-1 mt-8 flex flex-wrap items-center gap-4 max-w-xs justify-center sm:justify-start" aria-label="Social media">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="block rounded-md p-1 text-slate-400 hover:text-slate-200 transition-colors" aria-label={link.label}>
                                    <Icon className="h-6 w-6" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}