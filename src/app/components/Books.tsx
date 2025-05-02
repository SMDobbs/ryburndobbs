"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  amazonLink: string;
  booksByLink: string;
};

// Book data
const books: Book[] = [
  {
    id: 1,
    title: "The Comfort of Distance",
    series: "A Sebastien Grey Novel",
    cover: "/images/book1.jpg",
    description: "Deep in the forests of the Black Hills, human remains are being discovered – one bit at a time. Sgt. Hank LeGris needs to find who the dead are, and how they got that way. He pulls in the only person who can solve these strange cases – his estranged brother, forensic anthropologist Dr. Sebastien Grey. Through forensic thinking and deductive reasoning, Sebastien not only solves the mystery of the remains, but also a local murder, while he himself is transformed by his own success and by Detective Tiffany Reese.",
    fullDescription: "Deep in the forests of the Black Hills, human remains are being discovered – one bit at a time. Rumors of a rogue man-eating mountain lion are spreading through the county and panic is starting to swell. Sgt. Hank LeGris of the Custer County Sheriff's Office is feeling the pressure; he needs to find out who the dead are, and how they got that way. Hank suspects that the bodies are the result of a more sinister predator. But in order to solve the mystery, he will have reach back into his own dysfunctional family history and pull in the only person who can get to the bottom of these strange cases – his estranged and disordered brother, the brilliant forensic anthropologist Dr. Sebastien Grey. When Sebastien arrives in the Black Hills, he takes his brother, and detective Tiffany Reese, on a whirlwind tour of forensic thinking and deductive reasoning, not only solving the mystery of the human remains, but the murder of a local thug as well. In the process, Sebastien himself is forever transformed by his own success and by the charm and kindness of the lovely Detective Reese: &apos;One day I hope you give yourself permission to be different, Sebastien. You&apos;ll be happier.&apos; The Comfort of Distance is equal parts forensic mystery, police procedure and character study, with dashes of comedy and romance thrown in. Readers will be cheering at the end and ready for more.",
    price: 14.99,
    year: 2020,
    amazonLink: "https://www.amazon.com/Comfort-Distance-Sebastien-Grey-Novels/dp/B09PVN3MRM/ref=sr_1_1?crid=22HIELYPM7ZPH&dib=eyJ2IjoiMSJ9.AV_XSJkbScDDI2RwkRLKRLDjKaJWcXyAP7GVNC1eEwBEkvVMr7o3AfkWDM-t0HlcpxFU-7MtbRB5Uh1NlsG9doEEsu2kkfopYBZCWimpXcmo1757PvhKInB2XcUt2bsFPCxbgt5grcXedMSpPgJCcAPXrXq6_OCexr715N8vAJeUpUTJwv2RF2VM2N3NNhMw1fSX5T57rh9BDiy_iwfPi4-j0oPqk4p44wBieRLnoL4.czWse8syibKHOUCCcwYEfrgIZMUPbbw-mQXj0RGQNXA&dib_tag=se&keywords=The+comfort+of+distance&qid=1746210113&sprefix=the+comfort+of+distanc%2Caps%2C126&sr=8-1",
    booksByLink: "https://books.by/dandiprat-press#the-comfort-of-distance",
  },
  {
    id: 2,
    title: "The Boxwood Torso",
    series: "A Sebastien Grey Novel",
    cover: "/images/book2.jpg",
    description: "A skull in one place, a torso in another. Thirty years ago, authorities didn't think they were connected. But Dr. Sebastien Grey believes they belong to the same victim – an unidentified man who was shot, dismembered, and scattered in two states. Working with Detective Tiffany Reese amid professional rivalries and local secrets, the cold case proves more challenging than expected.",
    fullDescription: "A skull in one place, a torso in another. Are they connected? Thirty years ago, the authorities didn't think so. But the ingenious forensic anthropologist Dr. Sebastien Grey is now on the case, and he believes they both belong to the same victim - an unidentified man who was shot, dismembered, scattered in two states and burned. But time is not the only thing standing in the way of the truth. A pair of professional rivals, a spy inside the sheriff's office and a local family with a dark secret are all obstacles to untying this murderous knot. This second book in the Sebastien Grey series finds Dr. Grey once again in the Black Hills of South Dakota and teamed up with Tiffany Reese - a shrewd and tough detective who doubles as the love of his life and the only woman who can coax him out of his awkward social isolation. Will their relationship survive the pressure of high stakes cold case work?",
    price: 13.99,
    year: 2021,
    amazonLink: "https://www.amazon.com/Boxwood-Torso-Sebastien-Grey-Novels/dp/B09VC58LNC/ref=sr_1_1?crid=1HVO6ECE49HTH&dib=eyJ2IjoiMSJ9.tAJRw_zAg1LGD-N-srDETw.reFmSOf3qPYukcMTGtIRfEYeE9lVL3tHzQZ0Z3io968&dib_tag=se&keywords=The+boxwood+torso&qid=1746210179&s=audible&sprefix=the+boxwood+torso%2Caudible%2C100&sr=1-1",
    booksByLink: "https://books.by/dandiprat-press#the-boxwood-torso",
  },
  {
    id: 3,
    title: "Where the Blood is Made",
    series: "A Sebastien Grey Novel",
    cover: "/images/book3.jpg",
    description: "How can a living woman's bones be inside a box in the morgue? Forensic anthropologist Dr. Sebastien Grey is certain they are. But he must convince the Custer County Sheriff that a long-forgotten missing persons case is actually a homicide. With Detective Tiffany Reese, they uncover a dark conspiracy perpetrated by the most unlikely suspects.",
    fullDescription: "How can a living woman's bones be inside a box in the morgue? Forensic anthropologist Dr. Sebastien Grey is certain that they are. But unless he can convince the Custer County Sheriff that a long-forgotten missing persons case is a homicide, the truth may stay hidden forever. Sebastien and Detective Tiffany Reese team up once again to solve one of the county's most baffling mysteries. Amber Harrison disappeared ten years ago, and most people believe she left town with a new boyfriend. But others feel that the investigation was botched from the beginning. The evidence will uncover a dark conspiracy perpetrated by the most unlikely suspects.",
    price: 12.99,
    year: 2022,
    amazonLink: "https://www.amazon.com/Where-Blood-Made-Sebastien-Novel/dp/B0C2H5XDKW/ref=sr_1_1?crid=2759TIKTNMDK9&dib=eyJ2IjoiMSJ9.bUgDLTTA4DW_mSOQl4Fyog.NA1QTMhd8lBL95V7mEm30wao7b2PD6GkPxwSpJq2Wgo&dib_tag=se&keywords=where+the+blood+is+made&qid=1746210222&s=audible&sprefix=where+the+blood+is+mad%2Caudible%2C102&sr=1-1",
    booksByLink: "https://books.by/dandiprat-press#where-the-blood-is-made",
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
  
  return (
    <section id="books" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Sebastien Grey Novels</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Follow forensic anthropologist Sebastien Grey as he unravels mysteries hidden within the wilderness, 
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
                    src="/images/book3.jpg"
                    alt="Where the Blood is Made"
                    className="object-cover rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-emerald-400 text-sm font-medium mb-2 uppercase tracking-widest">A Sebastien Grey Novel</p>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Where the Blood is Made</h3>
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300">
                    How can a living woman's bones be inside a box in the morgue? Forensic anthropologist Dr. Sebastien Grey is certain that they are. But unless he can convince the Custer County Sheriff that a long-forgotten missing persons case is a homicide, the truth may stay hidden forever.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Amber Harrison disappeared ten years ago, and most people believe she left town with a new boyfriend. But others feel that the investigation was botched from the beginning. The evidence will uncover a dark conspiracy perpetrated by the most unlikely suspects.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link 
                    href="https://books.by/dandiprat-press#where-the-blood-is-made" 
                    target="_blank" 
                    className="px-6 py-3 bg-emerald-700 text-white rounded shadow-xl hover:bg-emerald-600 transition-colors text-center"
                  >
                    Purchase on Books.by
                  </Link>
                  <Link 
                    href="https://www.amazon.com/Where-Blood-Made-Sebastien-Novel/dp/B0C2H5XDKW/ref=sr_1_1?crid=2759TIKTNMDK9&dib=eyJ2IjoiMSJ9.bUgDLTTA4DW_mSOQl4Fyog.NA1QTMhd8lBL95V7mEm30wao7b2PD6GkPxwSpJq2Wgo&dib_tag=se&keywords=where+the+blood+is+made&qid=1746210222&s=audible&sprefix=where+the+blood+is+mad%2Caudible%2C102&sr=1-1" 
                    target="_blank" 
                    className="px-6 py-3 bg-transparent border border-emerald-700 text-emerald-400 rounded hover:bg-emerald-900/20 transition-colors text-center"
                  >
                    Buy on Amazon
                  </Link>
                </div>
                <p className="text-gray-400 text-sm mt-3 italic">Purchasing on Books.by provides more support directly to the author</p>
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
                <h3 className="text-2xl font-bold tracking-tight">The Complete Sebastien Grey Series</h3>
                <div className="flex items-center justify-center bg-emerald-700 h-14 w-14 rounded-full shadow-xl">
                  <p className="text-white font-bold text-sm">20%<br/>OFF</p>
                </div>
              </div>
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-4">All three novels in one collection</p>
              <p className="text-gray-300 mb-6">
                Experience the entire Sebastien Grey series in one collection. Follow the forensic anthropologist's journey through the darkest corners of the wilderness as he hunts killers and confronts his own past.
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
              <Link 
                href="https://www.amazon.com/Sebastien-Grey-Books-1-3-Novels-ebook/dp/B0B7F21DT6/ref=sr_1_4?dib=eyJ2IjoiMSJ9.hDMC4HOLFBXqWHJ0ILBqUpip3I7a3FZQiFTcJ6MSQ1sGV9BSIRRO247-lSEcC5S0.TnKhWmEEdDm_5GOenJZIDLhjFjvR7edqUoijPgmd0yo&dib_tag=se&keywords=Ryburn+Dobbs&qid=1746210254&s=audible&sr=1-4-catcorr" 
                target="_blank" 
                className="w-full bg-emerald-700 text-white font-medium py-3 rounded shadow-xl hover:bg-emerald-600 transition-colors text-center"
              >
                Order Complete Collection on Amazon
              </Link>
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
                    <div className="flex flex-col space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Link 
                          href={selectedBook.booksByLink} 
                          target="_blank" 
                          className="bg-emerald-700 text-white font-medium py-3 rounded shadow-lg hover:bg-emerald-600 transition-colors text-center"
                        >
                          Order on Books.by
                        </Link>
                        <Link 
                          href={selectedBook.amazonLink} 
                          target="_blank" 
                          className="bg-transparent border border-emerald-700 text-emerald-400 font-medium py-3 rounded hover:bg-emerald-900/20 transition-colors text-center"
                        >
                          Buy on Amazon
                        </Link>
                      </div>
                      <p className="text-gray-400 text-sm italic">Purchasing on Books.by provides more support directly to the author</p>
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