import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Books from "./components/Books";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Books />
      <Testimonials />
      <About />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
