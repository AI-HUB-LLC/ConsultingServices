import Image from "next/image";
import Link from 'next/link';

export default function Industries() {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-hpedark">
        <div className="absolute inset-0">
          {/* Industries hero image - Replace /public/images/industries-hero.jpg with a relevant high-quality, royalty-free image */}
          <Image
            src="/images/industries-hero.jpg" // General industry image placeholder
            alt="Industries We Serve"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-hpedark bg-opacity-70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Industries We Serve</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-hpelight text-hpedark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hpegreen mb-6">Expertise Across Key Sectors</h2>
          <p className="text-xl text-gray-700 mb-8">
            AI HUB provides specialized solutions tailored to the unique needs of various industries, driving innovation and efficiency. Our deep understanding of these sectors allows us to deliver impactful AI strategies and implementations.
          </p>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-hpegray text-hpelight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hpegreen text-center mb-12">Sectors We Empower</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry Card: Government Contracting */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen flex flex-col items-center text-center">
              <div className="relative w-full h-40 mb-6 rounded-md overflow-hidden">
                 {/* Replace /public/images/government-industry.jpg with a relevant high-quality, royalty-free image for Government */}
                 <Image
                  src="/images/government-industry.jpg" // Placeholder for Government image
                  alt="Government Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Government Contracting</h3>
              <p className="text-gray-400">Delivering secure, compliant, and cutting-edge AI solutions to federal, state, and local government agencies to enhance operations, improve public services, and ensure national security.</p>
            </div>

            {/* Industry Card: Healthcare */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen flex flex-col items-center text-center">
               <div className="relative w-full h-40 mb-6 rounded-md overflow-hidden">
                 {/* Replace /public/images/healthcare-industry.jpg with a relevant high-quality, royalty-free image for Healthcare */}
                 <Image
                  src="/images/healthcare-industry.jpg" // Placeholder for Healthcare image
                  alt="Healthcare Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-gray-400">Transforming patient care, accelerating research, and optimizing administrative workflows in the healthcare sector through intelligent AI and data analytics solutions.</p>
            </div>

            {/* Industry Card: Smart Cities */}
            <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen flex flex-col items-center text-center">
               <div className="relative w-full h-40 mb-6 rounded-md overflow-hidden">
                 {/* Replace /public/images/smart-city-industry.jpg with a relevant high-quality, royalty-free image for Smart Cities */}
                 <Image
                  src="/images/smart-city-industry.jpg" // Placeholder for Smart Cities image
                  alt="Smart Cities Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Cities</h3>
              <p className="text-gray-400">Creating efficient, sustainable, and livable urban environments by implementing AI for traffic optimization, smart grids, public safety, and intelligent infrastructure management.</p>
            </div>

             {/* Industry Card: Commercial Business */}
             <div className="bg-hpedark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-hpegreen flex flex-col items-center text-center">
               <div className="relative w-full h-40 mb-6 rounded-md overflow-hidden">
                 {/* Replace /public/images/commercial-industry.jpg with a relevant high-quality, royalty-free image for Commercial Business */}
                 <Image
                  src="/images/commercial-industry.jpg" // Placeholder for Commercial Business image
                  alt="Commercial Business Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Commercial Business</h3>
              <p className="text-gray-400">Empowering businesses with AI-driven insights, automation, and personalized customer experiences to enhance competitiveness and drive revenue growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-hpelight text-hpedark text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-hpedark mb-6">Discover Solutions for Your Industry</h2>
              <p className="text-xl text-gray-700 mb-8">Contact us to learn how AI HUB can address your sector-specific challenges with innovative and effective AI solutions.</p>
              <Link href="/contact" className="bg-hpegreen text-white px-6 py-3 rounded font-semibold shadow-lg hover:bg-white hover:text-hpegreen border border-hpegreen transition">Get Started</Link>
          </div>
      </section>
    </div>
  );
} 