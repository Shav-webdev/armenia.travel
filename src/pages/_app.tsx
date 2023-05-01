import '@/assets/styles/globals.css';
import '@/assets/styles/main.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/hoc/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />{' '}
    </Layout>
  );
}
