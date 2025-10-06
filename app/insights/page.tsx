
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      slug: 'cbn-digital-banking-guidelines',
      title: "CBN Introduces New Guidelines for Digital Banking in Nigeria",
      excerpt: "The Central Bank of Nigeria has released comprehensive guidelines to regulate digital banking operations, focusing on enhanced cybersecurity measures, customer data protection, and operational risk management frameworks. These new regulations aim to strengthen the digital banking ecosystem while ensuring consumer protection and maintaining financial system stability in Nigeria's rapidly evolving fintech landscape.",
      date: "January 20, 2024",
      category: "Regulatory",
      readTime: "6 min read",
      image: "https://readdy.ai/api/search-image?query=Central%20Bank%20of%20Nigeria%20headquarters%20building%20in%20Abuja%20with%20Nigerian%20banking%20officials%20reviewing%20digital%20banking%20policy%20documents%20and%20regulations%20in%20modern%20conference%20room%20with%20contemporary%20technology%20and%20professional%20atmosphere%20representing%20regulatory%20oversight&width=400&height=250&seq=cbn-digital-banking-news&orientation=landscape"
    },
    {
      id: 2,
      slug: 'nigeria-economic-growth-2024',
      title: "Nigeria's Economic Growth Projections for 2024",
      excerpt: "Latest economic indicators and forecasting models suggest Nigeria's economy is positioned for moderate growth in 2024, driven by increased oil production capacity, agricultural sector improvements, and expanding manufacturing output. The International Monetary Fund and World Bank projections indicate potential GDP growth of 3.2% to 3.8%, supported by infrastructure investments and improved business environment reforms across key economic sectors.",
      date: "January 18, 2024",
      category: "Economic Analysis",
      readTime: "8 min read",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20economic%20analysts%20and%20government%20officials%20studying%20growth%20projection%20charts%20and%20economic%20data%20in%20modern%20Abuja%20office%20with%20computers%20displaying%20financial%20graphs%20and%20statistical%20models%20representing%20economic%20forecasting%20and%20planning&width=400&height=250&seq=nigeria-growth-projections&orientation=landscape"
    },
    {
      id: 3,
      slug: 'tax-reforms-impact-businesses',
      title: "New Tax Reforms Impact on Nigerian Businesses",
      excerpt: "The Federal Inland Revenue Service has implemented significant tax policy reforms affecting corporate taxation, VAT structures, and compliance requirements across various business sectors. These changes include modified tax rates for small and medium enterprises, enhanced digital tax filing systems, and new incentives for manufacturing and technology companies. Businesses are advised to review their tax strategies and ensure compliance with updated regulations to optimize their tax positions.",
      date: "January 15, 2024",
      category: "Tax Policy",
      readTime: "7 min read",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20business%20owners%20and%20tax%20consultants%20reviewing%20new%20tax%20reform%20documents%20and%20compliance%20requirements%20in%20professional%20office%20setting%20with%20calculators%20and%20financial%20statements%20representing%20tax%20planning%20and%20business%20adaptation&width=400&height=250&seq=tax-reforms-impact&orientation=landscape"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      slug: 'transforming-manufacturing-financial-structure',
      title: "Transforming Manufacturing Company's Financial Structure",
      client: "Leading Nigerian Manufacturing Firm",
      challenge: "Restructuring debt portfolio and improving cash flow management",
      solution: "Implemented comprehensive financial restructuring strategy with new credit facilities and working capital optimization",
      result: "40% improvement in cash flow, reduced debt servicing costs by 25%, and enhanced operational efficiency",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20manufacturing%20factory%20with%20modern%20equipment%20and%20financial%20consultants%20reviewing%20restructuring%20documents%2C%20industrial%20facility%20with%20business%20professionals%20analyzing%20financial%20reports%20and%20operational%20improvements&width=400&height=250&seq=case-study-1&orientation=landscape"
    },
    {
      id: 2,
      slug: 'strategic-investment-advisory-tech-startup',
      title: "Strategic Investment Advisory for Tech Startup",
      client: "Emerging Fintech Company",
      challenge: "Securing Series A funding and establishing regulatory compliance framework",
      solution: "Developed comprehensive business plan, facilitated investor meetings, and ensured full regulatory compliance with CBN requirements",
      result: "Successfully raised $2.5 million in Series A funding, achieved full regulatory approval, and expanded operations to 3 states",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20fintech%20startup%20office%20with%20young%20professionals%20working%20on%20laptops%2C%20modern%20technology%20environment%2C%20investment%20meeting%20with%20venture%20capitalists%20and%20business%20advisors%20in%20contemporary%20workspace&width=400&height=250&seq=case-study-2&orientation=landscape"
    },
    {
      id: 3,
      slug: 'agricultural-cooperative-financial-restructuring',
      title: "Agricultural Cooperative Financial Restructuring",
      client: "Northern Nigeria Agricultural Cooperative",
      challenge: "Modernizing financial systems and accessing development finance",
      solution: "Implemented digital financial management system and structured access to agricultural development funds",
      result: "Increased member participation by 60%, secured $1.2 million in development financing, and improved crop yield financing",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20farmers%20in%20agricultural%20cooperative%20meeting%20with%20financial%20advisors%2C%20rural%20development%20setting%20with%20modern%20farming%20equipment%20and%20financial%20documents%2C%20professional%20consultation%20in%20agricultural%20community%20center&width=400&height=250&seq=case-study-3&orientation=landscape"
    }
  ];

  const blogs = [
    {
      id: 1,
      slug: "foreign-exchange-market-dynamics",
      title: "Understanding Nigeria's Foreign Exchange Market Dynamics",
      excerpt: "An in-depth analysis of factors influencing the Naira exchange rate and strategies for businesses to manage foreign exchange risks effectively.",
      author: "Mohammed Yakasal",
      date: "January 12, 2024",
      readTime: "8 min read",
      tags: ["Foreign Exchange", "Risk Management", "Economic Policy"],
      image: "https://readdy.ai/api/search-image?query=Nigerian%20foreign%20exchange%20traders%20monitoring%20currency%20rates%20on%20multiple%20screens%2C%20Central%20Bank%20of%20Nigeria%20building%20in%20background%2C%20professional%20trading%20floor%20environment&width=400&height=250&seq=insights-blog-1&orientation=landscape"
    },
    {
      id: 2,
      slug: "digital-transformation-banking",
      title: "Digital Transformation in Nigerian Banking Sector",
      excerpt: "How Nigerian banks are leveraging technology to improve customer experience and operational efficiency while maintaining regulatory compliance.",
      author: "Alh. Dalhatu Abubakar",
      date: "January 8, 2024",
      readTime: "12 min read",
      tags: ["Digital Banking", "Technology", "Customer Experience"],
      image: "https://readdy.ai/api/search-image?query=Modern%20Nigerian%20bank%20interior%20with%20digital%20displays%2C%20customers%20using%20mobile%20banking%20apps%2C%20high-tech%20banking%20environment%20with%20professional%20staff&width=400&height=250&seq=insights-blog-2&orientation=landscape"
    },
    {
      id: 3,
      slug: "infrastructure-investment-opportunities",
      title: "Investment Opportunities in Nigeria's Infrastructure Sector",
      excerpt: "Exploring emerging investment opportunities in Nigeria's infrastructure development, including transportation, power, and telecommunications sectors.",
      author: "Sabiu Umar Yola",
      date: "January 3, 2024",
      readTime: "10 min read",
      tags: ["Infrastructure", "Investment", "Economic Development"],
      image: "https://readdy.ai/api/search-image?query=Nigerian%20infrastructure%20development%20with%20modern%20bridges%2C%20roads%20and%20construction%20projects%2C%20investment%20opportunities%20in%20African%20development%2C%20professional%20engineering%20consultants&width=400&height=250&seq=insights-blog-3&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Insights & Knowledge</h1>
            <p className="text-xl leading-relaxed">
              Stay informed with the latest developments in Nigerian financial markets, 
              regulatory changes, and industry best practices from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'news' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                News & Updates
              </button>
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'case-studies' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'blogs' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Expert Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
                <p className="text-xl text-gray-600">
                  Stay current with regulatory changes and market developments affecting Nigerian businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((news) => (
                  <Link key={news.id} href={`/insights/news/${news.slug}`}>
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                      <div className="relative h-48">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {news.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {news.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                          {news.excerpt}
                        </p>
                        <button className="text-green-600 font-semibold hover:text-green-800 whitespace-nowrap transition-colors">
                          Read Full Article →
                        </button>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {activeTab === 'case-studies' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600">
                  Real-world examples of how we've helped Nigerian businesses achieve their financial goals
                </p>
              </div>

              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                    <div className="lg:w-1/2">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-sm text-green-600 font-semibold mb-2">{study.client}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                            <p className="text-gray-600 font-medium">{study.result}</p>
                          </div>
                        </div>
                        
                        <Link href={`/insights/case-studies/${study.slug}`}>
                          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                            View Full Case Study
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blogs Section */}
      {activeTab === 'blogs' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights</h2>
                <p className="text-xl text-gray-600">
                  Deep-dive analysis and expert opinions from our leadership team on key financial topics
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">By </span>
                          <span className="font-semibold text-gray-900">{blog.author}</span>
                        </div>
                        <Link 
                          href={`/insights/blog/${blog.slug}`}
                          className="text-green-600 font-semibold hover:text-green-800 whitespace-nowrap"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Subscription */}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest insights, market updates, and expert analysis
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button 
                type="submit"
                className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Expert Financial Guidance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is ready to help you navigate complex financial challenges and opportunities
            </p>
            <Link href="/contact">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
