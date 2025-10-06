'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationHero from './ConsultationHero';
import ConsultationBenefits from './ConsultationBenefits';
import ConsultationForm from './ConsultationForm';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ConsultationHero />
      <ConsultationBenefits />
      <ConsultationForm />
      <Footer />
    </div>
  );
}