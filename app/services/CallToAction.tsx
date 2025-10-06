'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section 
      id="contact"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url('https://readdy.ai/api/search-image?query=modern%20Nigerian%20business%20handshake%20in%20professional%20office%20environment%2C%20successful%20partnership%20and%20collaboration%2C%20contemporary%20workspace%20with%20city%20skyline%20view%20representing%20trust%20and%20growth&width=1920&height=600&seq=services-cta&orientation=landscape')`
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Contact our expert team today to discuss your business needs and discover how our professional services can help you achieve your goals in Nigeria's dynamic market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Schedule Consultation
          </Link>
          <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Learn About Us
          </Link>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/90">08036920065</p>
            <p className="text-white/90">08023191640</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white/90">info@oxilionng.com</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-white/90">Abuja & Kano Offices</p>
          </div>
        </div>
      </div>
    </section>
  );
}