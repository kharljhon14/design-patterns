import { HeaderNav } from '@/src/components';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-h-screen bg-gray-100">
        <HeaderNav />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
