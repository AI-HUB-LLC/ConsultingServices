import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[#0a2342]">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="AI HUB Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a2342] mb-6">Our Mission</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                AI HUB Consulting delivers high-impact, cross-sector solutions that empower public agencies, private enterprises, and corporate institutions to operate smarter, safer, and more efficiently.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in a full spectrum of services—from advanced AI, software, IT, and cloud systems to logistics, staffing, construction, and landscaping—making us a trusted, WOSB-certified partner in the government, energy, oil &amp; gas, technology, and commercial sectors.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to help modernize operations and build intelligent, future-ready infrastructure—starting in cities like Houston, Los Angeles, San Francisco, Miami, and New York, and expanding globally to Toronto, Vancouver, London, Rome, Zurich, Geneva, Paris, Florence, Dubai, and beyond.
              </p>
              <p className="text-gray-600 mb-6">
                From the most sophisticated AI systems to the most essential day-to-day services, we deliver unified, end-to-end solutions.
              </p>
              <p className="text-gray-600">
                And we go further: 10% of our consulting revenue is reinvested into AI HUB&rsquo;s product division, which develops ethical, voice-powered AI companions for elderly and disabled individuals—designed to promote independence, reduce isolation, and improve quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0a2342] mb-6">Our Vision</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-8">
                To lead the transformation of cities, industries, and institutions into intelligent, inclusive, and resilient ecosystems—powered by automation, innovation, and purpose.
              </p>
              <p className="text-gray-600 mb-6">
                We envision a future where public and private sector leaders—from municipalities and federal agencies to global oil & gas firms and high-growth tech companies—have access to the tools, talent, and technology they need to:
              </p>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-[#4bb174] mr-2">•</span>
                  <span>Stay competitive</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#4bb174] mr-2">•</span>
                  <span>Operate efficiently and Faster</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#4bb174] mr-2">•</span>
                  <span>Serve communities and stakeholders with excellence</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Through our consulting engagements and social reinvestment model, AI HUB Consulting builds capacity today—and social equity for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0a2342] mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and embracing cutting-edge technologies to deliver transformative solutions.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality services and exceeding client expectations.",
                icon: "⭐"
              },
              {
                title: "Social Impact",
                description: "Dedicated to creating positive change through our work and social reinvestment initiatives.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#0a2342] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 