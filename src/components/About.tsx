// Using the uploaded logo image directly from Lovable uploads
const founderPhoto = "/lovable-uploads/2e4cd760-2c8c-44c2-910a-d885f5036672.png";
const About = () => {
  return <section id="about" className="py-section bg-coffee">
      <div className="max-w-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Card */}
          <div className="card-elegant bg-milk p-8 lg:p-12 fade-up">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-coffee mb-6">
              Who We Are
            </h2>
            
            <div className="prose prose-lg text-coffee/80 space-y-4 font-body leading-relaxed">
              <p>
                I'm <strong className="text-coffee">Chandru Kshatriya</strong>, the founder of Chartered Animations. 
                What started as a passion has now grown into a dedicated studio where creativity meets professionalism.
              </p>
              
              <p>Over the years, we've worked with  creators, helping them engage their audience and strengthen their digital presence. I believe that if you want to go fast, you can go alone — but if you want to achieve big dreams, you need a strong team.</p>
              
              <p>
                With over <strong className="text-coffee">6 years of experience</strong> in the field, I've built a team that brings 
                fresh ideas, unique styles, and unmatched dedication. Together, we don't just deliver projects — 
                we build lasting relationships with our clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-coffee/20">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-coffee">4+</div>
                <div className="font-body text-sm text-coffee/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-coffee">276+</div>
                <div className="font-body text-sm text-coffee/70">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-coffee">93+</div>
                <div className="font-body text-sm text-coffee/70">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Photo & Timeline */}
          <div className="fade-up-delay">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative z-10">
                <img src={founderPhoto} alt="Chandru Kshatriya - Founder of Chartered Animations" className="w-full max-w-md mx-auto rounded-2xl shadow-xl" />
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-milk/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-milk/10 rounded-full blur-3xl"></div>
            </div>

            {/* Timeline/Experience Cards */}
            <div className="mt-8 space-y-4">
              <div className="card-elegant bg-milk/10 p-4 border-l-4 border-milk">
                <h4 className="font-heading font-semibold text-milk text-lg">2018</h4>
                <p className="text-milk/80 font-body">Started journey in 3D animation</p>
              </div>
              <div className="card-elegant bg-milk/10 p-4 border-l-4 border-milk">
                <h4 className="font-heading font-semibold text-milk text-lg">2021</h4>
                <p className="text-milk/80 font-body">Founded Chartered Animations Studio</p>
              </div>
              <div className="card-elegant bg-milk/10 p-4 border-l-4 border-milk">
                <h4 className="font-heading font-semibold text-milk text-lg">2024</h4>
                <p className="text-milk/80 font-body">Expanded to full-service creative agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;