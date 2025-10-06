'use client';

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: 'ri-team-line',
      title: 'Expert Team',
      description: 'Certified professionals with deep expertise in Nigerian business environment and international best practices.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'ri-time-line',
      title: 'Proven Track Record',
      description: 'Over 7 years of successful project delivery with 98% client satisfaction rate across diverse industries.',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Round-the-clock support and consultation services to address your business needs whenever they arise.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'ri-price-tag-line',
      title: 'Competitive Pricing',
      description: 'Transparent and competitive pricing structure with flexible payment options to suit your budget.',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Full compliance with CBN, SEC, and other Nigerian regulatory requirements and international standards.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'ri-global-line',
      title: 'Multi-Location Coverage',
      description: 'Service delivery across major Nigerian cities including Lagos, Abuja, Port Harcourt, and Kano.',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Oxilion Limited?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine local expertise with international standards to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className={`w-16 h-16 ${benefit.color} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${benefit.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-600 mb-2">₦15B+</div>
              <div className="text-gray-600">Assets Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}