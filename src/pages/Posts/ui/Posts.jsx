import React, { useEffect } from "react";
import { PostsList } from "../../../components/posts-list";
import { useGetPostsQuery } from "../../../entities/posts-list/api/postsAPI";
import { Loader } from "../../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { increment, setLimit } from "../../../store/slices/postsSlice";

export const Posts = () => {
  const limit = useSelector((state) => state.posts.limit);
  const dispath = useDispatch();
  if (limit === 0)
    dispath(setLimit(Math.ceil(document.documentElement.clientHeight / 40)));
  const page = useSelector((state) => state.posts.startWith);

  const { data, isLoading, isFetching, error, isSuccess } = useGetPostsQuery({
    limit: limit,
    start: page,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (page * limit <= 100 - limit) {
        if (scrolledToBottom && !isFetching) {
          console.log("Fetching more data...");
          dispath(increment());
        }
      }
    };
    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <>
      {isFetching && <Loader />}
      {error && <div>{`Loading error: ${error}`}</div>}
      {(isSuccess && !data) || (isSuccess && data.length === 0)}
      {isLoading && <Loader />}
      {data && <PostsList posts={data} />}
    </>
  );
};
