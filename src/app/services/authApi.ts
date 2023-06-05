import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userInfo, ISignUp, AuthSate } from "../../interfaces/auth-interface";
import { Md5 } from "ts-md5";

type TResponse = {
  data?: AuthSate | null;
  isOk?: boolean;
  message?: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech/",
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<TResponse, AuthSate>({
      query: (body: ISignUp) => {
        return {
          url: "signup",
          method: "POST",
          body,
        };
      },
    }),
    userInfo: builder.mutation<TResponse, userInfo>({
      query: (headers) => {
        return {
          url: "myself",
          method: "GET",
          headers: {
            Key: headers.key,
            Sign: Md5.hashStr(`GET/myself${headers.secret}`),
          },
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation, useUserInfoMutation } = authApi;
