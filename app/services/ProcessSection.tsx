'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive consultation to understand your business needs, challenges, and objectives.',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'Analysis & Planning',
      description: 'Our experts conduct thorough analysis and develop customized strategies tailored to your specific requirements.',
      icon: 'ri-search-line'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work closely with your team to implement solutions, ensuring smooth execution and minimal disruption.',
      icon: 'ri-tools-line'
    },
    {
      number: '04',
      title: 'Monitoring & Support',
      description: 'Continuous monitoring, evaluation, and ongoing support to ensure long-term success and optimal results.',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful outcomes and exceeds client expectations every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2" style={{ width: 'calc(100% - 5rem)' }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-gray-400"></i>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}