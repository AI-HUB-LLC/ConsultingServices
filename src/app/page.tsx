import Image from "next/image";
import Link from "next/link";
import CapabilityStatement from "./components/CapabilityStatement";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Sticky Navigation - Now handled in layout.tsx */}
      {/* Hero Section */}
      <section className="relative h-screen bg-hpedark">
        <div className="absolute inset-0">
          {/* Placeholder for modern tech/AI background image */}
          <Image
            src="/hero-tech-bg.jpg" // Replace with a high-quality royalty-free image
            alt="Modern Technology Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-hpedark bg-opacity-70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Intelligent Transformation and Next-Generation Solutions for Smart Cities, Technology, Healthcare, Commercial & Public Sectors
            </h1>
            <p className="text-xl md:text-2xl text-hpelight mb-8 max-w-4xl mx-auto">
              Delivering high-impact solutions and building future-ready infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capability-statement.pdf"
                download
                className="bg-hpegreen text-white px-6 py-3 rounded font-semibold shadow-lg hover:bg-white hover:text-hpegreen border border-hpegreen transition"
              >
                Download Capability Statement
              </a>
              <Link
                href="/contact"
                className="bg-white text-hpedark px-6 py-3 rounded font-semibold shadow-lg hover:bg-hpegreen hover:text-white border border-white transition"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Will be updated */}
      <section className="py-20 bg-hpelight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hpedark text-center mb-12">Our Services</h2>
          {/* Service items will be updated below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
                title: "Technology & AI",
                description: "Custom software development, intelligent agent software & LLMs, cloud computing, and cybersecurity solutions.",
                icon: "💻"
              },
              {
                title: "Staffing & Recruitment",
                description: "IT and non-IT staffing solutions, including software developers, ML engineers, and administrative professionals.",
                icon: "👥"
              },
              {
                title: "Construction & Engineering",
                description: "Comprehensive construction services including concrete, drywall, painting, and infrastructure support.",
                icon: "🏗️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-200">
                <div className="text-6xl mb-4 text-hpegreen">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-hpedark mb-3">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement Section - Will be updated */}
      <CapabilityStatement />

      {/* Mission Section - Will be updated */}
      <section className="py-20 bg-hpegray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-hpegreen mb-6">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-hpelight">
              <p className="mb-6">
                AI HUB Consulting delivers high-impact, cross-sector solutions that empower public agencies, private enterprises, and corporate institutions to operate smarter, safer, and more efficiently.
              </p>
              <p className="mb-6">
                We specialize in a full spectrum of services—from advanced AI, software, IT, and cloud systems to logistics, staffing, construction, and landscaping—making us a trusted, WOSB-certified partner in the government, energy, oil & gas, technology, and commercial sectors.
              </p>
              <p className="mb-6">
                Our mission is to help modernize operations and build intelligent, future-ready infrastructure—starting in cities like Houston, Los Angeles, San Francisco, Miami, and New York, and expanding globally to Toronto, Vancouver, London, Rome, Zurich, Geneva, Paris, Florence, Dubai, and beyond.
              </p>
              <p className="mb-6">
                From the most sophisticated AI systems to the most essential day-to-day services, we deliver unified, end-to-end solutions.
              </p>
              <p>
                And we go further: 10% of our consulting revenue is reinvested into AI HUB&rsquo;s product division, which develops ethical, voice-powered AI companions for elderly and disabled individuals—designed to promote independence, reduce isolation, and improve quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-hpelight text-hpedark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-hpegreen mb-6">Our Vision</h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-8">
                To lead the transformation of cities, industries, and institutions into intelligent, inclusive, and resilient ecosystems—powered by automation, innovation, and purpose.
              </p>
              <p className="mb-6">
                We envision a future where public and private sector leaders—from municipalities and federal agencies to global oil & gas firms and high-growth tech companies—have access to the tools, talent, and technology they need to:
              </p>
              <ul className="space-y-3 mb-8 text-left inline-block">
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Stay competitive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Operate efficiently and Faster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Serve communities and stakeholders with excellence</span>
                </li>
              </ul>
              <p>
                Through our consulting engagements and social reinvestment model, AI HUB Consulting builds capacity today—and social equity for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Will be updated */}
      <section className="py-20 bg-hpelight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hpedark text-center mb-12">Our Certifications</h2>
          {/* Certification items will be updated below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
                name: "WOSB",
                description: "Woman-Owned Small Business"
              },
              {
                name: "WBENC",
                description: "Women's Business Enterprise"
              },
              {
                name: "SAM.gov",
                description: "System for Award Management"
              },
              {
                name: "SBA",
                description: "Small Business Administration"
              }
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-hpegreen mb-2">{cert.name}</div>
                <p className="text-hpedark text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Updated */}
      <footer className="bg-hpedark text-hpelight py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-hpegreen">AI HUB LLC</h3>
              <p className="text-gray-400 text-base leading-relaxed">Empowering intelligent transformation for a future-ready world.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>📞 +1 (512) 999-0406</li>
                <li>📧 Feria@aihubagents.com</li>
                <li>📍 Houston, Texas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/who-we-are" className="text-gray-400 hover:text-hpegreen transition">About Us</Link></li>
                <li><Link href="/solutions" className="text-gray-400 hover:text-hpegreen transition">Solutions</Link></li>
                <li><Link href="/industries" className="text-gray-400 hover:text-hpegreen transition">Industries</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-hpegreen transition">Contact</Link></li>
                <li><a href="/capability-statement.pdf" download className="text-gray-400 hover:text-hpegreen transition">Capability Statement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6 text-white">Connect</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-hpegreen transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-hpegreen transition">Twitter</a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI HUB LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
