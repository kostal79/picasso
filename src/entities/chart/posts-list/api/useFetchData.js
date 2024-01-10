import { useDispatch, useSelector } from "react-redux";
import { useGetPostsQuery } from "./postsAPI";
import { increment } from "./postsSlice";
import { useEffect } from "react";

export const useFetchData = () => {

    const dispath = useDispatch();
    const limit = (Math.ceil(document.documentElement.clientHeight / 40));
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

    return {data, isLoading, error, isSuccess}
}

