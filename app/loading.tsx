/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-teal-400 border-r-transparent mb-4"></div>
        
        {/* Loading Text */}
        <p className="text-slate-400 text-lg">Loading...</p>
      </div>
    </div>
  );
}