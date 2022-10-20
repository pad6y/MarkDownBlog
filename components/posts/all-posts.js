import PostGrid from './posts-grid';

import classes from './all-posts.module.css';

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}
export default AllPosts;
