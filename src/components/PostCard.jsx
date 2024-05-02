import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <div className="bg-zinc-800 rounded-md p-10 text-zinc-300 mb-5">
      <h1 className="mb-5 text-xl font-semibold hover:underline cursor-pointer">
        Jhon Doe
      </h1>
      <p>{post?.body}</p>
      <div className="border-b border-zinc-700 my-5"></div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
