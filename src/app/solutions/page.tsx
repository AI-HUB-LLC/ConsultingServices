import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Hero Section */}
      <HeroSection
        title="Our Solutions"
        description="Innovative AI solutions tailored to your needs."
        imageUrl="/images/smart-city-hero.jpg" // Placeholder image
      />

      {/* Introduction Section */}
      <section className="py-20 bg-hpelight text-hpedark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hpegreen mb-6">Innovative Solutions for a Smarter World</h2>
          <p className="text-xl text-gray-700 mb-8">
            AI HUB delivers cutting-edge solutions across various sectors to drive efficiency, security, and growth. Our expertise spans:
          </p>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-20 bg-hpegray text-hpelight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hpegreen text-center mb-12">Featured Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Card: AI Strategy & Consulting */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">📊</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">AI Strategy & Consulting</h3>
              <p className="text-gray-400">We help you define and implement a clear AI roadmap, identifying opportunities and developing a strategy for successful AI adoption and integration within your organization.</p>
            </div>

            {/* Solution Card: Data Analytics & Insights */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">📈</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Data Analytics & Insights</h3>
              <p className="text-gray-400">Transform raw data into valuable business intelligence. Our AI-powered analytics provide deep insights, enabling data-driven decisions and predictive capabilities.</p>
            </div>

            {/* Solution Card: AI-Powered Automation */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🤖</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Automation</h3>
              <p className="text-gray-400">Streamline operations, improve efficiency, and free up resources by automating complex tasks and processes with intelligent automation solutions.</p>
            </div>

            {/* Solution Card: Natural Language Processing (NLP) */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🗣️</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Natural Language Processing (NLP)</h3>
              <p className="text-gray-400">Enable machines to understand, interpret, and generate human language for applications like chatbots, sentiment analysis, and document processing.</p>
            </div>

            {/* Solution Card: Computer Vision */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">👁️</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-400">Extract valuable information from images and videos for tasks such as object detection, facial recognition, quality control, and security surveillance.</p>
            </div>

            {/* Solution Card: Predictive Maintenance */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🛠️</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Predictive Maintenance</h3>
              <p className="text-gray-400">Proactively identify potential equipment failures using AI models, minimizing downtime, optimizing maintenance schedules, and extending asset lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-hpelight text-hpedark text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-hpedark mb-6">Ready to Transform Your Operations?</h2>
              <p className="text-xl text-gray-700 mb-8">Contact us today to discuss your specific needs and challenges and discover how our AI solutions can drive your success.</p>
              <Link href="/contact" className="bg-hpegreen text-white px-6 py-3 rounded font-semibold shadow-lg hover:bg-white hover:text-hpegreen border border-hpegreen transition">Get Started</Link>
          </div>
      </section>
    </div>
  );
} 