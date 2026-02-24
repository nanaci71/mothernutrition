import Link from 'next/link';
import { Leaf, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="hidden md:block bg-white border-t border-gray-100 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-[#7BAE7F] rounded-xl flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-extrabold text-lg text-[#4A4A4A]">
                            Nutri<span className="text-[#7BAE7F]">Pintar</span>
                        </span>
                    </div>
                    <p className="text-sm text-[#7A7A7A] leading-relaxed">
                        Platform edukasi gizi dan kesehatan untuk ibu hamil dan masyarakat Indonesia.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-[#4A4A4A] mb-3">Menu</h4>
                    <ul className="space-y-2 text-sm text-[#7A7A7A]">
                        <li><Link href="/" className="hover:text-[#7BAE7F]">Beranda</Link></li>
                        <li><Link href="/resep" className="hover:text-[#7BAE7F]">Resep Sehat</Link></li>
                        <li><Link href="/video" className="hover:text-[#7BAE7F]">Video Edukasi</Link></li>
                        <li><Link href="/imt" className="hover:text-[#7BAE7F]">Kalkulator IMT</Link></li>
                    </ul>
                </div>

                {/* Info */}
                <div>
                    <h4 className="font-bold text-[#4A4A4A] mb-3">Tentang</h4>
                    <p className="text-sm text-[#7A7A7A] leading-relaxed">
                        Konten disusun oleh tim ahli gizi. Selalu konsultasikan masalah kesehatan dengan tenaga medis profesional.
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-100 py-4">
                <p className="text-center text-xs text-[#AAAAAA] flex items-center justify-center gap-1">
                    Made with <Heart className="w-3 h-3 text-[#F6C1C7] fill-[#F6C1C7]" /> MotherNutrition © 2024
                </p>
            </div>
        </footer>
    );
}
