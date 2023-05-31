import '@/common/styles/globals.style.css';
import '@/common/styles/home.style.scss';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quick Steps',
  description: 'Custom invoices generating app'
};

/**
 * It is a root wrapper for all pages
 * @param {children} props
 * @returns page component with html wrapped around it
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.element.isRequired
};
