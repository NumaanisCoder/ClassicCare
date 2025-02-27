import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jost = Jost({ subsets: ['latin'], style: ['normal'], weight: ['500'] });

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col ${jost.className}`}>
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
        <button className="md:hidden p-2 text-xl">☰</button>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: "url('/guitar-case.jpg')" }}>
        <div className="flex flex-col items-center justify-center">
          <Image src="/classiccare.png" alt="Classic Care Logo" width={280} height={80} />
          <h1 className="text-2xl md:text-3xl font-bold text-black drop-shadow-lg">Premium Instrument Cases</h1>
        </div>
        <Link href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&product=B09FGVSM9N&me=A3A807UKLP235E" className="mt-6 bg-i text-gray-900 px-6 py-3 rounded-lg font-semibold  transition">
        <Image src="/amazonbackground.png" alt="Classic Care Logo" width={120} height={120} />
        </Link>
      </header>

      {/* Featured Products */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              img: "https://m.media-amazon.com/images/I/319SoZo9PiL.jpg",
              title: "Violin Case",
              desc: "Elegant & durable protection for your violin.",
            },
            {
              img: "https://m.media-amazon.com/images/I/31zoFPH4vzL._SX300_SY300_QL70_FMwebp_.jpg",
              title: "Black Wood Violin",
              desc: "Stylish and protective case for your guitar.",
            },
            {
              img: "https://m.media-amazon.com/images/I/61s81z+pNpL._SY879_.jpg",
              title: "Classical Maple Violin",
              desc: "Secure and cushioned support for your cello.",
            },
          ].map((product, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4 flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <img src={product.img} alt={product.title} className="rounded object-contain h-48 w-full" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-700">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Classic Care. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <Link href="#" className="hover:text-gray-400">Facebook</Link>
          <Link href="#" className="hover:text-gray-400">Instagram</Link>
          <Link href="#" className="hover:text-gray-400">Twitter</Link>
        </div>
      </footer>
    </div>
  );
}
