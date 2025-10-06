'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=professional%20Nigerian%20business%20office%20reception%20area%20with%20modern%20design%2C%20welcoming%20atmosphere%20for%20client%20meetings%2C%20contemporary%20furniture%20and%20corporate%20environment%20with%20natural%20lighting%20and%20green%20accents&width=1920&height=600&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Get In Touch With Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Ready to discuss your business needs? Our expert team is here to provide tailored financial solutions for your success.
          </p>
        </div>
      </div>
    </section>
  );
}