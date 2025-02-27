import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({ subsets: ["latin"], style: ["normal"], weight: ["500"] });

export default function ContactUs() {
  return (
    <div className={`${jost.className} flex flex-col min-h-screen`}>
       {/* Navbar */}
       <nav className="w-full bg-white text-black py-4 px-6 flex justify-between items-center shadow-lg">
        <Link href="/">
          <Image src="/classiccare.png" alt="Classic Care Logo" width={80} height={80} />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&product=B09FGVSM9N&me=A3A807UKLP235E" target="_blank" className="hover:text-gray-400">Products</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
        <button className="md:hidden p-2 bg-black text-white rounded">☰</button>
      </nav>
      
      {/* Address and Contact Details */}
      <div className="mt-8 text-center">
        <h3 className="text-3xl font-semibold mb-2">Our Address</h3>
        <p className="text-gray-600">Pakka Bagh, Rampur, Uttarpradesh</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Contact Number</h3>
        <a href="tel:+918430602420" className="text-gray-600">+91 8430602420</a>
      </div>

      {/* Contact Form */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">Have questions? Reach out to us!</p>
        <form className="w-full max-w-md bg-white p-6 rounded shadow-md flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" required />
          <textarea placeholder="Your Message" rows="4" className="p-3 border rounded" required></textarea>
          <button type="submit" className="bg-gray-900 text-white p-3 rounded hover:bg-gray-700">Send Message</button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Classic Care. All rights reserved.</p>
      </footer>
    </div>
  );
}
