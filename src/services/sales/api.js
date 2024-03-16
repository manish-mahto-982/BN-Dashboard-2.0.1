import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/sales" }),
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL }),
  reducerPath: "salesApi",
  tagTypes: ["BlockCall"],
  endpoints: (build) => ({
    getBlockCall: build.query({
      query: () => `/block_call.json`,
      providesTags: ["BlockCall"],
    }),
  }),
});

export const { useLazyGetBlockCallQuery } = api;
