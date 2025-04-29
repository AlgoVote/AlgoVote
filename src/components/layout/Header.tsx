import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="container-content">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-text-primary">
              알고투표
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link 
              href="/compare" 
              className="text-text-primary hover:text-primary transition-colors duration-200 font-medium"
            >
              공약 비교
            </Link>
            <Link 
              href="/about" 
              className="text-text-primary hover:text-primary transition-colors duration-200 font-medium"
            >
              알고투표 소개
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 