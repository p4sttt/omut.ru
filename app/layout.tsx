import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header, Container, Footer } from '@omut/widgets';

import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Омут',
  description:
    'Независимое либеральное средство массовой онформации, где не стесняются говорить правду',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
