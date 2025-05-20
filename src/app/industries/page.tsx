import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export default function Industries() {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Hero Section */}
      <HeroSection
        title="Industries We Serve"
        description="Tailored AI solutions for various sectors."
        imageUrl="/images/industries-hero.jpg" // General industry image placeholder
      />

      {/* Introduction Section */}
      <section className="py-20 bg-hpelight text-hpedark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hpegreen mb-6">Empowering Diverse Industries with AI</h2>
          <p className="text-xl text-gray-700 mb-8">
            AI HUB provides specialized AI consulting services designed to meet the unique challenges and opportunities within various industries. Our expertise helps organizations across sectors leverage AI for significant impact.
          </p>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-hpegray text-hpelight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hpegreen text-center mb-12">Our Industry Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry Card: Government */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🏛️</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Government</h3>
              <p className="text-gray-400">Delivering secure and efficient AI solutions for federal, state, and local government agencies, focusing on data analysis, process automation, and citizen services.</p>
            </div>

            {/* Industry Card: Healthcare */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🏥</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-gray-400">Implementing AI for improved patient care, diagnostics, operational efficiency, and research within hospitals, clinics, and healthcare organizations.</p>
            </div>

            {/* Industry Card: Smart Cities */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">🏙️</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Smart Cities</h3>
              <p className="text-gray-400">Developing AI solutions for urban environments to enhance public safety, optimize transportation, improve sustainability, and manage resources effectively.</p>
            </div>

            {/* Industry Card: Commercial Business */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen">
              <div className="text-4xl mb-4 text-hpegreen">💼</div> {/* Placeholder Icon - Consider replacing with an image or SVG */}
              <h3 className="text-xl font-semibold text-white mb-2">Commercial Business</h3>
              <p className="text-gray-400">Applying AI to optimize business processes, enhance customer experiences, improve marketing strategies, and drive growth across various commercial sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-hpelight text-hpedark text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-hpedark mb-6">Find Your Industry Solution</h2>
              <p className="text-xl text-gray-700 mb-8">Discover how AI can specifically benefit your industry. Contact us to learn more about our tailored AI consulting services.</p>
              <Link href="/contact" className="bg-hpegreen text-white px-6 py-3 rounded font-semibold shadow-lg hover:bg-white hover:text-hpegreen border border-hpegreen transition">Contact Us</Link>
          </div>
      </section>
    </div>
  );
} 