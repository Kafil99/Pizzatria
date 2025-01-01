"use client"

import React from "react";
import Navbar from "./components/Navbar";
import MenuSection from "./components/Selection";
import TestimonialSection from "./components/TestimonialSection";
import Pizzateria from "./components/Pizzatria";
import { Footer } from "./components/Footer";
import Image from "next/image";  

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza Background"
            className="w-full h-full object-cover"
            width={1920}  
            height={1080} 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-2 mb-8">
            <span className="text-gray-800 font-medium">Beyond Speedy 🍕</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight mb-6">
            Ensure Your <span className="text-red-500">Food</span> is
            <br className="hidden sm:block" /> Delivered with Speed
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Our mission is to satisfy your appetite with delectable dishes,
            delivered swiftly and at no extra cost
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-12 right-12 w-4 h-4 bg-orange-400 rounded-full" />
        <div className="absolute top-24 left-24 w-4 h-4 bg-red-500 rounded-full" />
        <div className="absolute bottom-24 right-36 w-4 h-4 bg-orange-400 rounded-full" />
        <div className="absolute top-1/2 left-12 w-4 h-4 bg-red-500 rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-wider mb-4">
              OUR OFFERINGS
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Your Preferred Food
              <br />
              Delivery Companion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/Images/ordering.png"
                  alt="Convenient Ordering"
                  className="h-48 w-auto"
                  width={192}  
                  height={192}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Convenient Ordering
              </h3>
              <p className="text-gray-600 text-lg">
                Ordering food requires just a few simple steps
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-red-100">
              <div className="flex justify-center mb-6">
                <Image
                  src="/Images/delivery.png"
                  alt="Quickest Delivery"
                  className="h-48 w-auto"
                  width={192}  
                  height={192}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quickest Delivery
              </h3>
              <p className="text-gray-600 text-lg">
                Consistently Timely Delivery, Even Faster
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/Images/quality.png"
                  alt="Superior Quality"
                  className="h-48 w-auto"
                  width={192}  
                  height={192} 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Superior Quality
              </h3>
              <p className="text-gray-600 text-lg">
                For us, quality is paramount, not just speed
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <MenuSection />
          <TestimonialSection />
          <Pizzateria />
        </div>
        <Footer />
      </section>
    </>
  );
}
