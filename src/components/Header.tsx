import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#portfolio",
    label: "Portfolio"
  }, {
    href: "#courses",
    label: "Courses"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="max-w-container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          
          <div>
            <h1 className="font-heading font-bold text-milk text-xl tracking-wide">
              CHARTERED ANIMATIONS
            </h1>
            <p className="font-accent font-light text-milk/70 text-xs tracking-wider">
              studio
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-milk/90 hover:text-milk font-body font-medium transition-colors duration-200">
              {link.label}
            </a>)}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="default" className="btn-lift bg-coffee text-milk hover:bg-coffee/90">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-milk p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden bg-shaded border-t border-milk/20">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block text-milk/90 hover:text-milk font-body font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>)}
            <Button className="w-full mt-4 bg-coffee text-milk hover:bg-coffee/90">
              Get a Quote
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;