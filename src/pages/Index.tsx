import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const body = document.body;
      
      if (scrollY < 600) {
        body.style.backgroundColor = "hsl(var(--shaded-black))"; // Hero/Header section
      } else if (scrollY < 1200) {
        body.style.backgroundColor = "hsl(var(--milk-yellow))"; // About/Services section
      } else if (scrollY < 1800) {
        body.style.backgroundColor = "hsl(var(--coffee-brown))"; // Portfolio section
      } else {
        body.style.backgroundColor = "hsl(var(--shaded-black))"; // Contact/Footer section
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial background color

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;