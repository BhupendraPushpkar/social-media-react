import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const userId = useRef();
  const postBody = useRef();
  const postTitle = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleOnSubmit = (event) => {
    console.log("Submit is called");
    event.preventDefault();
    addPost(
      userId.current.value,
      postTitle.current.value,
      postBody.current.value,
      postReactions.current.value,
      postTags.current.value
        .split(/(\s+)/)
        .filter((tag) => tag.trim().length > 0)
    );
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = "";
  };

  return (
    <form className="Create-post-Container" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Provide your User Id"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Provide a Title"
          ref={postTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          rows="3"
          className="form-control"
          id="body"
          placeholder="Tell us more about it.."
          ref={postBody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Likes
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How Many Likes you should get"
          ref={postReactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Provide Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags here using space"
          ref={postTags}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
