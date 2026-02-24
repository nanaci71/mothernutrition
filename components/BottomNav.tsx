'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UtensilsCrossed, LibraryBig, Scale } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Beranda', icon: Home },
    { href: '/resep', label: 'Resep', icon: UtensilsCrossed },
    { href: '/video', label: 'Media', icon: LibraryBig },
    { href: '/imt', label: 'IMT', icon: Scale },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around h-14">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-all ${isActive ? 'text-[#7BAE7F]' : 'text-[#AAAAAA]'
                                }`}
                        >
                            <Icon
                                className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`}
                                strokeWidth={isActive ? 2.5 : 1.8}
                            />
                            <span className={`text-[10px] font-semibold ${isActive ? '' : ''}`}>
                                {label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
