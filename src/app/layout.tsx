import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/primary/home/navbar/Navbar';
import Footer from '@/components/primary/home/footer/Footer';
import ThemeToggle from '@/components/secondary/Theme/ThemeToggle';
import ThemeProviderClient from '@/components/secondary/Theme/ThemeProviderClient';

export const metadata: Metadata = {
  title: 'Fuaxion',
  description: 'Generated by create next app',
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          {children}
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
