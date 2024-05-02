import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = CreateApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;

export default baseApi;
