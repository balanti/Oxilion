'use client';

import { useState } from 'react';

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert to URLSearchParams for application/x-www-form-urlencoded
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    try {
      const response = await fetch('https://readdy.ai/api/form/d2rgc0e76ihulu0mpfe0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your consultation has been scheduled. We will contact you within 24 hours to confirm your appointment.');
        form.reset();
      } else {
        setSubmitStatus('Sorry, there was an error scheduling your consultation. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error scheduling your consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and our team will get back to you within 24 hours to schedule your free consultation.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <form 
            id="consultation-booking" 
            data-readdy-form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
                  >
                    <option value="">Select your industry</option>
                    <option value="oil-gas">Oil & Gas</option>
                    <option value="banking-finance">Banking & Finance</option>
                    <option value="retail-ecommerce">Retail & E-commerce</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service of Interest *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="loan-development">Loan & Development Assistance</option>
                  <option value="project-monitoring">Project Monitoring & Evaluation</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="loan-recovery">Loan Recovery Services</option>
                  <option value="receivership">Receivership Services</option>
                  <option value="operational">Operational Services</option>
                  <option value="outsourcing">Outsourcing Services</option>
                  <option value="fintech">Fintech Services</option>
                  <option value="financial-consulting">Financial Consulting</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Timeline
              </label>
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="short-term">Short-term (1-3 months)</option>
                  <option value="medium-term">Medium-term (3-6 months)</option>
                  <option value="long-term">Long-term (6+ months)</option>
                  <option value="planning">Planning phase</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1m">Under ₦1M</option>
                  <option value="1m-5m">₦1M - ₦5M</option>
                  <option value="5m-10m">₦5M - ₦10M</option>
                  <option value="10m-50m">₦10M - ₦50M</option>
                  <option value="50m-100m">₦50M - ₦100M</option>
                  <option value="over-100m">Over ₦100M</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Consultation Time
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  name="preferredTime"
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical text-sm bg-white"
                placeholder="Please describe your business challenges, goals, and what you hope to achieve from this consultation..."
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
            </button>
            
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}