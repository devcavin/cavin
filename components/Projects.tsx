/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import { projects } from '@/data/content';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section 
      id="projects" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {featuredProjects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                {/* Project Image */}
                <div className="z-10 sm:order-2 sm:col-span-3">
                  {project.image ? (
                    <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={400}
                        height={225}
                        className="rounded object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded border-2 border-slate-200/10 bg-slate-800/50 aspect-video flex items-center justify-center">
                      <span className="text-slate-500 text-sm">No preview</span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="z-10 sm:order-1 sm:col-span-5">
                  <h3>
                    <a
                      href={project.links.live || project.links.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  {(project.links.github || project.links.live) && (
                    <div className="flex gap-4 mt-2 text-sm">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            href="/archive"
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
              See more projects
            </span>
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
          </a>
        </div>
      </div>
    </section>
  );
}