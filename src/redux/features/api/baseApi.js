import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),

    getUsers: builder.query({
      query: () => "/users",
    }),

    getPostsByID: builder.query({
      query: (id) => `/posts/${id}`,
    }),

    setPost: builder.mutation({
      query: ({ title, body }) => ({
        url: "/posts",
        method: "POST",
        body: { title, body },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByIDQuery, useSetPostMutation } =
  baseApi;

export default baseApi;
