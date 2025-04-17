"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "success" | null;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-gray-950 text-white relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-fixed opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: "url('/images/multibook.jpg')",
          filter: "brightness(0.15) contrast(0.9)"
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3 font-medium">Reach Out</h3>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have questions about the Sebastian Grey series? Want to book RyburnDobbs for an event or interview?
            We&apos;d love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="h-full">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 h-full shadow-xl">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">Email</h4>
                    <p className="text-gray-300 mb-1">contact@ryburnddobbs.com</p>
                    <p className="text-gray-500 text-sm">For media inquiries: press@ryburnddobbs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">Literary Representation</h4>
                    <p className="text-gray-300 mb-1">Evergreen Literary Agency</p>
                    <p className="text-gray-500 text-sm">Portland, Oregon</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">Publisher</h4>
                    <p className="text-gray-300 mb-1">Timber Press</p>
                    <p className="text-gray-500 text-sm">Seattle, Washington</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gray-800">
                  <h4 className="text-lg font-semibold mb-4 text-emerald-300">Follow RyburnDobbs</h4>
                  <div className="flex space-x-5">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-900/50 transition-colors flex items-center justify-center text-gray-400 hover:text-emerald-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-900/50 transition-colors flex items-center justify-center text-gray-400 hover:text-emerald-400">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-900/50 transition-colors flex items-center justify-center text-gray-400 hover:text-emerald-400">
                      <span className="sr-only">Goodreads</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.525 15.977V.49h-2.059v2.906h-.064a3.3 3.3 0 00-.933-1.064A3.215 3.215 0 0015.31 1.65 3.247 3.247 0 0012.835.49a3.406 3.406 0 00-3.022 1.849h-.064V.49 15.977h2.059V8.5a3.393 3.393 0 01.467-1.752 3.461 3.461 0 011.208-1.217 3.363 3.363 0 011.719-.48c.224.005.444.009.66.064a3.12 3.12 0 01.933.3 3.143 3.143 0 011.01.744 3.336 3.336 0 01.619 1.003c.145.397.223.814.231 1.234v7.588zM5.654 5.13A3.806 3.806 0 00 8.085 4.155c.072 0 .162.063 1.622.063.826-.017 1.65.095 2.452.336V5.93a7.361 7.361 0 00-2.452-.336c-1.595-.056-2.763.212-3.566.801a3.541 3.541 0 00-1.334 2.953c0 1.282.393 2.297 1.187 3.046.794.75 1.877 1.118 3.248 1.118a7.362 7.362 0 002.944-.667V8.062h-2.058v1.595H8.96v2.445l.064.064c.688.384 1.453.645 2.245.766a5.48 5.48 0 01-1.208.144c-1.06 0-1.807-.28-2.245-.845-.439-.565-.658-1.371-.658-2.417.008-.809.175-1.608.491-2.354a.859.859 0 000-.256z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                    placeholder="Book signing request"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-700 text-white font-medium py-3 px-4 rounded shadow-xl hover:bg-emerald-600 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
                
                {submitStatus === "success" && (
                  <div className="p-4 bg-emerald-950/50 border border-emerald-700 rounded-md text-emerald-300">
                    Your message has been sent! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 