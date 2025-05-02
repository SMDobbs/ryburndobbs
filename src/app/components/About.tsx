import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: "url('/images/book2.jpg')",
            filter: "brightness(0.2) grayscale(0.5)"
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/author.jpg"
                alt="RyburnDobbs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-white">
            <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-4">About the Author</h3>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">RyburnDobbs</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Ryburn Dobbs taught biological anthropology and forensic anthropology at several colleges throughout the San Francisco Bay Area and spent ten years as a forensic anthropologist, working dozens of death investigations. In addition to his anthropological pursuits, Ryburn also worked as an investigative analyst specializing in homicides and unsolved cases.
              </p>
             
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">The Sebastien Grey Series</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-500">›</span>
                    The Comfort of Distance (2020)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-500">›</span>
                    The Boxwood Torso (2021)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-500">›</span>
                    Where the Blood is Made (2022)
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 flex space-x-4">
                <a href="#contact" className="inline-block px-6 py-3 bg-emerald-700 text-white rounded shadow-lg hover:bg-emerald-600 transition-colors">
                  Contact for Events
                </a>
                <a href="https://www.ryburndobbs.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-transparent border border-emerald-500 text-emerald-400 rounded hover:bg-emerald-900/20 transition-colors">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 