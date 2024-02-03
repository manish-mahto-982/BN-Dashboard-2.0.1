import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/client-details" }),
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL }),
  reducerPath: "clientServiceApi",
  tagTypes: ["NotificationReceived"],
  endpoints: (build) => ({
    getNotificationReceived: build.query({
      query: () => "/notification_received_data.json",
      providesTags: ["NotificationReceived"],
    }),
  }),
});

export const { useGetNotificationReceivedQuery } = api;
