import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://yourname.com'), // CHANGE THIS
  title: {
    default: 'Your Name - Full Stack Developer & Designer',
    template: '%s | Your Name'
  },
  description: 'Full-stack developer and designer specializing in modern web applications. View my portfolio, read my blog, and get in touch.',
  keywords: ['web developer', 'portfolio', 'react', 'next.js', 'full stack'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.com',
    title: 'Your Name - Full Stack Developer',
    description: 'Full-stack developer portfolio and blog',
    siteName: 'Your Name Portfolio',
    images: [{
      url: '/og-image.jpg', // Create this 1200x630px image
      width: 1200,
      height: 630,
      alt: 'Your Name Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Full-stack developer portfolio and blog',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ paddingTop: '70px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}