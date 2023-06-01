import { AuthSate } from "../interfaces/auth-interface";
import { Md5 } from "ts-md5";
import { api } from "./api";
import { IBookInfo } from "../interfaces/books-list-interface";

const localStorUserInfo: AuthSate = JSON.parse(
  localStorage.getItem("user-info") || "{}"
);

const sign: string = Md5.hashStr(`GET/books${localStorUserInfo.secret}`);

type TBookItem = {
  book?: IBookInfo | null;
  status?: number;
};

type TResponse = {
  data?: TBookItem[] | null;
  isOk?: boolean;
  message?: string;
};

export const booksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query<any, any>({
      query: () => ({
        url: `books`,
        method: "GET",
        headers: {
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
