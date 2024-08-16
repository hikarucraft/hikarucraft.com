import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';

const fontNunito = Nunito({
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-nunito',
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
      <body className={fontNunito.className}>{children}</body>
    </html>
  );
}
