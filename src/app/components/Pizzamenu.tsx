import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const pizzas = [
  {
    id: 1,
    name: "Sausage Pizza",
    price: 7.49,
    rating: 4,
    image:
      "/Images/pizza1.png",
  },
  {
    id: 2,
    name: "Cheese Overload",
    price: 8.3,
    rating: 4,
    image:
      "/Images/pizza2.png",
  },
  {
    id: 3,
    name: "Italian Pizza",
    price: 6.99,
    rating: 3,
    image:
      "/Images/pizza4.png",
  },
  {
    id: 4,
    name: "Super Supreme",
    price: 7.14,
    rating: 5,
    image:
      "/Images/pizza5.png",
  },
  {
    id: 5,
    name: "Veggie Garden",
    price: 7.66,
    rating: 4,
    image:
      "/Images/pizza6.png",
  },
  {
    id: 6,
    name: "American Favorite",
    price: 6.19,
    rating: 3,
    image:
      "/Images/pizza7.png",
  },
];


function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${star <= rating ? "text-[#ffd700]" : "text-gray-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}


function PizzaCard({
  name,
  price,
  rating,
  image,
}: {
  name: string;
  price: number;
  rating: number;
  image: string;
}) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow">
      <div className="relative">
        <div className="relative h-48 bg-[#1c1c1c]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff4d4d]/30 to-transparent" />
        </div>
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
        </button>
        <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center">
          <div className="bg-red-500 p-3 rounded-full shadow-lg">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-5 pt-8">
        <h3 className="text-lg font-bold text-center mb-1">{name}</h3>
        <div className="flex justify-center mb-2">
          <span className="text-sm text-red-500 mt-1">$</span>
          <span className="text-3xl font-bold text-red-500 leading-none">
            {price.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center mb-4">
          <StarRating rating={rating} />
        </div>
        <button className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
          read more
        </button>
      </div>
    </div>
  );
}


export default function Pizzamenu() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
