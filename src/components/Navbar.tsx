"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-zinc-200 shadow flex justify-between gap-2 py-2 px-4">
      <Link href="/" className="font-semibold text-lg">
        MedAI Doctor
      </Link>
      <div className="flex gap-2 items-center">
        <Link
          href="/"
          className="text-sm text-gray-700 hover:text-black transition-colors"
        >
          Home
        </Link>
        <Link
          href="/consultation"
          className="text-sm text-gray-700 hover:text-black transition-colors"
        >
          AI Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
