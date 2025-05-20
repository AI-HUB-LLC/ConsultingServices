export default function CapabilityStatement() {
  return (
    <section className="py-20 bg-hpelight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hpedark mb-4">Capability Statement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive capability statement to learn more about our services, certifications, and qualifications.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto border border-hpegreen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-hpedark mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">✓</span>
                  <span>Certified Woman-Owned Small Business (WOSB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">✓</span>
                  <span>15+ years of cross-sector leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">✓</span>
                  <span>Full range of technology and construction services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">✓</span>
                  <span>Active SAM.gov registration</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-hpedark mb-4">Core Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Technology & AI Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Construction & Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Staffing & Recruitment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hpegreen mr-2">•</span>
                  <span>Supply & Distribution</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="/capability-statement.pdf"
              download
              className="bg-hpegreen text-white px-6 py-3 rounded font-semibold shadow-lg hover:bg-white hover:text-hpegreen border border-hpegreen transition inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Capability Statement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 