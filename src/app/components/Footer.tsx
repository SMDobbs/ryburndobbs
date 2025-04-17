import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle forest pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/book3.jpg')",
            filter: "brightness(0.1) contrast(0.7)"
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16">
          <div className="md:col-span-5">
            <Link href="/" className="text-3xl font-bold tracking-tighter inline-block mb-6">
              RYBURN<span className="text-emerald-500">DOBBS</span>
            </Link>
            <div className="bg-black/40 border-l-2 border-emerald-700 pl-4 py-2 mb-8">
              <p className="text-gray-300 max-w-md leading-relaxed font-mono text-sm">
                𝙰𝚗𝚍 𝚜𝚘, 𝚝𝚑𝚎 𝚏𝚊𝚛𝚝𝚑𝚎𝚛 𝚑𝚎 𝚐𝚘𝚝 𝚏𝚛𝚘𝚖 𝚏𝚊𝚖𝚒𝚕𝚒𝚊𝚛 𝚙𝚎𝚘𝚙𝚕𝚎, 𝚝𝚑𝚎 𝚖𝚘𝚛𝚎 𝚌𝚘𝚖𝚏𝚘𝚛𝚝𝚊𝚋𝚕𝚎 𝚑𝚎 𝚋𝚎𝚌𝚊𝚖𝚎...𝚃𝚑𝚎 𝚙𝚑𝚎𝚗𝚘𝚖𝚎𝚗𝚘𝚗 𝚠𝚊𝚜 𝚜𝚘 𝚛𝚎𝚕𝚒𝚊𝚋𝚕𝚎 𝚊𝚗𝚍 𝚌𝚘𝚗𝚜𝚒𝚜𝚝𝚎𝚗𝚝 𝚝𝚑𝚊𝚝 𝚂𝚎𝚋𝚊𝚜𝚝𝚒𝚎𝚗 𝚎𝚟𝚎𝚗 𝚐𝚊𝚟𝚎 𝚒𝚝 𝚊 𝚗𝚊𝚖𝚎 - 𝚝𝚑𝚎 𝚌𝚘𝚖𝚏𝚘𝚛𝚝 𝚘𝚏 𝚍𝚒𝚜𝚝𝚊𝚗𝚌𝚎.
                <span className="block mt-3 text-sm italic text-emerald-500">— The Comfort of Distance</span>
              </p>
            </div>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Goodreads</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.525 15.977V.49h-2.059v2.906h-.064a3.3 3.3 0 00-.933-1.064A3.215 3.215 0 0015.31 1.65 3.247 3.247 0 0012.835.49a3.406 3.406 0 00-3.022 1.849h-.064V.49 15.977h2.059V8.5a3.393 3.393 0 01.467-1.752 3.461 3.461 0 011.208-1.217 3.363 3.363 0 011.719-.48c.224.005.444.009.66.064a3.12 3.12 0 01.933.3 3.143 3.143 0 011.01.744 3.336 3.336 0 01.619 1.003c.145.397.223.814.231 1.234v7.588zM5.654 5.13A3.806 3.806 0 00 8.085 4.155c.072 0 .162.063 1.622.063.826-.017 1.65.095 2.452.336V5.93a7.361 7.361 0 00-2.452-.336c-1.595-.056-2.763.212-3.566.801a3.541 3.541 0 00-1.334 2.953c0 1.282.393 2.297 1.187 3.046.794.75 1.877 1.118 3.248 1.118a7.362 7.362 0 002.944-.667V8.062h-2.058v1.595H8.96v2.445l.064.064c.688.384 1.453.645 2.245.766a5.48 5.48 0 01-1.208.144c-1.06 0-1.807-.28-2.245-.845-.439-.565-.658-1.371-.658-2.417.008-.809.175-1.608.491-2.354a.859.859 0 000-.256z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-sm uppercase tracking-widest text-emerald-500 font-medium mb-5">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#books" className="text-gray-400 hover:text-white transition-colors">Books</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About the Author</Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-sm uppercase tracking-widest text-emerald-500 font-medium mb-5">Join the Newsletter</h3>
            <p className="text-gray-400 mb-5">
              Sign up to receive updates on new releases, events, exclusive content, and more.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded shadow-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} RyburnDobbs. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 