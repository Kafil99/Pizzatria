"use client"

import React from "react";
import Pizzamenu from "../components/Pizzamenu";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";  
export default function Menu() {
  return (
    <>
      <div>
        <Navbar />
      </div>
  
      <main className="w-full min-h-screen bg-white pt-16">
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-[#ff4747] text-sm font-medium tracking-wide uppercase mb-4">
              OUR SELECTION
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-12 max-w-xl mx-auto">
              A Menu That Will Always Capture Your Heart
            </h1>
            <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/Images/burger.png"
                  alt="Burger"
                  width={24}   
                  height={24}  
                  className="w-6 h-6"
                />
                <span>Burger</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white">
                <Image
                  src="/Images/pizzaslice.png"
                  alt="Pizza"
                  width={24}    
                  height={24}  
                  className="w-6 h-6"
                />
                <span>Pizza</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/Images/cupcake.png"
                  alt="Cup Cake"
                  width={24}  
                  height={24}   
                  className="w-6 h-6"
                />
                <span>Cup Cake</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/Images/ramen.png"
                  alt="Ramen"
                  width={24}    
                  height={24}   
                  className="w-6 h-6"
                />
                <span>Ramen</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/Images/icecream.png"
                  alt="Ice Cream"
                  width={24}    
                  height={24}   
                  className="w-6 h-6"
                />
                <span>IceCream</span>
              </button>
            </div>
          </div>
        </section>
        <Pizzamenu />

        <Footer />
      </main>
    </>
  );
}
