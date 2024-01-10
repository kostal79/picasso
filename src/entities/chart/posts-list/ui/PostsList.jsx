import { Loader } from "@shared/loader";
import { useFetchData } from "../api";
import styles from "./PostsList.module.css";
import { PostItem } from "../../post-item";

export const PostsList = () => {
  const { data: posts, isLoading, error, isSuccess } = useFetchData();

  if (posts) {
    const postsList = posts.map((post) => (
      <PostItem key={`post_${post.id.toString()}`} post={post} />
    ));
    return (
      <div>
        <ul className={styles["post__list"]}>{postsList}</ul>
      </div>
    );
  }
  if (error) return <div>{`Loading error: ${error}`}</div>;
  if ((isSuccess && !posts) || (isSuccess && posts.length === 0))
    return <div>No posts</div>;
  if (isLoading) return <Loader />;
};
