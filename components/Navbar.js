"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-12 lg:px-20 py-4 bg-sky-950 shadow-lg">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Image
          src="/logo.png"
          alt="Doc.AI Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link
          href="/"
          className="text-white hover:text-blue-300 transition duration-300"
        > DOC.<span className="text-blue-400">AI</span>
        </Link>
        </div>



    <ul className="flex space-x-6 md:space-x-8 items-center">
        <li>
            <a href="index.html" className="text-blue-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Home</a>
        </li>
        <li>
            <a href="services.html" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Services</a>
        </li>
        <li>
            <a href="about.html" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">About Us</a>
        </li>
        <li>
            <a href="blog.html" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden lg:block">Blog</a>
        </li>
        
        <li>
            <a href="contact.html" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Book Consultation
            </a>
        </li>
    </ul>
</nav>
//     <main>
//         <h1>Welcome to DOC.AI</h1>
//     </main>
  );
}

export default Navbar
