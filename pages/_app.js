import Layout from '../components/layout/Layout';
// @ts-ignore
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NextJS Blog" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
