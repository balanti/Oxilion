'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from './ServiceHero';
import ServiceCards from './ServiceCards';
import ProcessSection from './ProcessSection';
import WhyChooseSection from './WhyChooseSection';
import CallToAction from './CallToAction';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <ServiceCards />
      <ProcessSection />
      <WhyChooseSection />
      <CallToAction />
      <Footer />
    </div>
  );
}