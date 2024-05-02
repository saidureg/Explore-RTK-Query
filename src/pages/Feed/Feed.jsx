import PostCard from "../../components/PostCard";
import {
  useGetPostsByIDQuery,
  useGetPostsQuery,
} from "../../redux/features/api/baseApi";

const Feed = () => {
  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const { data: post, isLoading, isError, error } = useGetPostsByIDQuery(1);

  return (
    <div>
      <h1>Feed</h1>
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
