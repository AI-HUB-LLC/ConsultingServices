import React from 'react';
import HeroSection from '../components/HeroSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-hpelight">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        description="Contact AI HUB LLC to discuss your AI consulting needs."
        // Add background image prop here later, e.g., imageUrl="/images/contact-hero.jpg"
      />

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 text-hpedark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-hpegreen mb-6">Reach Out to Us</h2>
            <p className="text-lg text-gray-700 mb-4">We are ready to partner with you to solve your most complex challenges with AI. Contact us through the form or via the details below:</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-hpedark">Email Address</h3>
              <p className="text-gray-700">info@aihubservices.org</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-hpedark">Phone Number</h3>
              <p className="text-gray-700">(XXX) XXX-XXXX</p>
            </div>
            {/* Add address/map later if needed */}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-hpegreen mb-6">Send Us a Message</h2>
            {/* Replace "YOUR_FORMSPREE_ENDPOINT" with your actual Formspree endpoint URL after setting up your form on formspree.io */}
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-hpedark">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-hpegreen focus:border-hpegreen" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-hpedark">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-hpegreen focus:border-hpegreen" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-hpedark">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-hpegreen focus:border-hpegreen"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-hpegreen hover:bg-hpedark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hpegreen transition">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default ContactPage; 