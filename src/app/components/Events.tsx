export default function Events() {
  const events = [
    {
      id: 1,
      title: "Men of Mystery 25th Anniversary",
      date: "November 28, 2025",
      time: "8:00 AM - 2:30 PM",
      location: "The Grand, Long Beach, CA",
      description: "Join Ryburn Dobbs for a reading and signing of his acclaimed Sebastien Grey detective novel."
    },
    
  ];

  return (
    <section id="events" className="py-24 bg-gray-950 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/cod_background.jpg')" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3 font-medium">Calendar</h3>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Upcoming Events</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Meet RyburnDobbs in person at these upcoming events and book signings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-700/50 hover:shadow-emerald-900/20 hover:shadow-xl transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-emerald-500 font-medium mb-1">{event.date}</p>
                    <p className="text-gray-500">{event.time}</p>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-full p-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4 flex items-center">
                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </p>
                <p className="text-gray-500 text-sm border-l-2 border-emerald-800/50 pl-4 mb-6">{event.description}</p>
                
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-emerald-700/30 text-emerald-400 rounded border border-emerald-700/30 hover:bg-emerald-700/50 transition-colors text-sm font-medium">
                    Add to Calendar
                  </button>
                  <button className="px-4 py-2 bg-transparent text-gray-400 rounded border border-gray-700 hover:bg-gray-800 transition-colors text-sm font-medium">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Interested in having RyburnDobbs speak at your event or book club?
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-emerald-700 text-white font-medium rounded shadow-lg hover:bg-emerald-600 transition-colors"
          >
            Request an Event
          </a>
        </div>
      </div>
    </section>
  );
} 