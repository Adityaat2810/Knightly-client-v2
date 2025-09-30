"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Play", path: "/game" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Profile", path: "/profile" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-background/80 backdrop-blur-sm  border-border sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-primary">Knightly</div>
              </Link>


              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-secondary"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-background border-t border-border mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">
                © 2025 Knightly. Play chess in real-time with players worldwide.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
