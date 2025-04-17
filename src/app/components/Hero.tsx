import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/cod_background.jpg')",
          filter: "brightness(0.25)"
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      
      {/* Misty fog effect - can be removed if not needed */}
      <div className="absolute inset-0 bg-fixed opacity-10" 
        style={{
          backgroundImage: "url('/images/fog-texture.png')",
          backgroundSize: "cover",
          mixBlendMode: "overlay"
        }}>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          <span className="block">RYBURN</span>
          <span className="text-emerald-500">DOBBS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Unraveling the darkness that lingers between the trees.
          <span className="block mt-2 text-lg opacity-80">
            Author of the Sebastian Grey detective series
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#books"
            className="px-8 py-3 bg-emerald-700 text-white font-medium rounded hover:bg-emerald-600 transition-colors text-lg shadow-xl shadow-emerald-900/30"
          >
            Discover the Novels
          </Link>
          
          <Link 
            href="#latest"
            className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors text-lg backdrop-blur-sm"
          >
            Latest Release
          </Link>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-emerald-500/50"></div>
      </div>
    </section>
  );
} 