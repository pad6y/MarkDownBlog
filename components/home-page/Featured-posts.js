import PostsGrid from '../posts/posts-grid';
import classes from './Featured-post.module.css';

function FeaturedPosts({ posts }) {
  return (
    <div className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </div>
  );
}
export default FeaturedPosts;
