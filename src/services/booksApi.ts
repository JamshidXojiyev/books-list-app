import { AuthSate } from "../interfaces/auth-interface";
import { Md5 } from "ts-md5";
import { api } from "./api";
import { IBookInfo } from "../interfaces/books-list-interface";

const localStorUserInfo: AuthSate = JSON.parse(
  localStorage.getItem("user-info") || "{}"
);

type TBookItem = {
  book?: IBookInfo | null;
  status?: number;
};
type TResponse = {
  data?: TBookItem[] | null;
  isOk?: boolean;
  message?: string;
};
type TSearchResponse = {
  data?: IBookInfo[] | null;
  isOk?: boolean;
  message?: string;
};

export const booksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query<TResponse, void>({
      query: () => {
        return {
          url: "books",
          method: "GET",
          headers: {
            Key: localStorUserInfo.key,
            Sign: Md5.hashStr(`GET/books${localStorUserInfo.secret}`),
          },
        };
      },
      providesTags: ["Books"],
    }),
    createBooks: build.mutation<TResponse, { isbn: string }>({
      query(body) {
        return {
          url: `books`,
          method: "POST",
          body: body,
          headers: {
            Key: localStorUserInfo.key,
            Sign: Md5.hashStr(
              `POST/books${JSON.stringify(body)}${localStorUserInfo.secret}`
            ),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    editBooks: build.mutation<TResponse, { id: number; body: object }>({
      query({ id, body }) {
        return {
          url: `books/${id}`,
          method: "POST",
          body: { body },
          headers: {
            Key: localStorUserInfo.key,
            Sign: Md5.hashStr(
              `POST/books/${id}${JSON.stringify(body)}${
                localStorUserInfo.secret
              }`
            ),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    deleteBooks: build.mutation<TResponse, number>({
      query(id) {
        return {
          url: `books/${id}`,
          method: "DELETE",
          headers: {
            Key: localStorUserInfo.key,
            Sign: Md5.hashStr(`DELETE/books/${id}${localStorUserInfo.secret}`),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    searchBooks: build.mutation<TSearchResponse, string>({
      query(search) {
        return {
          url: `books${search.length > 0 ? `/${search}` : ""}`,
          method: "GET",
          headers: {
            Key: localStorUserInfo.key,
            Sign: Md5.hashStr(`GET/books/${search}${localStorUserInfo.secret}`),
          },
        };
      },
      invalidatesTags: () => ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBooksMutation,
  useEditBooksMutation,
  useDeleteBooksMutation,
  useSearchBooksMutation,
} = booksApi;

// export const booksApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     getBooks: build.query<TResponse, void>({
//       query: () => ({
//         url: `books`,
//         method: "GET",
//         headers: {
//           Key: localStorUserInfo.key,
//           Sign: sign,
//         },
//       }),
//       providesTags: ["Books"],
//       // transformResponse: (response: any) => {
//       //   console.log("response: ", response);

//       //   if (response.data[0].book) {
//       //     const res = response.data.map((item: TBookItem) => item.book);
//       //     console.log("RES: ", res);
//       //   }
//       //   return response;
//       // },
//     }),
//     createBooks: build.query<any, void>({
//       query: () => ({
//         url: `books`,
//         method: "POST",
//         headers: {
//           Key: localStorUserInfo.key,
//           Sign: sign,
//         },
//       }),
//       transformResponse: (response: any) => {
//         return response;
//       },
//     }),
//   }),
// });
