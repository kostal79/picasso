import { PostItem } from "../../post-item/ui/PostItem";
import styles from "./PostsList.module.css";

export const PostsList = ({ posts }) => {
  const postsList = posts.map((post) => <PostItem key={`post_${post.id.toString()}`} post={post} />);

  return (
    <div>
      <ul className={styles["post__list"]}>{postsList}</ul>
    </div>
  );
};
