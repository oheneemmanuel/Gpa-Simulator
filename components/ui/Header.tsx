
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import MobileMenu from "@/components/ui/MobileMenu";
import DesktopNav from "@/components/ui/DesktopNav";

export default async function Header() {
  // Navigation Links tailored to your GPA Simulator
  const desktopNavLinks = [
    { name: "Home", href: "/" },
    { name: "GPA Simulator", href: "/GPA" },
    { name: "About", href: "/about" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "GPA Simulator", href: "/GPA" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-slate-950 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 md:flex-row md:items-center md:justify-between relative">
        {/* Left: Brand Identity */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center gap-3">
            {/* Swapped custom logo placeholder for a clean, stylized yellow icon block */}
            <div className="bg-yellow-400 border-2 border-slate-950 p-2.5 rounded-xl text-slate-950 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950">
                GPA<span className="text-yellow-500">.</span>SIMULATOR
              </h1>
              <p className="hidden text-xs font-bold text-slate-500 sm:block tracking-wide">
                ACADEMIC PERFORMANCE TRACKER
              </p>
            </div>
          </Link>

          {/* Pass mobile navigation links down to the Client Component */}
          <MobileMenu navLinks={mobileNavLinks} />
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="my-4 md:my-0">
          <DesktopNav navLinks={desktopNavLinks} />
        </div>

       
      </div>
    </header>
  );
}
