import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function StrategicInvestmentAdvisoryTechStartup() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Nigerian%20fintech%20startup%20office%20with%20young%20professionals%20working%20on%20laptops%20and%20financial%20technology%2C%20modern%20workspace%20with%20investment%20presentations%20and%20venture%20capital%20meetings%2C%20contemporary%20office%20environment%20with%20charts%20and%20funding%20documents&width=1200&height=600&seq=case-study-hero-2&orientation=landscape')`
        }}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-white">
              <div className="mb-4">
                <Link href="/insights" className="text-green-400 hover:text-green-300 transition-colors">
                  ← Back to Insights
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Strategic Investment Advisory for Tech Startup
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <i className="ri-smartphone-line mr-2"></i>
                  <span>Emerging Fintech Company</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>Project Duration: 12 months</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-money-dollar-circle-line mr-2"></i>
                  <span>$2.5M Series A Funding Secured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Executive Summary */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                An emerging Nigerian fintech startup sought to raise Series A funding while establishing comprehensive regulatory 
                compliance frameworks. Oxilion Limited provided strategic investment advisory services, facilitating successful 
                fundraising, regulatory approval, and operational expansion across multiple states in Nigeria.
              </p>
            </div>

            {/* Client Background */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Background</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Industry:</strong> Financial Technology (Fintech)</li>
                    <li><strong>Founded:</strong> 2021</li>
                    <li><strong>Employees:</strong> 45 team members</li>
                    <li><strong>Headquarters:</strong> Lagos, Nigeria</li>
                    <li><strong>Stage:</strong> Seed to Series A transition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Model</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Digital payment solutions for SMEs</li>
                    <li>• Mobile banking services</li>
                    <li>• Microfinance and lending platform</li>
                    <li>• API integration for third-party services</li>
                    <li>• Transaction processing and merchant services</li>
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
                    Funding and Growth Challenges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Investment Readiness</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Incomplete financial documentation</li>
                        <li>• Lack of investor-ready business plan</li>
                        <li>• Unclear valuation methodology</li>
                        <li>• Limited investor network access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Complex CBN licensing requirements</li>
                        <li>• Data protection compliance gaps</li>
                        <li>• Anti-money laundering protocols</li>
                        <li>• Consumer protection obligations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                    <i className="ri-warning-line mr-2"></i>
                    Market Entry Barriers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The competitive fintech landscape presented several market entry challenges:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Intense competition from established players</li>
                    <li>• Customer acquisition costs increasing rapidly</li>
                    <li>• Limited brand recognition in target markets</li>
                    <li>• Technology infrastructure scalability concerns</li>
                    <li>• Partnership development with traditional financial institutions</li>
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
                    Investment Advisory Strategy
                  </h3>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-file-chart-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Plan Development</h4>
                      <p className="text-sm text-gray-600">Comprehensive investor-ready documentation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Valuation & Modeling</h4>
                      <p className="text-sm text-gray-600">Financial modeling and company valuation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-team-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Investor Matching</h4>
                      <p className="text-sm text-gray-600">Access to relevant investor networks</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-shield-check-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
                      <p className="text-sm text-gray-600">Full regulatory framework implementation</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Documentation</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Business Plan:</strong> 40-page comprehensive investor presentation</li>
                      <li><strong>Financial Models:</strong> 5-year projections with scenario analysis</li>
                      <li><strong>Market Analysis:</strong> Competitive landscape and opportunity sizing</li>
                      <li><strong>Due Diligence Pack:</strong> Legal, financial, and operational documentation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance Framework</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>CBN Licensing:</strong> Mobile Money Operator (MMO) license application</li>
                      <li><strong>Data Protection:</strong> NDPR compliance framework implementation</li>
                      <li><strong>AML/CFT:</strong> Anti-money laundering and terrorism financing controls</li>
                      <li><strong>Consumer Protection:</strong> Complaint handling and dispute resolution procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fundraising Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fundraising Process</h2>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-green-800 mb-6">
                  <i className="ri-roadmap-line mr-2"></i>
                  Investment Timeline & Milestones
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preparation Phase (Months 1-3)</h4>
                      <p className="text-gray-700">Business plan development, financial modeling, and legal structure optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Investor Outreach (Months 4-6)</h4>
                      <p className="text-gray-700">Pitched to 25 investors including VCs, angels, and strategic partners</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Due Diligence & Negotiation (Months 7-9)</h4>
                      <p className="text-gray-700">Detailed due diligence process with 3 lead investors and term sheet negotiations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Closing & Regulatory Approval (Months 10-12)</h4>
                      <p className="text-gray-700">Legal documentation, funding completion, and CBN license approval</p>
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
                  Key Achievements
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">$2.5M</div>
                    <div className="text-sm text-gray-700 font-medium">Series A Funding Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                    <div className="text-sm text-gray-700 font-medium">States Expansion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-700 font-medium">Regulatory Compliance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">15K+</div>
                    <div className="text-sm text-gray-700 font-medium">Active Users Acquired</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Outcomes</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Funding Target</span>
                      <div className="text-right">
                        <div className="text-gray-600 text-sm">Goal: $2.0M</div>
                        <div className="text-green-600 font-semibold">Achieved: $2.5M</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Investor Interest</span>
                      <div className="text-right">
                        <div className="text-gray-600 text-sm">Approaches: 25</div>
                        <div className="text-green-600 font-semibold">Term Sheets: 3</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Valuation</span>
                      <div className="text-right">
                        <div className="text-gray-600 text-sm">Pre-money</div>
                        <div className="text-green-600 font-semibold">$12.5M</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Growth</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Expanded operations to Lagos, Abuja, and Port Harcourt</li>
                    <li>• Achieved break-even within 8 months of funding</li>
                    <li>• Built strategic partnerships with 3 major banks</li>
                    <li>• Increased team size from 45 to 120 employees</li>
                    <li>• Launched 2 additional product lines</li>
                    <li>• Achieved monthly transaction volume of ₦500M+</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regulatory Framework */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance Framework</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    <i className="ri-shield-check-line mr-2"></i>
                    CBN Licensing Success
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Mobile Money Operator License:</strong> Secured full operational approval</li>
                    <li><strong>Switching License:</strong> Approved for payment switching services</li>
                    <li><strong>Compliance Rating:</strong> Achieved 'Satisfactory' rating in first examination</li>
                    <li><strong>Capital Requirements:</strong> Met and exceeded minimum capital thresholds</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">
                    <i className="ri-lock-line mr-2"></i>
                    Data Protection & Security
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>NDPR Compliance:</strong> Full implementation of data protection regulations</li>
                    <li><strong>ISO 27001 Certification:</strong> Information security management system</li>
                    <li><strong>PCI DSS Compliance:</strong> Payment card industry data security standards</li>
                    <li><strong>Cybersecurity Framework:</strong> Comprehensive threat detection and response</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "Oxilion Limited was instrumental in our successful Series A fundraising. Their expertise in investor relations, 
                regulatory compliance, and strategic planning exceeded our expectations. The team's deep understanding of Nigeria's 
                fintech landscape and regulatory environment was invaluable. We couldn't have achieved this milestone without their guidance."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Chioma Okwu</div>
                  <div className="text-gray-600">Co-Founder & CEO</div>
                </div>
              </div>
            </div>

            {/* Future Outlook */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Outlook & Continued Partnership</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Trajectory</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Series B funding preparation for 2025</li>
                    <li>• Pan-African expansion strategy development</li>
                    <li>• Additional product line development</li>
                    <li>• Strategic acquisition opportunities</li>
                    <li>• IPO readiness planning for 2027</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Monthly financial performance reviews</li>
                    <li>• Regulatory compliance monitoring</li>
                    <li>• Investor relations management</li>
                    <li>• Strategic planning and advisory</li>
                    <li>• Board advisory services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Fintech Business?</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Are you a fintech startup seeking investment or regulatory guidance? Our expert team can help you navigate 
                the complex fundraising process and achieve regulatory compliance.
              </p>
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Start Your Funding Journey
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
                      src="https://readdy.ai/api/search-image?query=Nigerian%20manufacturing%20factory%20with%20modern%20equipment%20and%20financial%20consultants%20reviewing%20restructuring%20documents%2C%20industrial%20facility%20with%20business%20professionals%20analyzing%20financial%20reports%20and%20operational%20improvements&width=400&height=250&seq=related-case-1&orientation=landscape"
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
              
              <Link href="/insights/case-studies/agricultural-cooperative-financial-restructuring" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Nigerian%20farmers%20in%20agricultural%20cooperative%20meeting%20with%20financial%20advisors%2C%20rural%20development%20setting%20with%20modern%20farming%20equipment%20and%20financial%20documents%2C%20professional%20consultation%20in%20agricultural%20community%20center&width=400&height=250&seq=related-case-3-alt&orientation=landscape"
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