import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raushan Kumar — Electrical & Electronics Engineer',
  description: 'Portfolio of Raushan Kumar: VLSI, power electronics, embedded systems and applied AI/ML.',
  openGraph: {
    title: 'Raushan Kumar — Electrical & Electronics Engineer',
    description: 'Engineering intelligence, from silicon to systems.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Raushan Kumar engineering portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raushan Kumar — Electrical & Electronics Engineer',
    description: 'Engineering intelligence, from silicon to systems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

