import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Delete_Post") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [...newPostList, action.payload];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
    // newPostList = [...newPostList, action.payload];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, postReactions, postTags) => {
    dispathPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: "user-9",
        tags: postTags,
      },
    });
    console.log(userId, postBody, postTitle, postReactions, postTags);
  };

  const addInitialPosts = (posts) => {
    dispathPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  // const addInitialPosts = (posts) => {
  //   posts.map((post) => {
  //     dispathPostList({
  //       type: "ADD_INITIAL_POSTS",
  //       payload: {
  //         id: post.id,
  //         title: post.title,
  //         body: post.body,
  //         reactions: post.reactions,
  //         userId: "user-9",
  //         tags: post.tags,
  //       },
  //     });
  //     console.log(post.reactions.likes);
  //   });
  // };

  const deletePost = (postId) => {
    dispathPostList({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispathPostList] = useReducer(postListReducer, []);

  return (
    <>
      <PostListContext.Provider
        value={{ postList, addPost, deletePost, addInitialPosts }}
      >
        {children}
      </PostListContext.Provider>
    </>
  );
};
export default PostListProvider;
