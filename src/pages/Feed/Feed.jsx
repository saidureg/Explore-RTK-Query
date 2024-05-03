import { useForm } from "react-hook-form";
import PostCard from "../../components/PostCard";
import {
  useGetPostsByIDQuery,
  useGetPostsQuery,
  useSetPostMutation,
} from "../../redux/features/api/baseApi";

const Feed = () => {
  const { register, handleSubmit } = useForm();

  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const { data: post, isLoading, isError, error } = useGetPostsByIDQuery(1);

  const [setPost, { data: postData }] = useSetPostMutation();

  console.log(postData);

  const onSubmit = (data) => {
    setPost(data);
  };

  return (
    <div>
      <h1 className="text-5xl text-zinc-300">Feed</h1>
      <div className="my-10">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="bg-zinc-800 text-zinc-300 rounded-md p-3 w-full "
            type="text"
            placeholder="Title"
            {...register("title")}
          />
          <input
            className="bg-zinc-800 text-zinc-300 rounded-md p-3 w-full "
            type="text"
            placeholder="Body"
            {...register("body")}
          />
          <button
            className="bg-zinc-800 text-zinc-300 rounded-md p-3 w-full text-lg hover:bg-zinc-300 hover:text-zinc-800"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
      {isLoading ? (
        <h1 className="text-5xl bg-zinc-300">Loading...</h1>
      ) : isError ? (
        <>
          <h1 className="text-5xl bg-zinc-300">{error.message}</h1>
          <p className="text-5xl bg-zinc-300">Something went wrong</p>
        </>
      ) : (
        // posts?.map((post) => <PostCard key={post.id} post={post} />)
        <PostCard post={post} />
      )}
    </div>
  );
};

export default Feed;
