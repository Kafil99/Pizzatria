import { Star, StarHalf } from "lucide-react";
import React from "react";

export default function TestimonialSection() {
  return (
    <section className="min-h-screen w-full bg-red-500 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="uppercase text-sm font-bold tracking-wider text-white mb-4">
            Customer Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What Customers Have to Say About Us
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <blockquote className="relative">
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-white"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-xl md:text-2xl font-medium text-white pl-10">
                "Pizzateria is exceptional. With a wide array of delicious meals
                and excellent service, including remarkably fast delivery, I
                wholeheartedly recommend Pizzateria to you."
              </p>
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src="/Images/xaviera.png"
                alt="Aracelly Xaviera"
                className="h-16 w-16 rounded-full object-cover transition-transform hover:scale-110"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-black">Aracelly Xaviera</h4>
                <p className="text-white">Culinary Enthusiast</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <StarHalf className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="ml-2 text-white">4.8</span>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img
              src="/Images/pizza.png"
              alt="Delicious pizza on wooden serving board"
              className="w-full h-auto rounded-lg "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
