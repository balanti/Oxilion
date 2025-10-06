import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function AgriculturalCooperativeFinancialRestructuring() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Nigerian%20farmers%20in%20agricultural%20cooperative%20meeting%20with%20financial%20advisors%20and%20development%20specialists%2C%20rural%20setting%20with%20modern%20farming%20equipment%20and%20financial%20planning%20documents%2C%20agricultural%20community%20center%20with%20professional%20consultation%20and%20cooperative%20development%20activities&width=1200&height=600&seq=case-study-hero-3&orientation=landscape')`
        }}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-white">
              <div className="mb-4">
                <Link href="/insights" className="text-green-400 hover:text-green-300 transition-colors">
                  ← Back to Insights
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Agricultural Cooperative Financial Restructuring
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <i className="ri-plant-line mr-2"></i>
                  <span>Northern Nigeria Agricultural Cooperative</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>Project Duration: 10 months</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-money-dollar-circle-line mr-2"></i>
                  <span>$1.2M Development Financing</span>
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
                A Northern Nigeria agricultural cooperative sought to modernize their financial management systems and access 
                development financing to support member farmers. Oxilion Limited implemented a comprehensive digital transformation 
                strategy, securing significant development funding and improving operational efficiency for over 2,000 cooperative members.
              </p>
            </div>

            {/* Client Background */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Background</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cooperative Profile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Type:</strong> Multi-Purpose Agricultural Cooperative</li>
                    <li><strong>Established:</strong> 2003</li>
                    <li><strong>Members:</strong> 2,100+ farmers</li>
                    <li><strong>Location:</strong> Kano State, Nigeria</li>
                    <li><strong>Primary Crops:</strong> Rice, Maize, Millet, Sorghum</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Operations Scope</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Input supply and distribution</li>
                    <li>• Grain aggregation and marketing</li>
                    <li>• Microfinance services</li>
                    <li>• Agricultural extension services</li>
                    <li>• Processing and value addition</li>
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
                    Financial Management Challenges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">System Limitations</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Manual record-keeping systems</li>
                        <li>• Limited financial reporting capabilities</li>
                        <li>• Inadequate member account management</li>
                        <li>• Poor loan portfolio tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Funding Access Issues</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Limited access to development finance</li>
                        <li>• Lack of bankable business proposals</li>
                        <li>• Insufficient collateral documentation</li>
                        <li>• Complex donor application processes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                    <i className="ri-warning-line mr-2"></i>
                    Operational Constraints
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The cooperative faced several operational challenges that limited growth potential:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Seasonal cash flow constraints affecting input procurement</li>
                    <li>• Limited storage and processing facilities</li>
                    <li>• Inefficient supply chain and market linkages</li>
                    <li>• Lack of modern agricultural equipment and technology</li>
                    <li>• Insufficient capacity building for members and staff</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Implementation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Implementation</h2>
              
              <div className="space-y-8">
                <div className="bg-green-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">
                    <i className="ri-lightbulb-line mr-2"></i>
                    Digital Transformation Strategy
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-computer-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">System Digitization</h4>
                      <p className="text-sm text-gray-600">Implementation of digital financial management system</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-graduation-cap-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Capacity Building</h4>
                      <p className="text-sm text-gray-600">Training programs for staff and member farmers</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Funding Access</h4>
                      <p className="text-sm text-gray-600">Development finance procurement and management</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Financial System</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Core Banking Module:</strong> Member accounts, savings, and loan management</li>
                      <li><strong>Inventory System:</strong> Input procurement and distribution tracking</li>
                      <li><strong>Market Linkage Platform:</strong> Grain aggregation and sales management</li>
                      <li><strong>Reporting Dashboard:</strong> Real-time financial and operational reporting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Finance Strategy</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Proposal Development:</strong> Comprehensive funding applications to development partners</li>
                      <li><strong>Grant Management:</strong> Systems for tracking and reporting grant utilization</li>
                      <li><strong>Impact Measurement:</strong> Framework for measuring and documenting social impact</li>
                      <li><strong>Compliance Framework:</strong> Ensuring adherence to donor requirements and regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Success */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Funding Success</h2>
              
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-6">
                  <i className="ri-funds-line mr-2"></i>
                  Secured Funding Sources
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">International Development Partners</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">World Bank FADAMA Project</span>
                          <span className="text-blue-600 font-bold">$650,000</span>
                        </div>
                        <p className="text-sm text-gray-600">Infrastructure development and capacity building</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">IFAD Value Chain Program</span>
                          <span className="text-blue-600 font-bold">$350,000</span>
                        </div>
                        <p className="text-sm text-gray-600">Processing equipment and market linkage support</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Local Development Finance</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">Bank of Agriculture Loan</span>
                          <span className="text-blue-600 font-bold">$150,000</span>
                        </div>
                        <p className="text-sm text-gray-600">Working capital for input procurement</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">CBN Anchor Borrowers Program</span>
                          <span className="text-blue-600 font-bold">$50,000</span>
                        </div>
                        <p className="text-sm text-gray-600">Direct farmer financing and input support</p>
                      </div>
                    </div>
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
                  Transformational Outcomes
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                    <div className="text-sm text-gray-700 font-medium">Member Participation Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">$1.2M</div>
                    <div className="text-sm text-gray-700 font-medium">Development Financing Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-sm text-gray-700 font-medium">Loan Recovery Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
                    <div className="text-sm text-gray-700 font-medium">Crop Yield Improvement</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Member Savings</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">₦45M</div>
                        <div className="text-green-600 font-semibold">₦125M</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Loan Portfolio</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">₦25M</div>
                        <div className="text-green-600 font-semibold">₦85M</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Annual Turnover</span>
                      <div className="text-right">
                        <div className="text-red-600 line-through text-sm">₦180M</div>
                        <div className="text-green-600 font-semibold">₦420M</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Improvements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Automated financial record-keeping and reporting</li>
                    <li>• Established 5 new grain collection centers</li>
                    <li>• Reduced post-harvest losses by 35%</li>
                    <li>• Improved access to quality inputs and extension services</li>
                    <li>• Enhanced market linkages with 12 off-takers</li>
                    <li>• Trained 150 farmers in modern agricultural practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digital Transformation Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Transformation Impact</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">
                    <i className="ri-smartphone-line mr-2"></i>
                    Mobile Banking Services
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mobile money integration for member transactions</li>
                    <li>• SMS-based account balance and transaction alerts</li>
                    <li>• Digital loan application and approval system</li>
                    <li>• Mobile-based savings account management</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">
                    <i className="ri-bar-chart-box-line mr-2"></i>
                    Data Analytics & Insights
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Real-time dashboard for management decision-making</li>
                    <li>• Crop yield and weather pattern analysis</li>
                    <li>• Member financial behavior insights</li>
                    <li>• Market price trends and forecasting</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4">
                    <i className="ri-cloud-line mr-2"></i>
                    Cloud-Based Operations
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Secure cloud storage for all financial records</li>
                    <li>• Multi-location access for cooperative branches</li>
                    <li>• Automated backup and disaster recovery</li>
                    <li>• Integration with government databases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "The transformation of our cooperative through Oxilion Limited's support has been remarkable. The digital systems 
                have revolutionized how we manage our operations, and the development funding has enabled us to serve our members 
                better than ever before. Our farmers are more prosperous, and our cooperative is now financially sustainable."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-xl text-green-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Malam Ibrahim Tanko</div>
                  <div className="text-gray-600">Chairman, Board of Directors</div>
                </div>
              </div>
            </div>

            {/* Sustainability & Future Plans */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability & Future Plans</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Sustainability</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Established revenue diversification through processing activities</li>
                    <li>• Created reserve fund for system maintenance and upgrades</li>
                    <li>• Developed local technical capacity for ongoing support</li>
                    <li>• Implemented robust governance and accountability mechanisms</li>
                    <li>• Established partnerships with technology service providers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expansion Plans</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Replication model for 5 additional cooperatives</li>
                    <li>• Value chain integration through processing facilities</li>
                    <li>• Agricultural insurance product development</li>
                    <li>• Youth farmer engagement and onboarding program</li>
                    <li>• Climate-smart agriculture adoption initiative</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Transform Your Agricultural Cooperative</h2>
              <p className="text-green-100 mb-6 leading-relaxed">
                Are you managing an agricultural cooperative that needs financial modernization and development funding? 
                Let our expert team help you achieve sustainable growth and better serve your members.
              </p>
              <Link href="/contact">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Start Your Transformation
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
              <Link href="/insights/case-studies/transforming-manufacturing-financial-structure" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Nigerian%20manufacturing%20factory%20with%20modern%20equipment%20and%20financial%20consultants%20reviewing%20restructuring%20documents%2C%20industrial%20facility%20with%20business%20professionals%20analyzing%20financial%20reports%20and%20operational%20improvements&width=400&height=250&seq=related-case-1-alt&orientation=landscape"
                      alt="Transforming Manufacturing Company's Financial Structure"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      Transforming Manufacturing Company's Financial Structure
                    </h3>
                    <p className="text-gray-600 mb-4">How we helped a leading manufacturing firm achieve 40% cash flow improvement through comprehensive debt restructuring.</p>
                    <span className="text-green-600 font-semibold">Read Case Study →</span>
                  </div>
                </article>
              </Link>
              
              <Link href="/insights/case-studies/strategic-investment-advisory-tech-startup" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Nigerian%20fintech%20startup%20office%20with%20young%20professionals%20working%20on%20laptops%2C%20modern%20technology%20environment%2C%20investment%20meeting%20with%20venture%20capitalists%20and%20business%20advisors%20in%20contemporary%20workspace&width=400&height=250&seq=related-case-2-alt&orientation=landscape"
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
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}