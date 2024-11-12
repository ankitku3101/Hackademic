'use client'

import { useState, ReactNode } from 'react';
import Link from 'next/link';

export function LinkMenu({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2 hover:bg-zinc-900">
      {children}
    </Link>
  );
}

export default function HoverDropdown({
  children,
  title = 'Dropdown hover', 
}: {
  children: ReactNode;
  title?: string; 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-inherit focus:ring-4 focus:outline-none focus:ring-zinc-300 inline-flex items-center"
        type="button"
      >
        {title} 
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-10 divide-y divide-gray-100 shadow bg-zinc-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-45 min-w-0`}
        style={{ left: '50%', transform: 'translateX(-50%)' }} 
      >
        <ul className="py-2 text-sm text-white">{children}</ul>
      </div>
    </div>
  );
}
