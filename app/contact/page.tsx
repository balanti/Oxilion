'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <Footer />
    </div>
  );
}