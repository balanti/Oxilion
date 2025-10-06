'use client';

export default function ServiceHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=modern%20Nigerian%20financial%20consulting%20office%20with%20professional%20team%20of%20advisors%20reviewing%20business%20documents%20and%20financial%20reports%2C%20contemporary%20workspace%20with%20computers%20and%20charts%2C%20collaborative%20business%20environment%20with%20natural%20lighting%20and%20corporate%20atmosphere&width=1920&height=1080&seq=services-hero-new&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Services for Nigerian Businesses
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Comprehensive financial consulting and management solutions designed to drive growth, ensure compliance, and maximize success in Nigeria's dynamic business environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Explore Services
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}