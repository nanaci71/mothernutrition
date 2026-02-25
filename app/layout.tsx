import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'MotherNutrition - Edukasi Gizi & Kalkulator IMT',
  description: 'Platform edukasi gizi dan kesehatan untuk ibu hamil dan masyarakat. Temukan resep sehat, video edukasi, dan pantau IMT Anda.',
  keywords: 'edukasi gizi, IMT, ibu hamil, resep sehat, kesehatan',
  openGraph: {
    title: 'MotherNutrition - Edukasi Gizi & Kalkulator IMT',
    description: 'Platform edukasi gizi dan kesehatan untuk ibu hamil dan masyarakat.',
    type: 'website',
    images: [{ url: '/og.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FFF8F5] text-[#4A4A4A] antialiased" style={{ fontFamily: "'Nunito', sans-serif" }}>
        <Navbar />
        <main className="min-h-screen pb-20 md:pb-0 pt-16">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}

