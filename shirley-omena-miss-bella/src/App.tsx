/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import NossoCantinho from './components/NossoCantinho';
import Specialties from './components/Specialties';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-luxury-black font-body text-gray-100 overflow-x-hidden antialiased">
      {/* Elegant Global Decorative Borders */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-950 via-gold-700/20 to-gold-950 z-50 pointer-events-none" />
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-950 via-gold-700/20 to-gold-950 z-50 pointer-events-none" />

      {/* Main Structural Layout */}
      <Header />
      
      <main className="relative">
        <Hero />
        <About />
        <NossoCantinho />
        <Specialties />
        <BeforeAfter />
        <Testimonials />
        <LocationContact />
      </main>

      <Footer />
      
      {/* High Conversion Floating WhatsApp Trigger */}
      <WhatsAppButton />
    </div>
  );
}

