import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function PostCard({ post }) {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "25rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary post-tag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This Post is liked by {post.reactions.likes || post.reactions} People.
        </div>
      </div>
    </div>
  );
}

export default PostCard;
