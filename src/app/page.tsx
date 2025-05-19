import Image from "next/image";
import Link from "next/link";
import CapabilityStatement from "./components/CapabilityStatement";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#0a2342]">
                AI HUB LLC
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-[#0a2342]">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0a2342]">Services</Link>
              <Link href="/government" className="text-gray-700 hover:text-[#0a2342]">Government</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#0a2342]">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="AI HUB Headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a2342] bg-opacity-75"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI HUB – Certified WOSB for AI, Infrastructure, and Public Sector Support
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Delivering technology, staffing, construction, and supply solutions to federal, state, and municipal clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capability-statement.pdf"
                download
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Capability Statement
              </a>
              <a
                href="#"
                className="btn-secondary"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0a2342] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0a2342] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement Section */}
      <CapabilityStatement />

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0a2342] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a certified Woman-Owned Small Business, we are committed to delivering excellence in technology, 
              infrastructure, and public sector support while empowering our clients to achieve their mission-critical goals.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0a2342] mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "WOSB", description: "Woman-Owned Small Business" },
              { name: "WBENC", description: "Women's Business Enterprise" },
              { name: "SAM.gov", description: "System for Award Management" },
              { name: "SBA", description: "Small Business Administration" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#0a2342] mb-2">{cert.name}</div>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a2342] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI HUB LLC</h3>
              <p className="text-gray-300">Building the future of government technology</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">📞 +1 (512) 999-0406</p>
              <p className="text-gray-300">📧 Feria@aihubagents.com</p>
              <p className="text-gray-300">Houston, Texas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link href="/government" className="text-gray-300 hover:text-white">Government</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            &copy; {new Date().getFullYear()} AI HUB LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
