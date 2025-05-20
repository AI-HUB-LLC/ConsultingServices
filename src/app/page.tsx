import React from 'react';
import HeroSection from '../components/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to AI HUB LLC"
        description="Transforming businesses through innovative AI solutions"
        imageUrl="/images/hero-bg.jpg"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-hpedark mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-hpedark mb-4">AI Strategy & Consulting</h3>
              <p className="text-gray-600 mb-4">Develop a comprehensive AI strategy aligned with your business goals.</p>
              <Link href="/solutions" className="text-hpegreen hover:text-hpedark transition">Learn More →</Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-hpedark mb-4">Custom AI Solutions</h3>
              <p className="text-gray-600 mb-4">Tailored AI solutions designed to address your specific challenges.</p>
              <Link href="/solutions" className="text-hpegreen hover:text-hpedark transition">Learn More →</Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-hpedark mb-4">AI Implementation</h3>
              <p className="text-gray-600 mb-4">Seamless integration of AI technologies into your existing systems.</p>
              <Link href="/solutions" className="text-hpegreen hover:text-hpedark transition">Learn More →</Link>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-hpedark mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Industry Card 1 */}
            <div className="bg-hpedark p-6 rounded-lg text-white hover:bg-hpegreen transition">
              <h3 className="text-xl font-semibold mb-2">Government</h3>
              <p className="text-gray-300">Federal, state, and local agencies</p>
            </div>

            {/* Industry Card 2 */}
            <div className="bg-hpedark p-6 rounded-lg text-white hover:bg-hpegreen transition">
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-300">Hospitals and healthcare providers</p>
            </div>

            {/* Industry Card 3 */}
            <div className="bg-hpedark p-6 rounded-lg text-white hover:bg-hpegreen transition">
              <h3 className="text-xl font-semibold mb-2">Smart Cities</h3>
              <p className="text-gray-300">Urban infrastructure and services</p>
            </div>

            {/* Industry Card 4 */}
            <div className="bg-hpedark p-6 rounded-lg text-white hover:bg-hpegreen transition">
              <h3 className="text-xl font-semibold mb-2">Commercial</h3>
              <p className="text-gray-300">Businesses of all sizes</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-hpedark mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Let&apos;s discuss how AI can drive your success.</p>
          <Link href="/contact" className="bg-hpegreen text-white px-8 py-3 rounded-lg font-semibold hover:bg-hpedark transition">Get Started</Link>
        </section>
      </main>
    </div>
  );
}
