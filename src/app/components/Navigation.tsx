import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#0a2342]">
              AI HUB LLC
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/who-we-are" className="text-gray-700 hover:text-[#0a2342]">Who We Are</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0a2342]">Services</Link>
            <Link href="/government" className="text-gray-700 hover:text-[#0a2342]">Government</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0a2342]">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 