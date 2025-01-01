"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <main className="w-full min-h-screen bg-white pt-16">
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-red-500 font-medium uppercase tracking-wide mb-4">
              ABOUT US
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let&rsquo;s delve deeper into
              <br />
              understanding Pizzateria
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Pizzateria is a comfortable and friendly place, offering a wide
              selection of delicious pizzas served with a variety of fresh
              toppings. With a warm atmosphere and attractive decoration,
              Pizzateria is a suitable place to gather with friends and family
              while enjoying delicious dishes...
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/Images/largepizza.png"
              alt="Delicious pizza with olives, bell peppers and melted cheese"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
