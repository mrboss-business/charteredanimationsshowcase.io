import { useState } from "react";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const portfolioItems = [{
    id: 1,
    title: "Animated Short Film — Blender 3D",
    category: "Animation",
    image: portfolio1,
    description: "Short character-driven film demonstrating animation & lighting.",
    link: "#"
  }, {
    id: 2,
    title: "Motion Graphics Advertisement",
    category: "Editing",
    image: portfolio2,
    description: "Dynamic brand advertisement with kinetic typography.",
    link: "#"
  }, {
    id: 3,
    title: "Architectural Visualization",
    category: "Architecture",
    image: portfolio3,
    description: "Photorealistic 3D rendering of modern residential complex.",
    link: "#"
  }, {
    id: 4,
    title: "Explainer Video Series",
    category: "2D",
    image: portfolio4,
    description: "Educational content with engaging 2D animation style.",
    link: "#"
  }, {
    id: 5,
    title: "Product Launch Campaign",
    category: "Editing",
    image: portfolio2,
    description: "Complete video campaign for tech product launch.",
    link: "#"
  }, {
    id: 6,
    title: "Character Animation Reel",
    category: "Animation",
    image: portfolio1,
    description: "Showcase of various character animations and rigging work.",
    link: "#"
  }];
  const filters = ["All", "Animation", "Editing", "2D", "Architecture"];
  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <section id="portfolio" className="py-section bg-shaded">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 fade-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-milk mb-4 px-[5px] my-px mx-px py-[11px]">
            Our Work
          </h2>
          <p className="text-milk/70 font-body text-lg max-w-2xl my-0 py-0 px-0 mx-[200px]">
            Explore our portfolio of creative projects across various industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-up-delay py-0 px-0">
          {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full font-body font-medium transition-all duration-300 ${activeFilter === filter ? "bg-milk text-coffee" : "bg-milk/10 text-milk hover:bg-milk/20"}`}>
              {filter}
            </button>)}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          {filteredItems.map(item => <div key={item.id} className="portfolio-item group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                
                {/* Overlay */}
                <div className="portfolio-overlay">
                  <div className="text-center space-y-4">
                    <h3 className="font-heading font-semibold text-xl text-milk">
                      {item.title}
                    </h3>
                    <p className="text-milk/80 font-body text-sm px-4">
                      {item.description}
                    </p>
                    <button className="inline-flex items-center gap-2 bg-milk text-coffee px-4 py-2 rounded-lg font-semibold hover:bg-milk/90 transition-colors">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-milk/10 text-milk/80 px-3 py-1 rounded-full text-sm font-body">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-milk text-lg group-hover:text-milk/80 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>)}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-lift bg-milk/10 border-2 border-milk text-milk px-8 py-3 rounded-xl font-semibold hover:bg-milk hover:text-coffee transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </section>;
};
export default Portfolio;