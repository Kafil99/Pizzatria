import { Menu, Search, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/Images/logo.png"
              alt="Pizzateria Logo"
              width={32} // Set appropriate width
              height={32} // Set appropriate height
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold">Pizzateria</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-red-400 transition">
                Why Pizzateria?
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-red-400 transition">
                About Us
              </span>
            </Link>
            <Link href="/offerings">
              <span className="text-gray-700 hover:text-red-400 transition">
                Offerings
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center text-gray-700 hover:text-red-400 transition"
              >
                Sections
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDropdown && (
                <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    <Link href="/reservation">
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-400 transition"
                        role="menuitem"
                      >
                        Reservation
                      </span>
                    </Link>
                    <Link href="/event">
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-400 transition"
                        role="menuitem"
                      >
                        Event
                      </span>
                    </Link>
                    <Link href="/menu">
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-400 transition"
                        role="menuitem"
                      >
                        Menu
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact">
              <span className="text-gray-700 hover:text-red-400 transition">
                Contact
              </span>
            </Link>

            <button className="p-2 rounded-full transition">
              <Search className="h-5 w-5 text-gray-600 hover:text-red-400" />
            </button>

            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/">
              <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                Why Pizzateria?
              </span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                About Us
              </span>
            </Link>
            <Link href="/offerings">
              <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                Offerings
              </span>
            </Link>

            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex items-center w-full px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition"
            >
              Sections
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  mobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileDropdown && (
              <div className="pl-6 space-y-1">
                <Link href="/reservation">
                  <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                    Reservation
                  </span>
                </Link>
                <Link href="/event">
                  <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                    Event
                  </span>
                </Link>
                <Link href="/menu">
                  <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                    Menu
                  </span>
                </Link>
              </div>
            )}

            <Link href="/contact">
              <span className="block px-3 py-2 rounded-md text-gray-700 hover:text-red-400 transition">
                Contact
              </span>
            </Link>

            <div className="flex items-center px-3 py-2 space-x-4">
              <button className="p-2 rounded-full transition">
                <Search className="h-5 w-5 text-gray-600 hover:text-red-400" />
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
