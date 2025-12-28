/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import { SiNextdotjs, SiVercel } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <div className="flex flex-wrap items-center gap-4">
        <span>Built with</span>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
        >
          <SiNextdotjs className="h-5 w-5" />
          <span>Next.js</span>
        </a>

        <span> and deployed with</span>
        
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
        >
          <SiVercel className="h-5 w-5" />
          <span>Vercel</span>
        </a>
      </div>
    </footer>
  );
}