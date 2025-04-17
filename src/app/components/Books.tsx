"use client";

import { useState } from "react";
import Image from "next/image";

// Define book type
type Book = {
  id: number;
  title: string;
  series: string;
  cover: string;
  description: string;
  fullDescription: string;
  price: number;
  year: number;
};

// Book data
const books: Book[] = [
  {
    id: 1,
    title: "The Comfort of Distance",
    series: "A Sebastian Grey Novel",
    cover: "/images/book1.jpg",
    description: "Deep in the forests of the Black Hills, human remains are being discovered – one bit at a time. Sgt. Hank LeGris needs to find who the dead are, and how they got that way. He pulls in the only person who can solve these strange cases – his estranged brother, forensic anthropologist Dr. Sebastian Grey. Through forensic thinking and deductive reasoning, Sebastian not only solves the mystery of the remains, but also a local murder, while he himself is transformed by his own success and by Detective Tiffany Reese.",
    fullDescription: "Deep in the forests of the Black Hills, human remains are being discovered – one bit at a time. Rumors of a rogue man-eating mountain lion are spreading through the county and panic is starting to swell. Sgt. Hank LeGris of the Custer County Sheriff's Office is feeling the pressure; he needs to find out who the dead are, and how they got that way. Hank suspects that the bodies are the result of a more sinister predator. But in order to solve the mystery, he will have reach back into his own dysfunctional family history and pull in the only person who can get to the bottom of these strange cases – his estranged and disordered brother, the brilliant forensic anthropologist Dr. Sebastian Grey. When Sebastian arrives in the Black Hills, he takes his brother, and detective Tiffany Reese, on a whirlwind tour of forensic thinking and deductive reasoning, not only solving the mystery of the human remains, but the murder of a local thug as well. In the process, Sebastian himself is forever transformed by his own success and by the charm and kindness of the lovely Detective Reese: 'One day I hope you give yourself permission to be different, Sebastian. You'll be happier.' The Comfort of Distance is equal parts forensic mystery, police procedure and character study, with dashes of comedy and romance thrown in. Readers will be cheering at the end and ready for more.",
    price: 17.99,
    year: 2021,
  },
  {
    id: 2,
    title: "The Boxwood Torso",
    series: "A Sebastian Grey Novel",
    cover: "/images/book2.jpg",
    description: "A skull in one place, a torso in another. Thirty years ago, authorities didn't think they were connected. But Dr. Sebastian Grey believes they belong to the same victim – an unidentified man who was shot, dismembered, and scattered in two states. Working with Detective Tiffany Reese amid professional rivalries and local secrets, the cold case proves more challenging than expected.",
    fullDescription: "A skull in one place, a torso in another. Are they connected? Thirty years ago, the authorities didn't think so. But the ingenious forensic anthropologist Dr. Sebastian Grey is now on the case, and he believes they both belong to the same victim - an unidentified man who was shot, dismembered, scattered in two states and burned. But time is not the only thing standing in the way of the truth. A pair of professional rivals, a spy inside the sheriff's office and a local family with a dark secret are all obstacles to untying this murderous knot. This second book in the Sebastian Grey series finds Dr. Grey once again in the Black Hills of South Dakota and teamed up with Tiffany Reese - a shrewd and tough detective who doubles as the love of his life and the only woman who can coax him out of his awkward social isolation. Will their relationship survive the pressure of high stakes cold case work?",
    price: 18.99,
    year: 2022,
  },
  {
    id: 3,
    title: "Where the Blood is Made",
    series: "A Sebastian Grey Novel",
    cover: "/images/book3.jpg",
    description: "How can a living woman's bones be inside a box in the morgue? Forensic anthropologist Dr. Sebastian Grey is certain they are. But he must convince the Custer County Sheriff that a long-forgotten missing persons case is actually a homicide. With Detective Tiffany Reese, they uncover a dark conspiracy perpetrated by the most unlikely suspects.",
    fullDescription: "How can a living woman's bones be inside a box in the morgue? Forensic anthropologist Dr. Sebastian Grey is certain that they are. But unless he can convince the Custer County Sheriff that a long-forgotten missing persons case is a homicide, the truth may stay hidden forever. Sebastian and Detective Tiffany Reese team up once again to solve one of the county's most baffling mysteries. Amber Harrison disappeared ten years ago, and most people believe she left town with a new boyfriend. But others feel that the investigation was botched from the beginning. The evidence will uncover a dark conspiracy perpetrated by the most unlikely suspects.",
    price: 19.99,
    year: 2023,
  },
];

