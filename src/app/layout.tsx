import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/primary/layout/navbar/Navbar';
import Footer from '@/components/primary/layout/footer/Footer';
import ThemeToggle from '@/components/secondary/Theme/ThemeToggle';
import ThemeProviderClient from '@/components/secondary/Theme/ThemeProviderClient';

export const metadata: Metadata = {
  title: 'Matías Videla',
  description:
    'En este espacio, encontrarás algunos de mis proyectos más destacados, donde aplico creatividad, análisis y tecnología para generar resultados impactantes. Siempre estoy abierto a nuevas oportunidades y desafíos que me permitan crecer profesional y personalmente',
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
