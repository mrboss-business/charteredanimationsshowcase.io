import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Youtube, Instagram, Linkedin, MessageCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    // Validate files
    if (files) {
      Array.from(files).forEach((file, index) => {
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
          newErrors[`file${index}`] = `${file.name} exceeds 10MB limit`;
        }
      });
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsLoading(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_wmj1tmc';
      const templateId = 'template_ow7m3lh';
      const publicKey = 'OZhvDnnTHgTVnwb9h';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType || 'Not specified',
        message: formData.message,
        to_name: 'Chartered Animations',
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success
      toast.success("Message sent successfully! We'll reply within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: ""
      });
      setFiles(null);
      setErrors({});
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    // Clear file errors
    const newErrors = { ...errors };
    Object.keys(newErrors).forEach(key => {
      if (key.startsWith('file')) delete newErrors[key];
    });
    setErrors(newErrors);
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
            <form onSubmit={handleSubmit} className="card-elegant bg-milk p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-coffee font-semibold mb-2">Name *</label>
                  <Input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={e => handleInputChange('name', e.target.value)} 
                    className={`form-input bg-white border-coffee/20 text-coffee ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your full name" 
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-coffee font-semibold mb-2">Email *</label>
                  <Input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => handleInputChange('email', e.target.value)} 
                    className={`form-input bg-white border-coffee/20 text-coffee ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com" 
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                <Textarea 
                  required 
                  value={formData.message} 
                  onChange={e => handleInputChange('message', e.target.value)} 
                  className={`form-input bg-white border-coffee/20 text-coffee min-h-32 ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell us about your project, timeline, and budget..." 
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Attach Files (Optional)</label>
                <Input 
                  type="file" 
                  multiple 
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" 
                  onChange={handleFileChange}
                  className="form-input bg-white border-coffee/20 text-coffee" 
                />
                <p className="text-coffee/60 text-sm mt-1">
                  Supported: JPG, PNG, PDF, DOC (Max 10MB each)
                </p>
                {files && files.length > 0 && (
                  <div className="mt-2">
                    <p className="text-coffee text-sm font-medium">Selected files:</p>
                    <ul className="text-coffee/70 text-sm">
                      {Array.from(files).map((file, index) => (
                        <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)</li>
                      ))}
                    </ul>
                  </div>
                )}
                {Object.keys(errors).some(key => key.startsWith('file')) && (
                  <div className="mt-1">
                    {Object.entries(errors)
                      .filter(([key]) => key.startsWith('file'))
                      .map(([key, error]) => (
                        <p key={key} className="text-red-500 text-sm">{error}</p>
                      ))}
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="w-full btn-lift bg-shaded text-milk hover:bg-shaded/90 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              <p className="text-coffee/60 text-sm text-center">We'll reply within 24 hours. Usually much faster!</p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;