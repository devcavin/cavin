/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{' '}
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Figma
        </a>{' '}
        and coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Visual Studio Code
        </a>
        . Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  );
}