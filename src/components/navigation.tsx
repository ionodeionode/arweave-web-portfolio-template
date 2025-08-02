"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { handleEmailClick } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          IONode
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="#work" className="hover:opacity-70">
            Projects
          </Link>
          <Link href="#about" className="hover:opacity-70">
            About
          </Link>
          <Link
            href="#"
            className="hover:opacity-70"
            onClick={handleEmailClick}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-12 text-2xl">
            <Link
              href="#work"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
