import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Instagram, MessageCircle } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    href: "#about",
    label: "About"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#portfolio",
    label: "Portfolio"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <footer className="bg-shaded py-[19px]">
      <div className="max-w-container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left - Logo & Tagline */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-milk rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-coffee text-sm">CA</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-milk text-lg">
                  CHARTERED ANIMATIONS
                </h3>
                <p className="font-accent font-light text-milk/70 text-xs">studio</p>
              </div>
            </div>
            <p className="text-milk/70 font-body text-sm leading-relaxed">
              Shaping Every Creator's Dream into Reality through premium animation and creative services.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-milk text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(link => <a key={link.href} href={link.href} className="block text-milk/70 hover:text-milk font-body transition-colors">
                  {link.label}
                </a>)}
            </div>
          </div>

          {/* Right - Newsletter & Social */}
          <div>
            <h4 className="font-heading font-semibold text-milk text-lg mb-4">Stay Updated</h4>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-milk/10 border-milk/20 text-milk placeholder:text-milk/50" />
                <Button className="bg-milk text-coffee hover:bg-milk/90 px-4">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Icons */}
              <div>
                <p className="text-milk/70 font-body text-sm mb-3">Follow us:</p>
                <div className="flex gap-3">
                  <a href="https://www.youtube.com/@charteredanimations" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-milk/10 rounded-lg flex items-center justify-center hover:bg-milk/20 transition-colors group" aria-label="YouTube">
                    <Youtube className="w-5 h-5 text-milk group-hover:text-milk" />
                  </a>
                  <a href="https://www.instagram.com/charteredanimations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-milk/10 rounded-lg flex items-center justify-center hover:bg-milk/20 transition-colors group" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-milk group-hover:text-milk" />
                  </a>
                  <a href="https://wa.me/9294848428" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-milk/10 rounded-lg flex items-center justify-center hover:bg-milk/20 transition-colors group" aria-label="WhatsApp">
                    <MessageCircle className="w-5 h-5 text-milk group-hover:text-milk" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="border-t border-milk/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-milk/60 font-body text-sm">
              © {currentYear} Chartered Animations Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-milk/60 font-body text-sm">
              <a href="#" className="hover:text-milk transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-milk transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;