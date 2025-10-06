'use client';

export default function ConsultationHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=professional%20business%20consultation%20meeting%20in%20modern%20Nigerian%20office%2C%20financial%20advisors%20discussing%20strategy%20with%20clients%20around%20conference%20table%2C%20contemporary%20corporate%20environment%20with%20documents%20and%20laptops&width=1920&height=600&seq=consultation-hero&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Schedule Your Free Consultation
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Get expert advice tailored to your business needs. Our team will analyze your situation and provide strategic recommendations for success.
          </p>
        </div>
      </div>
    </section>
  );
}