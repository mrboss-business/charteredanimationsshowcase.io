import { Zap, Video, Box, Palette, PenTool, Search, Users, Building, Home, Shapes, Layers } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Zap className="w-6 h-6" />,
    title: "Motion Graphic Edits",
    description: "Dynamic animated graphics for brands & ads.",
    popular: true
  }, {
    icon: <Video className="w-6 h-6" />,
    title: "Video Editing",
    description: "Cinematic edits, reels, ads & storytelling cuts.",
    popular: true
  }, {
    icon: <Box className="w-6 h-6" />,
    title: "3D Animation",
    description: "Character, product, and environment animation.",
    popular: true
  }, {
    icon: <Palette className="w-6 h-6" />,
    title: "2D Animation",
    description: "Explainer & stylized 2D animation workflows."
  }, {
    icon: <PenTool className="w-6 h-6" />,
    title: "Content Writing",
    description: "Scripts, captions & social content tailored to your goals."
  }, {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Technical & on-page SEO to boost visibility."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Personal Assistance",
    description: "Dedicated support & guidance for creators."
  }, {
    icon: <Building className="w-6 h-6" />,
    title: "Architecture Design",
    description: "3D visualization for architecture & interiors."
  }, {
    icon: <Home className="w-6 h-6" />,
    title: "Real Estate Projects",
    description: "Walkthroughs, renders and marketing visuals."
  }, {
    icon: <Shapes className="w-6 h-6" />,
    title: "3D Modeling",
    description: "High-detail models for games, products & film."
  }, {
    icon: <Layers className="w-6 h-6" />,
    title: "Graphic Design",
    description: "Logos, branding & marketing collaterals."
  }];
  return <section id="services" className="bg-milk py-[4px]">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-coffee mb-4 py-[22px]">
            What We Do
          </h2>
          <p className="text-coffee/70 font-body text-lg max-w-2xl mx-auto">
            Comprehensive creative services to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up-delay">
          {services.map((service, index) => <div key={index} className="card-elegant bg-white p-6 relative group">
              {/* Popular Badge */}
              {service.popular && <div className="absolute -top-3 -right-3 bg-coffee text-milk text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>}

              {/* Icon */}
              <div className="w-12 h-12 bg-coffee/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coffee/20 transition-colors">
                <div className="text-coffee">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-coffee mb-2">
                {service.title}
              </h3>
              <p className="text-warm-gray font-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-coffee/20 rounded-xl transition-colors pointer-events-none"></div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6 fade-up">
          <p className="text-coffee/70 font-body mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          
        </div>
      </div>
    </section>;
};
export default Services;