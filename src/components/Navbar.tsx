"use client";

import { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-white z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="z-50">
          <Image src="/images/logo-dark.svg" alt="Digitalbank Logo" width={139} height={20} />
        </div>

        <ul className="hidden lg:flex items-center space-x-8 h-full">
          {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
            <li key={item} className="relative h-full flex items-center group">
              <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue text-sm transition-colors py-6">
                {item}
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button className="btn-primary">Request Invite</button>
        </div>

        <button
          className="lg:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <Image
            src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
            alt="Menu Toggle"
            width={isOpen ? 14 : 24}
            height={isOpen ? 14 : 11}
          />
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
}
