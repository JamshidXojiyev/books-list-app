import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userInfo, ISignUp } from "../interfaces/auth-interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech/",
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body: ISignUp) => {
        return {
          url: "signup",
          method: "POST",
          body,
        };
      },
    }),
    userInfo: builder.mutation({
      query: (headers: userInfo) => {
        return {
          url: "myself",
          method: "GET",
          headers: {
            Key: headers.key,
            Sign: headers.sign,
          },
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation, useUserInfoMutation } = authApi;
