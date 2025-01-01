"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Mail, Phone, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

// Leaflet marker icon fix
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false); // Client-side check state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const position: [number, number] = [-6.9175, 107.6191];

  // Set isClient to true once component is mounted (on the client side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-white w-full pt-16">
        <div className="text-center py-12 px-4">
          <h2 className="text-red-500 font-medium mb-4">CONTACT</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Reach out to us on social media
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            along with our location
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Section */}
            <div className="bg-red-500 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>pizzateria@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+62 858 1999 2983</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Bandung, West Java</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Feel free to drop us a line below
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Typing your message here..."
                  className="w-full p-3 border rounded-md h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          {isClient && (
            <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={position}
                zoom={13}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>Bandung, West Java</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
