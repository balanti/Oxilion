'use client';

export default function ConsultationBenefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Get From Your Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our free consultation is designed to provide immediate value and actionable insights for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-search-eye-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive review of your current financial position, operational efficiency, and growth opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-lightbulb-line text-3xl text-gray-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored strategies and actionable recommendations to address your specific business challenges and goals.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-roadmap-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Roadmap</h3>
            <p className="text-gray-600 leading-relaxed">
              Clear step-by-step plan outlining how to implement our recommendations and achieve your objectives.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-calculator-line text-3xl text-gray-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Projections</h3>
            <p className="text-gray-600 leading-relaxed">
              Preliminary financial forecasts and ROI estimates for proposed initiatives and investments.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-shield-check-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
            <p className="text-gray-600 leading-relaxed">
              Identification of potential risks and mitigation strategies to protect your business interests.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-customer-service-2-line text-3xl text-gray-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support Plan</h3>
            <p className="text-gray-600 leading-relaxed">
              Customized service proposal outlining how we can continue to support your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}