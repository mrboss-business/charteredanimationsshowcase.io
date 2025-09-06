import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact" className="bg-coffee py-[15px]">
      <div className="max-w-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="fade-up">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-milk mb-6">
              Let's Talk
            </h2>
            <p className="text-milk/80 font-body text-xl mb-8 leading-relaxed">
              If our work inspires you, let's create something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-milk/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-milk" />
                </div>
                <div>
                  <p className="text-milk font-semibold">Phone</p>
                  <p className="text-milk/70">+91 9294848428</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-milk/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-milk" />
                </div>
                <div>
                  <p className="text-milk font-semibold">Email</p>
                  <p className="text-milk/70">charteredanimations@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-milk/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-milk" />
                </div>
                <div>
                  <p className="text-milk font-semibold">Office Hours</p>
                  <p className="text-milk/70">Mon - Sat, 9AM - 10PM IST</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-milk font-heading font-semibold mb-4">Follow Our Work</h3>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@charteredanimations" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-milk/10 rounded-lg flex items-center justify-center hover:bg-milk/20 transition-colors group" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-milk group-hover:text-milk" />
                </a>
                <a href="https://www.instagram.com/charteredanimations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-milk/10 rounded-lg flex items-center justify-center hover:bg-milk/20 transition-colors group" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-milk group-hover:text-milk" />
                </a>
                <a href="https://wa.me/9294848428" target="_blank" rel="noopener noreferrer" className="btn-lift w-auto px-4 h-10 bg-green-500 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="fade-up-delay">
            <form onSubmit={handleSubmit} className="card-elegant bg-milk p-8 space-y-6 px-[30px] py-[9px]">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-coffee font-semibold mb-2">Name *</label>
                  <Input type="text" required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="form-input bg-white border-coffee/20 text-coffee" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-coffee font-semibold mb-2">Email *</label>
                  <Input type="email" required value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="form-input bg-white border-coffee/20 text-coffee" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Project Type</label>
                <Select onValueChange={value => handleInputChange('projectType', value)}>
                  <SelectTrigger className="bg-white border-coffee/20 text-coffee">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3d-animation">3D Animation</SelectItem>
                    <SelectItem value="video-editing">Video Editing</SelectItem>
                    <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                    <SelectItem value="2d-animation">2D Animation</SelectItem>
                    <SelectItem value="architecture">Architecture Visualization</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Message *</label>
                <Textarea required value={formData.message} onChange={e => handleInputChange('message', e.target.value)} className="form-input bg-white border-coffee/20 text-coffee min-h-32" placeholder="Tell us about your project, timeline, and budget..." />
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Attach Files (Optional)</label>
                <Input type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" className="form-input bg-white border-coffee/20 text-coffee" />
                <p className="text-coffee/60 text-sm mt-1">
                  Supported: JPG, PNG, PDF, DOC (Max 10MB each)
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full btn-lift bg-shaded text-milk hover:bg-shaded/90 py-4 text-lg font-semibold">
                Send Message
              </Button>

              <p className="text-coffee/60 text-sm text-center">We'll reply within 24 hours. Usually much faster!</p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;