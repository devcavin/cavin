/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import { archiveProjects, personalInfo } from '@/data/content';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export const metadata = {
  title: `Project Archive | ${personalInfo.name}`,
  description: 'A complete list of projects I\'ve worked on',
};

export default function Archive() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        <Link 
          href="/"
          className="group mb-8 inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-400"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          {personalInfo.name}
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-4">
          All Projects
        </h1>
        
        <p className="text-slate-400 mb-12 max-w-2xl">
          A complete archive of things I&apos;ve built over the years. From small experiments to full-fledged applications.
        </p>

        {/* Archive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((project, index) => (
                <tr 
                  key={index}
                  className="border-b border-slate-300/10 last:border-none hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px text-slate-400">
                      {project.year}
                    </div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        {project.links.live || project.links.github ? (
                          <a
                            href={project.links.live || project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                          >
                            <span>{project.title}</span>
                            <ExternalLink className="ml-1 inline-block h-3.5 w-3.5 shrink-0" />
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </div>
                      <div className="hidden sm:block">{project.title}</div>
                    </div>
                    <div className="mt-1 text-sm leading-normal text-slate-400">
                      {project.description}
                    </div>
                    <ul className="mt-2 flex flex-wrap lg:hidden" aria-label="Technologies used">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex flex-wrap">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <FaGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}