const BookCard = ({ book, onSelect, featured = false }: { book: Book; onSelect: (book: Book) => void; featured?: boolean }) => {
  return (
    <div 
      className={`group cursor-pointer ${featured ? 'col-span-2 md:col-span-1' : ''}`}
      onClick={() => onSelect(book)}
    >
      <div className="relative aspect-[2/3] w-full mb-4 overflow-hidden rounded-lg shadow-2xl transition-all">
        <Image
          src={book.cover}
          alt={book.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 p-5 right-0">
          <p className="text-emerald-400 text-sm font-medium mb-1">{book.series}</p>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{book.title}</h3>
          <p className="text-gray-300 text-sm">{book.year}</p>
        </div>
      </div>
    </div>
  );
};

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState("books");
  
  return (
    <section id="books" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Sebastian Grey Novels</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Follow Detective Sebastian Grey as he unravels mysteries hidden within the wilderness, 
            where the forest keeps secrets darker than anyone could imagine.
          </p>
        </div>
        
        {/* Featured Book */}
        <div id="latest" className="mb-16">
          <h3 className="text-center text-sm uppercase tracking-widest text-emerald-400 mb-8">Latest Release</h3>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <div className="relative aspect-[2/3] w-full max-w-xs mx-auto shadow-2xl">
                  <Image
                    src="/images/book1.jpg"
                    alt="The Comfort of Distance"
                    className="object-cover rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-emerald-400 text-sm font-medium mb-2 uppercase tracking-widest">A Sebastian Grey Novel</p>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">The Comfort of Distance</h3>
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300">
                    Deep in the forests of the Black Hills, human remains are being discovered – one bit at a time. Rumors of a rogue man-eating mountain lion are spreading through the county and panic is starting to swell.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Sgt. Hank LeGris must reach into his own dysfunctional family history and pull in the only person who can solve these strange cases – his estranged brother, the brilliant forensic anthropologist Dr. Sebastian Grey.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Equal parts forensic mystery, police procedure and character study, with dashes of comedy and romance thrown in.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="px-6 py-3 bg-emerald-700 text-white rounded shadow-xl hover:bg-emerald-600 transition-colors">
                    Order Hardcover
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-emerald-700 text-emerald-400 rounded hover:bg-emerald-900/20 transition-colors">
                    Get eBook
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-gray-700 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                    Read Sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Book Collection */}
        <h3 className="text-center text-sm uppercase tracking-widest text-emerald-400 mb-8">Full Collection</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
          ))}
        </div>
        
        {/* Complete Collection */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900/30 to-gray-900 rounded-2xl p-8 border border-emerald-900/30 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative h-full w-full rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/multibook.jpg"
                  alt="Complete Book Collection"
                  width={400}
                  height={500}
                  className="max-h-[500px] w-auto object-contain rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold tracking-tight">The Complete Sebastian Grey Series</h3>
                <div className="flex items-center justify-center bg-emerald-700 h-14 w-14 rounded-full shadow-xl">
                  <p className="text-white font-bold text-sm">20%<br/>OFF</p>
                </div>
              </div>
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-4">All three novels in one collection</p>
              <p className="text-gray-300 mb-6">
                Experience the entire Sebastian Grey series in one collection. Follow the detective's journey through the darkest corners of the wilderness as he hunts killers and confronts his own past.
              </p>
              <div className="mb-6">
                <div className="flex justify-between text-lg mb-2">
                  <span>Individual Price:</span>
                  <span className="line-through text-gray-500">$56.97</span>
                </div>
                <div className="flex justify-between text-2xl font-bold">
                  <span>Collection Price:</span>
                  <span className="text-emerald-400">$45.99</span>
                </div>
              </div>
              <button className="w-full bg-emerald-700 text-white font-medium py-3 rounded shadow-xl hover:bg-emerald-600 transition-colors">
                Order Complete Collection
              </button>
            </div>
          </div>
        </div>
        
        {/* Book Details Modal */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-emerald-400 text-sm uppercase tracking-widest">{selectedBook.series}</p>
                    <h3 className="text-2xl font-bold text-white">{selectedBook.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative aspect-[2/3] w-full shadow-2xl">
                      <Image
                        src={selectedBook.cover}
                        alt={selectedBook.title}
                        className="object-cover rounded-lg"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 mb-6">{selectedBook.fullDescription}</p>
                    <div className="mb-6">
                      <p className="text-gray-400 mb-2">Published: {selectedBook.year}</p>
                      <p className="text-2xl font-bold text-emerald-400">${selectedBook.price}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-emerald-700 text-white font-medium py-3 rounded shadow-lg hover:bg-emerald-600 transition-colors">
                        Order Hardcover
                      </button>
                      <button className="bg-transparent border border-emerald-700 text-emerald-400 font-medium py-3 rounded hover:bg-emerald-900/20 transition-colors">
                        Get eBook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 