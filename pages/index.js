// @ts-nocheck
import Head from 'next/head';
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/Featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Pad6y's Blog</title>
        <meta name="description" content="Tech blogger" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featured = getFeaturedPosts();
  return { props: { featuredPosts: featured }, revalidate: 1000 };
}

export default HomePage;
