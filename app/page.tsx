/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Add padding-top for mobile nav */}
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 pt-20 lg:pt-12">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - Header (sticky on large screens) */}
          <Header />

          {/* Right column - Main content */}
          <main className="pt-12 lg:w-1/2 lg:py-24" id="content">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}