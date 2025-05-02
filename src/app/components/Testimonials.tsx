"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  text: string;
  author: string;
  note?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Sebastien Grey is a great character that provides the right amount of interesting information and mystery to ensure a good mystery. I enjoyed the book and look forward to reading another one. Highly recommended.",
    author: "Gary Bradford"
  },
  {
    id: 2,
    text: "I loved this novel from page 1. The way the characters are built makes you really believe in them. The forensic detail was fascinating and the plot was well-structured. I can&apos;t wait for the next book in the series.",
    author: "Jan Mcn"
  },
  {
    id: 3,
    text: "This was a thoroughly enjoyable book. Sebastien and Tiffany are wonderful characters. I started reading during the morning and hated to put it down when lunchtime came. I especially liked that this is a clean book free from profanity and explicit sexual activity. I strongly recommend this book to everyone.",
    author: "LSM"
  },
  {
    id: 4,
    text: "The Comfort Of Distance by former forensic scientist Ryburn Dobbs is a mash up of Bones, Monk and Longmire. When body parts start showing up in the forests of Black Hills the sheriff calls in his quirky brilliant forensic anthropologist brother Sebastien to help figure out if the sinister findings are the result of human, animal or worse interventions.\n\nNarrator Conner Goff lends the perfect cadence to this extremely precise thriller that provides intellectual, romantic and psychology elements for a very satisfying start to The Sebastien Grey book series.",
    author: "Linda McCutcheo",
    note: "On the audiobook narration"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-gray-950 text-white relative overflow-hidden">
      {/* Abstract pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-900 to-gray-900"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3 font-medium">Reviews</h3>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Critical Acclaim</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="max-w-4xl">
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <blockquote className="text-center">
                    <svg className="h-10 w-10 text-emerald-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg md:text-xl italic mb-6 text-gray-200 max-w-2xl mx-auto">&ldquo;{testimonial.text}&rdquo;</p>
                    <cite className="block text-emerald-400 font-bold">— {testimonial.author}</cite>
                    {testimonial.note && (
                      <p className="text-sm text-gray-400 mt-1 italic">{testimonial.note}</p>
                    )}
                  </blockquote>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-emerald-500" : "bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 