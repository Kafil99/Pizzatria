import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
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
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Attributes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Selection
                </a>
              </li>
            </ul>
          </div>
          {/* Enterprise Section */}
          <div>
            <h3 className="font-semibold mb-4">Enterprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Why Pizzaterio?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Assistance Section */}
          <div>
            <h3 className="font-semibold mb-4">Assistance</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          {/* Get in Touch Section */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have a question or feedback?
              <br />
              We're eager to hear from you.
            </p>
            <div className="mt-6">
              <img
                src="/Images/logo.png"
                alt="Pizzateria Logo"
                className="h-12 w-12 mb-4"
              />
              <p className="text-sm text-gray-600">
                Our mission is to satisfy your hunger with tasty food, delivered
                quickly and at no charge
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={20} />
                </a>
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
