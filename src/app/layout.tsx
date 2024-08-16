import { IBM_Plex_Sans_JP } from 'next/font/google';
import type { Metadata } from 'next';

const fontIBMPlex = IBM_Plex_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-m-plus-1p',
});

export const metadata: Metadata = {
  title: 'Hikaru Hata',
  description: 'App developer,photographer at Tokyo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={fontIBMPlex.className}>{children}</body>
    </html>
  );
}
