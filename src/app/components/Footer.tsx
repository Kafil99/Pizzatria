import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Regarding Section */}
          <div>
            <h3 className="font-semibold mb-4">Regarding</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Attributes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Selection
                </Link>
              </li>
            </ul>
          </div>
          {/* Enterprise Section */}
          <div>
            <h3 className="font-semibold mb-4">Enterprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Why Pizzaterio?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Assistance Section */}
          <div>
            <h3 className="font-semibold mb-4">Assistance</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          {/* Get in Touch Section */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have a question or feedback?
              <br />
              We&rsquo;re eager to hear from you.
            </p>
            <div className="mt-6">
              <Image
                src="/Images/logo.png"
                alt="Pizzateria Logo"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">
                Our mission is to satisfy your hunger with tasty food, delivered
                quickly and at no charge
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>2019 Pruto Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
