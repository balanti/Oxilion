
'use client';

import Link from 'next/link';

export default function ServiceCards() {
  const services = [
    {
      icon: 'ri-hand-coin-line',
      title: 'Loan & Development Assistance',
      description: 'Professional assistance in securing funding and development support to help businesses access capital for growth and expansion.',
      features: [
        'Loan application preparation and documentation',
        'Financial feasibility studies and business plan development',
        'Grant and funding opportunity identification',
        'Investor pitch deck creation and presentation',
        'Due diligence support for lenders and investors',
        'Compliance with CBN and regulatory requirements'
      ],
      image: 'https://static.readdy.ai/image/95a7c9602536e90360d34d3a760ede4c/3696dad585956477879a4f015aaaddc5.jfif'
    },
    {
      icon: 'ri-survey-line',
      title: 'Project Monitoring & Evaluation',
      description: 'Professional project oversight and evaluation services to ensure successful project delivery and maximize returns on investment.',
      features: [
        'Comprehensive project planning and timeline development',
        'Real-time progress monitoring and reporting',
        'Risk assessment and mitigation strategies',
        'Performance indicator tracking and analysis',
        'Stakeholder communication and management',
        'Post-project evaluation and impact assessment'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20project%20managers%20analyzing%20construction%20and%20development%20projects%20with%20tablets%20and%20clipboards%2C%20monitoring%20progress%20on%20industrial%20sites%2C%20professional%20evaluation%20teams%20in%20hard%20hats%20reviewing%20blueprints&width=600&height=400&seq=monitoring-service&orientation=landscape'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Data Analysis',
      description: 'Advanced data analytics and business intelligence services to transform raw data into actionable insights for informed decision-making.',
      features: [
        'Statistical analysis and data interpretation',
        'Market research and competitive analysis',
        'Financial modeling and forecasting',
        'Business intelligence dashboard development',
        'Predictive analytics and trend analysis',
        'Custom reporting and visualization solutions'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20data%20analysts%20working%20with%20computers%20and%20multiple%20monitors%20displaying%20charts%20graphs%20and%20dashboards%2C%20modern%20data%20center%20environment%20with%20business%20intelligence%20tools%20and%20statistical%20reports&width=600&height=400&seq=data-analysis-service&orientation=landscape'
    },
    {
      icon: 'ri-refund-2-line',
      title: 'Loan Recovery Services',
      description: 'Professional debt recovery and collection services to help financial institutions and businesses recover outstanding loans and debts effectively.',
      features: [
        'Comprehensive debt assessment and portfolio analysis',
        'Strategic recovery plan development and implementation',
        'Legal compliance and regulatory adherence',
        'Negotiation and settlement arrangement services',
        'Asset tracing and recovery procedures',
        'Performance monitoring and reporting systems'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20financial%20recovery%20specialists%20in%20professional%20office%20reviewing%20debt%20portfolios%20and%20legal%20documents%2C%20business%20meeting%20with%20charts%20showing%20recovery%20statistics%20and%20asset%20management%20reports&width=600&height=400&seq=loan-recovery-service&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Receivership Services',
      description: 'Expert receivership and asset management services to protect stakeholder interests and maximize asset value recovery in distressed situations.',
      features: [
        'Court-appointed receivership management',
        'Asset preservation and valuation services',
        'Stakeholder communication and reporting',
        'Business continuity and operational oversight',
        'Asset disposal and liquidation strategies',
        'Legal compliance and documentation support'
      ],
      image: 'https://static.readdy.ai/image/95a7c9602536e90360d34d3a760ede4c/2013f589b2035ac3474f4e69d7988c2b.jfif'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Operational Services',
      description: 'Operational excellence consulting to streamline business processes, improve efficiency, and enhance overall organizational performance.',
      features: [
        'Process optimization and workflow analysis',
        'Organizational restructuring and change management',
        'Performance metrics development and tracking',
        'Quality management system implementation',
        'Cost reduction and efficiency improvement initiatives',
        'Staff training and capacity building programs'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20business%20consultants%20analyzing%20operational%20workflows%20and%20processes%20in%20modern%20manufacturing%20facility%2C%20team%20of%20professionals%20with%20tablets%20and%20clipboards%20reviewing%20efficiency%20metrics%20and%20organizational%20charts&width=600&height=400&seq=operational-service&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Outsourcing Services',
      description: 'Strategic business process outsourcing solutions to help organizations focus on core activities while reducing operational costs and improving efficiency.',
      features: [
        'Financial accounting and bookkeeping outsourcing',
        'Human resources and payroll management',
        'Customer service and call center operations',
        'Information technology support and maintenance',
        'Administrative and back-office functions',
        'Quality assurance and compliance monitoring'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20business%20professionals%20providing%20outsourcing%20services%20in%20modern%20call%20center%20and%20office%20environment%2C%20customer%20service%20representatives%20with%20headsets%2C%20administrative%20staff%20managing%20documents%20and%20digital%20workflows&width=600&height=400&seq=outsourcing-service&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Fintech Services',
      description: 'Innovative financial technology solutions and consulting services to help businesses leverage digital transformation in the financial sector.',
      features: [
        'Digital payment system integration and setup',
        'Mobile banking and wallet solution development',
        'Blockchain and cryptocurrency consulting',
        'Financial app development and optimization',
        'Regulatory compliance for fintech operations',
        'API integration and financial data management'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20fintech%20professionals%20working%20with%20mobile%20payment%20technologies%20and%20digital%20banking%20systems%2C%20modern%20office%20with%20multiple%20screens%20showing%20financial%20apps%20and%20cryptocurrency%20dashboards%2C%20innovative%20technology%20workspace&width=600&height=400&seq=fintech-service&orientation=landscape'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Financial Consulting',
      description: 'Comprehensive financial advisory services to help businesses make informed decisions, optimize financial performance, and achieve long-term growth objectives.',
      features: [
        'Strategic financial planning and budgeting',
        'Investment analysis and portfolio management',
        'Corporate restructuring and merger advisory',
        'Tax planning and optimization strategies',
        'Cash flow management and working capital optimization',
        'Financial risk assessment and mitigation planning'
      ],
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20financial%20consultants%20in%20professional%20business%20meeting%20analyzing%20investment%20portfolios%20and%20financial%20charts%2C%20modern%20conference%20room%20with%20presentation%20screens%20showing%20market%20data%20and%20strategic%20planning%20documents&width=600&height=400&seq=financial-consulting-service&orientation=landscape'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions tailored to meet the unique needs of Nigerian businesses across various sectors and industries.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-green-600`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <i className="ri-check-line text-green-600 text-xl mt-1 mr-3 flex-shrink-0"></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block">
                  Learn More
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
