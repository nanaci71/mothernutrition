'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/resep', label: 'Resep Sehat' },
    { href: '/video', label: 'Video Edukasi' },
    { href: '/imt', label: 'Kalkulator IMT' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-soft">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-[#7BAE7F] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-extrabold text-xl text-[#4A4A4A]">
                        Mother<span className="text-[#7BAE7F]">Nutrition</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActive
                                        ? 'bg-[#7BAE7F] text-white shadow-sm'
                                        : 'text-[#4A4A4A] hover:bg-[#7BAE7F]/10 hover:text-[#7BAE7F]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-xl hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-3 px-4 rounded-xl font-semibold mb-1 ${isActive
                                    ? 'bg-[#7BAE7F] text-white'
                                    : 'text-[#4A4A4A] hover:bg-[#7BAE7F]/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
