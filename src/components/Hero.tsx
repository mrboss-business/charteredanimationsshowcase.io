import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState, useRef } from "react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick();
    }
  };

  return <section id="home" className="min-h-screen relative overflow-hidden hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-shaded/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 fade-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-milk/10 border border-milk/20 rounded-full">
              <span className="text-milk/90 font-body font-medium text-sm">Social Media Management Agency</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-milk leading-tight">
                CHARTERED
                <br />
                ANIMATIONS
              </h1>
              <p className="font-accent font-light text-milk/70 text-lg tracking-wider">
                studio
              </p>
            </div>

            {/* Tagline */}
            <p className="text-milk/90 font-body text-xl md:text-2xl font-light leading-relaxed">Shaping Every Creator's Dream into Reality.</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-lift bg-coffee text-milk hover:bg-coffee/90 px-8 py-3 text-lg font-semibold">
                Explore Our Work
              </Button>
              <Button size="lg" variant="outline" className="btn-lift bg-transparent border-2 border-milk text-milk hover:bg-milk hover:text-coffee px-8 py-3 text-lg font-semibold">
                Our Services
              </Button>
            </div>

            {/* Feature Card */}
            <div className="card-elegant bg-milk/10 backdrop-blur-sm p-6 max-w-md">
              <h3 className="text-milk font-heading font-semibold text-lg mb-2">
                Trusted by creators & brands
              </h3>
              <div className="flex flex-wrap gap-2 text-milk/80 font-body text-sm">
                <span className="bg-milk/20 px-3 py-1 rounded-full">3D Animation</span>
                <span className="bg-milk/20 px-3 py-1 rounded-full">Video Editing</span>
                <span className="bg-milk/20 px-3 py-1 rounded-full">AI Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Block */}
          <div className="flex justify-center items-center fade-up-delay">
            <div className="w-full max-w-[500px] lg:max-w-none">
              <div
                className="hero-image-container"
                onClick={handleImageClick}
                onKeyDown={handleKeyPress}
                tabIndex={0}
                role="button"
                aria-label="Upload hero featured image"
              >
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-hidden="true"
                />
                
                {/* Featured Project Badge */}
                <div className="hero-image-badge">
                  Featured Project
                </div>

                {/* Image Content */}
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Hero featured image"
                    className="hero-image"
                  />
                ) : (
                  <div className="hero-image-placeholder">
                    <Upload className="w-8 h-8 text-milk/70" />
                    <span className="text-milk/70 font-body text-sm font-medium">
                      Upload Your Image
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-milk/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-milk/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;