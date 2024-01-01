import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';
import { ToastContainer } from 'react-toastify';
import ReactParallaxProvider from '@/hoc/ReactParallaxProvider';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'Ken Nguyen - Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + poppins.className}>
        <ReactParallaxProvider>
          {children}

          <ToastContainer style={{ fontSize: '16px' }} />
        </ReactParallaxProvider>
      </body>
    </html>
  );
}
