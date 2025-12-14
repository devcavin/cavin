/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

"use client";

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-slate-200 mb-4">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-slate-300 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400/10 text-teal-300 rounded-lg hover:bg-teal-400/20 transition-colors font-medium"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          
          {/** This butto still doesn't work, it's a working progress */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-slate-600">
          <p className="text-sm">Lost in the digital void?</p>
        </div>
      </div>
    </div>
  );
}
