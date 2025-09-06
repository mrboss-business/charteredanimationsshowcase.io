import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const portfolioItems = [{
    id: 1,
    title: "3D Animation Edit",
    category: "Animation",
    image: portfolio1,
    description: "Professional 3D animation showcasing advanced techniques and storytelling.",
    videoUrl: "https://drive.google.com/file/d/1958E6guYTqJYfUx8_53DMixm0SdNsOqy/preview"
  }, {
    id: 2,
    title: "Function Edit",
    category: "Event Editing",
    image: portfolio2,
    description: "High-energy event video capturing memorable moments with dynamic editing.",
    videoUrl: "https://drive.google.com/file/d/1piLADp6p90RAUk8qXHUmdukSDBVZCGsM/preview"
  }, {
    id: 3,
    title: "Graphic Design",
    category: "Design",
    image: portfolio3,
    description: "Creative graphic design solutions with modern visual aesthetics.",
    videoUrl: "https://drive.google.com/file/d/1Bp7OsZEHC3S_BVYhqtTAx7AZAMxMTzoJ/preview"
  }, {
    id: 4,
    title: "Motion Graphic Edit",
    category: "Motion Graphics",
    image: portfolio4,
    description: "Dynamic motion graphics with smooth animations and visual effects.",
    videoUrl: "https://drive.google.com/file/d/1fD9eQmBfb8ojw5m6FwHHHOrmdRYM1crv/preview"
  }, {
    id: 5,
    title: "Professional Edit",
    category: "Video Editing",
    image: portfolio1,
    description: "High-quality professional video editing with cinematic techniques.",
    videoUrl: "https://drive.google.com/file/d/1KFh0tj06T3vNKlPHTh7GLasWudP6F9cS/preview"
  }];
  const filters = ["All", "Animation", "Event Editing", "Design", "Motion Graphics", "Video Editing"];
  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <section id="portfolio" className="bg-shaded py-[21px]">
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
          {filteredItems.map(item => <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="portfolio-item group cursor-pointer">
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
                          Watch Video
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
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-shaded border-milk/20">
                <div className="relative w-full h-full">
                  {/* Video Container */}
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <iframe src={item.videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={item.title} />
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-shaded via-shaded/80 to-transparent p-6">
                    <h3 className="font-heading font-bold text-2xl text-milk mb-2">
                      {item.title}
                    </h3>
                    <p className="text-milk/80 font-body">
                      {item.description}
                    </p>
                    <span className="inline-block bg-milk/20 text-milk px-3 py-1 rounded-full text-sm font-body mt-3">
                      {item.category}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>)}
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