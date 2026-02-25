import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone 20',
  description: 'The future of smartphones.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">{children}</body>
    </html>
  );
}