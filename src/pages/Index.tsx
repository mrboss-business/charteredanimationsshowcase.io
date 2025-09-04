import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="header" className="section-header">
        <Header />
      </section>
      <main>
        <section id="home" className="section-home">
          <Hero />
        </section>
        <section id="about" className="section-about">
          <About />
        </section>
        <section id="services" className="section-services">
          <Services />
        </section>
        <section id="portfolio" className="section-portfolio">
          <Portfolio />
        </section>
        <section id="contact" className="section-contact">
          <Contact />
        </section>
      </main>
      <section id="footer" className="section-footer">
        <Footer />
      </section>
    </div>
  );
};

export default Index;