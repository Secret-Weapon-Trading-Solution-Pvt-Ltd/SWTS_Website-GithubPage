import type { Metadata } from 'next';
import { Inter, Orbitron, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-orbitron',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Secret Weapon Trading Solution Pvt. Ltd.',
  description:
    'Discover if your trading strategy is ready for automation. Take our free 5-question assessment and get personalized insights to improve your trading consistency.',
  keywords: [
    'algorithmic trading',
    'automated trading',
    'trading strategy',
    'TradingView',
    'AmiBroker',
    'Pine Script',
    'trading automation',
    'algo trading India',
  ],
  authors: [{ name: 'Secret Weapon Trading Solution Pvt. Ltd.' }],
  icons: {
    icon: `${basePath}/logos/logo1.png`,
    shortcut: `${basePath}/logos/logo1.png`,
    apple: `${basePath}/logos/logo1.png`,
  },
  openGraph: {
    title: 'Secret Weapon Trading Solution Pvt. Ltd.',
    description:
      'Is your trading strategy ready for automation? Find out in 2 minutes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${montserrat.variable}`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
