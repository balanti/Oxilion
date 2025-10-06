import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function TransformingManufacturingFinancialStructure() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Nigerian%20manufacturing%20factory%20with%20modern%20equipment%20and%20financial%20consultants%20reviewing%20restructuring%20documents%2C%20industrial%20facility%20with%20business%20professionals%20analyzing%20financial%20reports%20and%20operational%20improvements%20in%20contemporary%20office%20setting&width=1200&height=600&seq=case-study-hero-1&orientation=landscape')`
        }}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-white">
              <div className="mb-4">
                <Link href="/insights" className="text-green-400 hover:text-green-300 transition-colors">
                  ← Back to Insights
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforming Manufacturing Company's Financial Structure
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <i className="ri-building-line mr-2"></i>
                  <span>Leading Nigerian Manufacturing Firm</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>Project Duration: 8 months</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-trophy-line mr-2"></i>
                  <span>40% Cash Flow Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Executive Summary */}
            <div className="bg-green-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A leading Nigerian manufacturing company faced significant financial challenges including high debt servicing costs, 
                inadequate working capital, and declining operational efficiency. Through Oxilion Limited's comprehensive financial 
                restructuring approach, the company achieved remarkable improvements in cash flow management, reduced debt burden, 
                and enhanced overall financial performance.
              </p>
            </div>

            {/* Client Background */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Background</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Industry:</strong> Food Processing & Manufacturing</li>
                    <li><strong>Employees:</strong> 450+ staff</li>
                    <li><strong>Annual Revenue:</strong> ₦12 billion</li>
                    <li><strong>Locations:</strong> Lagos, Kano, and Onitsha</li>
                    <li><strong>Established:</strong> 1998</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Operations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Food processing and packaging</li>
                    <li>• Distribution across West Africa</li>
                    <li>• Private label manufacturing</li>
                    <li>• Export operations to neighboring countries</li>
                    <li>• Retail and wholesale channels</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenge Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge Analysis</h2>
              <div className="space-y-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">
                    <i className="ri-alert-line mr-2"></i>
                    Primary Financial Challenges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Debt Management Issues</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• High interest rate loans (18-22%)</li>
                        <li>• Multiple uncoordinated credit facilities</li>
                        <li>• Poor debt-to-equity ratio (75:25)</li>
                        <li>• Irregular debt servicing schedules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cash Flow Problems</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Seasonal cash flow variations</li>
                        <li>• Extended customer payment cycles</li>
                        <li>• Inventory management inefficiencies</li>
                        <li>• Limited working capital reserves</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                    <i className="ri-warning-line mr-2"></i>
                    Operational Impact
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The financial constraints were significantly impacting the company's operational capacity:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Production delays due to supplier payment issues</li>
                    <li>• Inability to take advantage of bulk purchase discounts</li>
                    <li>• Delayed maintenance affecting equipment efficiency</li>
                    <li>• Limited capacity for market expansion opportunities</li>
                    <li>• Employee morale issues due to delayed salary payments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Implementation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Implementation</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                    <i className="ri-lightbulb-line mr-2"></i>
                    Strategic Approach
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-search-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Analysis</h4>
                      <p className="text-sm text-gray-600">Comprehensive financial audit and assessment</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-settings-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Restructuring</h4>
                      <p className="text-sm text-gray-600">Debt consolidation and refinancing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-rocket-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Optimization</h4>
                      <p className="text-sm text-gray-600">Working capital and process improvements</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Debt Restructuring Strategy</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Loan Consolidation:</strong> Merged 7 separate facilities into 2 structured loans</li>
                      <li><strong>Interest Rate Negotiation:</strong> Reduced average rate from 20% to 14%</li>
                      <li><strong>Tenor Extension:</strong> Extended repayment period from 3 to 7 years</li>
                      <li><strong>Moratorium Period:</strong> Secured 6-month payment holiday for restructuring</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Working Capital Optimization</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Inventory Management:</strong> Implemented just-in-time procurement system</li>
                      <li><strong>Receivables Management:</strong> Introduced invoice factoring and collection improvements</li>
                      <li><strong>Supplier Relations:</strong> Negotiated extended payment terms with key suppliers</li>
                      <li><strong>Cash Flow Forecasting:</strong> Established 13-week rolling cash flow projections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
              
              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">
                  <i className="ri-trophy-line mr-2"></i>
                  Key Performance Improvements
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                    <div className="text-sm text-gray-700 font-medium">Cash Flow Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
                    <div className="text-sm text-gray-700 font-medium">Debt Servicing Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                    <div className="text-sm text-gray-700 font-medium">Working Capital Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">18%</div>
                    <div className="text-sm text-gray-700 font-medium">Production Capacity Increase</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Debt-to-Equity Ratio</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">75:25</div>
                        <div className="text-green-600 font-semibold">55:45</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Current Ratio</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">0.8:1</div>
                        <div className="text-green-600 font-semibold">1.4:1</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Interest Coverage Ratio</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">1.2x</div>
                        <div className="text-green-600 font-semibold">3.8x</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Eliminated production delays and improved delivery times</li>
                    <li>• Restored supplier confidence and secured better terms</li>
                    <li>• Improved employee satisfaction with regular salary payments</li>
                    <li>• Enhanced capacity to pursue new market opportunities</li>
                    <li>• Established robust financial controls and reporting systems</li>
                    <li>• Achieved compliance with all banking covenants</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "Working with Oxilion Limited was transformative for our business. Their team understood our challenges 
                and provided practical solutions that delivered immediate results. The debt restructuring process was 
                seamless, and their ongoing support has been invaluable. We now have the financial foundation to pursue 
                our expansion plans with confidence."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-xl text-green-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adebayo Ogundimu</div>
                  <div className="text-gray-600">Managing Director</div>
                </div>
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons & Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Success Factors</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Early intervention before financial distress escalates</li>
                    <li>• Comprehensive stakeholder engagement and communication</li>
                    <li>• Integrated approach combining debt restructuring with operational improvements</li>
                    <li>• Strong management commitment to the restructuring process</li>
                    <li>• Realistic financial projections and conservative assumptions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Manufacturing companies with seasonal cash flows</li>
                    <li>• Businesses with multiple uncoordinated credit facilities</li>
                    <li>• Companies experiencing rapid growth with inadequate financing</li>
                    <li>• Organizations seeking to optimize working capital management</li>
                    <li>• Firms preparing for expansion or acquisition financing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Transform Your Financial Structure</h2>
              <p className="text-green-100 mb-6 leading-relaxed">
                Are you facing similar financial challenges? Our expert team can help you restructure your debt, 
                optimize working capital, and improve operational efficiency.
              </p>
              <Link href="/contact">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Schedule Your Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/case-studies/strategic-investment-advisory-tech-startup" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Nigerian%20fintech%20startup%20office%20with%20young%20professionals%20working%20on%20laptops%2C%20modern%20technology%20environment%2C%20investment%20meeting%20with%20venture%20capitalists%20and%20business%20advisors%20in%20contemporary%20workspace&width=400&height=250&seq=related-case-2&orientation=landscape"
                      alt="Strategic Investment Advisory for Tech Startup"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      Strategic Investment Advisory for Tech Startup
                    </h3>
                    <p className="text-gray-600 mb-4">How we helped an emerging fintech secure $2.5M Series A funding and achieve regulatory compliance.</p>
                    <span className="text-green-600 font-semibold">Read Case Study →</span>
                  </div>
                </article>
              </Link>
              
              <Link href="/insights/case-studies/agricultural-cooperative-financial-restructuring" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Nigerian%20farmers%20in%20agricultural%20cooperative%20meeting%20with%20financial%20advisors%2C%20rural%20development%20setting%20with%20modern%20farming%20equipment%20and%20financial%20documents%2C%20professional%20consultation%20in%20agricultural%20community%20center&width=400&height=250&seq=related-case-3&orientation=landscape"
                      alt="Agricultural Cooperative Financial Restructuring"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      Agricultural Cooperative Financial Restructuring
                    </h3>
                    <p className="text-gray-600 mb-4">Modernizing financial systems for a Northern Nigeria agricultural cooperative with $1.2M development financing.</p>
                    <span className="text-green-600 font-semibold">Read Case Study →</span>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}