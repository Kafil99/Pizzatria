"use client"

import { ChevronRight } from "lucide-react";
import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Event() {
    const events = [
        {
            title: "Birthday Party",
            images: [
                "/Images/birthday1.png",
                "/Images/birthday2.png",
                "/Images/birthday1.png",
            ],
        },
        {
            title: "Regular Social Gatherings",
            images: [
                "/Images/rsg1.png",
                "/Images/rsg2.png",
                "/Images/rsg1.png",
            ],
        },
        {
            title: "Dinner with loved ones",
            images: [
                "/Images/dwlo.png",
                "/Images/dwlo.png",
                "/Images/dwlo.png",
            ],
        },
    ];
    return (
        <>
            <div>
                <Navbar />
            </div>
            <section className="w-full bg-white px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Celebrate your event with deliciousness at the pizzateria
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                        Pizzateria Event is a comfortable and elegantly designed space,
                        specially designed to host various special events. With charming
                        decorations, warm lighting and a friendly atmosphere, this event
                        section is suitable for various occasions from birthdays, business
                        meetings, to family parties.
                    </p>
                </div>
            </section>

            <main className="min-h-screen bg-white p-4 md:p-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    {events.map((event, index) => (
                        <section key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {event.images.map((image, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="relative overflow-hidden rounded-lg group"
                                    >
                                        <img
                                            src={image}
                                            alt={`${event.title} ${imgIndex + 1}`}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                                        <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm">
                                            read more
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <main className="min-h-screen bg-[#FF4747] text-white p-8 md:p-16">
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">
                RESERVATION
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Turn your dining dreams into reality by booking a table with us
              </h1>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Reservation Now!
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Order's name"
                  className="w-full px-4 py-3 rounded-md bg-white text-black"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-md bg-white text-black"
                  />
                  <input
                    type="number"
                    placeholder="Number of people"
                    className="w-full px-4 py-3 rounded-md bg-white text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Reservation
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/Images/dining.png"
              alt="Top view of a round white table with chairs"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
        <Footer />
        </>
    );
}
