'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import wealthziLogo from "../../../public/svgs/wealthziLogo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full">
      {/* Marquee Banner - Kept as is */}
      <div style={{ backgroundColor: "#00313a", padding: "5px 0 0", textAlign: "center", overflow: "hidden", whiteSpace: "nowrap" }}>
        <a
          href="https://nivesh.com/en"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            animation: "marquee 10s linear infinite",
            animationPlayState: "running"
          }}
          onMouseOver={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseOut={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {`Nivesh Acquires Wealthzi: Transforming Wealth Management`}
        </a>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Main Header - Added gradient effect */}
      <header className="w-full bg-gradient-to-b from-[#00313A] to-transparent">
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src={wealthziLogo}
              alt="Wealthzi Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Removed nav links, only keeping button */}
          <div className="hidden md:flex items-center justify-end space-x-2 flex-1">
            <Button
              asChild
              className="font-bold rounded-[10px] h-11 px-6 text-base"
              style={{ backgroundColor: 'rgb(76 167 113)' }}
            >
              <a href="https://app.wealthzi.com/login">
                Login/Register
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 w-3/4">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src={wealthziLogo}
                      alt="Wealthzi Logo"
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-6 left-4 right-4 flex flex-col space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="font-bold rounded-[10px] h-12 text-base"
                    style={{ backgroundColor: 'rgb(76 167 113)' }}
                  >
                    <a href="https://app.wealthzi.com/login">
                      Login/Register
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
