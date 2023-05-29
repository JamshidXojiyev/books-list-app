import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISignIn, ISignUp } from "../interfaces/auth-interface";

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
          method: "post",
          body,
        };
      },
    }),
    signInUser: builder.mutation({
      query: (headers: ISignIn) => {
        return {
          url: "myself",
          method: "get",
          headers: {
            Key: headers.key,
            Sign: headers.sign,
          },
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation } = authApi;
