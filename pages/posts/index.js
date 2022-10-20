import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostPage({ allPosts }) {
  return <AllPosts posts={allPosts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { allPosts } };
}

export default AllPostPage;
