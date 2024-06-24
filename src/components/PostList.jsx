import PostCard from "./PostCard";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import WelcomeMesssage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning use Effect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && (
        <WelcomeMesssage></WelcomeMesssage>
      )}
      {postList.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </>
  );
}

export default PostList;
