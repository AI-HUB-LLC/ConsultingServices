import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-hpedark shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/AI-HUB-LLC logo.png"
              alt="AI HUB LLC Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed to maintain aspect ratio
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-hpelight hover:text-hpegreen transition">Home</Link>
          <Link href="/solutions" className="text-hpelight hover:text-hpegreen transition">Solutions</Link>
          <Link href="/industries" className="text-hpelight hover:text-hpegreen transition">Industries</Link>
          <Link href="/who-we-are" className="text-hpelight hover:text-hpegreen transition">About</Link>
          <Link href="/contact" className="text-hpelight hover:text-hpegreen transition">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-hpegreen text-white px-5 py-2 rounded font-semibold shadow hover:bg-white hover:text-hpegreen border border-hpegreen transition">Get Started</Link>
        </div>
      </div>
    </nav>
  );
} 