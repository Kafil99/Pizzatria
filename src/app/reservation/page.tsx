"use client"

import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Reservation() {
  return (
    <>
    
    <Navbar />

    <main className="min-h-screen w-full">
      <section className="bg-[#FF4D4D]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-white uppercase text-sm font-medium tracking-wider mb-4">
                  Reservation
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Turn your dining dreams into reality by booking a table with
                  us
                </h1>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  Reservation <span className="text-white">Now!</span>
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Orderer's name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Orderer's name"
                      className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone number"
                        className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500" />
                    </div>
                    <div>
                      <label htmlFor="people" className="sr-only">
                        Number of people
                      </label>
                      <input
                        type="number"
                        id="people"
                        placeholder="Number of people"
                        className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-200"
                  >
                    Reservation
                  </button>
                </form>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/Images/dining.png"
                alt="Top view of a round restaurant table with chairs"
                className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF4D4D] uppercase text-sm font-medium tracking-wider mb-4">
              Voucher Discount
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get a voucher discount without minimum purchase
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="rounded-lg p-6 relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #FF4D4D, #FFB800)",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm mb-2">Voucher</p>
                  <h3 className="text-white text-4xl font-bold mb-2">20%</h3>
                  <p className="text-white/80 text-sm">45% Used</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg p-6 relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #00FF85, #00BFE7)",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm mb-2">Voucher</p>
                  <h3 className="text-white text-4xl font-bold mb-2">99%</h3>
                  <p className="text-white/80 text-sm">80% Used</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg p-6 relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #FF4D4D, #FF00FF)",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm mb-2">Voucher</p>
                  <h3 className="text-white text-4xl font-bold mb-2">10%</h3>
                  <p className="text-white/80 text-sm">50% Used</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg p-6 relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #9900FF, #FF00FF)",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm mb-2">Voucher</p>
                  <h3 className="text-white text-4xl font-bold mb-2">63%</h3>
                  <p className="text-white/80 text-sm">65% Used</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF4D4D] uppercase text-sm font-medium tracking-wider mb-4">
              Best Chef
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The best chef at Pizzateria
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Diego Maldini",
                position: "Executive Chef",
                image: "/Images/chef1.png",
              },
              {
                name: "Edward Garlen",
                position: "Chef de Partie",
                image: "/Images/chef2.png",
              },
              {
                name: "Yosephian",
                position: "Sous Chef",
                image: "/Images/chef3.png",
              },
              {
                name: "Diego Maldini",
                position: "Executive Chef",
                image: "/Images/chef1.png",
              },
              {
                name: "Edward Garlen",
                position: "Chef de Partie",
                image: "/Images/chef2.png",
              },
              {
                name: "Yosephian",
                position: "Sous Chef",
                image: "/Images/chef3.png",
              },
            ].map((chef, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 mb-4 rounded-full overflow-hidden transition-transform hover:scale-105">
                  <img
                    src={chef.image}
                    alt={`${chef.name} - ${chef.position}`}
                    className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{chef.name}</h3>
                <p className="text-[#FF4D4D]">{chef.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main></>
  );
}
