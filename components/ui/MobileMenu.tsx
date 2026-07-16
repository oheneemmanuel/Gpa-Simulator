"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  Calculator,
  BookOpen,
} from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map academic link paths to their corresponding icons
  const getIcon = (href: string) => {
    const activeColor = "text-slate-950";
    const inactiveColor = "text-slate-400";

    switch (href) {
      case "/":
        return (
          <Home
            size={19}
            className={pathname === "/" ? activeColor : inactiveColor}
          />
        );
      case "/GPA":
        return (
          <Calculator
            size={19}
            className={pathname === "/GPA" ? activeColor : inactiveColor}
          />
        );
      case "/about":
        return (
          <Info
            size={19}
            className={pathname === "/about" ? activeColor : inactiveColor}
          />
        );
      default:
        return <BookOpen size={19} className={inactiveColor} />;
    }
  };

  return (
    <>
      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="md:hidden text-slate-950 focus:outline-none p-1.5 cursor-pointer hover:bg-slate-50 rounded-lg transition"
        aria-label="Open navigation menu"
      >
        <Menu className="h-7 w-7" />
      </button>

      {/* Portal for Backdrop and Drawer */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            {isOpen && (
              <div
                className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-xs transition-opacity md:hidden"
                onClick={() => setIsOpen(false)}
              />
            )}

            {/* Drawer Container */}
            <div
              className={`fixed inset-y-0 right-0 z-[70] w-[78vw] max-w-[290px] bg-white border-l-2 border-slate-950 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b-2 border-slate-950 bg-slate-50">
                <span className="font-extrabold text-slate-950 tracking-wider text-xs uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-950 p-1 hover:bg-slate-200 border-2 border-transparent hover:border-slate-950 rounded-lg transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Links Area */}
              <div className="flex-1 overflow-y-auto py-2">
                <nav className="flex flex-col px-3 gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-lg border-2 transition font-bold text-sm ${
                          isActive
                            ? "bg-yellow-400 text-slate-950 border-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            : "text-slate-700 border-transparent hover:bg-slate-50 hover:text-slate-950"
                        }`}
                      >
                        {getIcon(link.href)}
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}