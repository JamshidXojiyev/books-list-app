import { AuthSate } from "../../interfaces/auth-interface";
import { Md5 } from "ts-md5";
import { api } from "./api";
import { IBookInfo } from "../../interfaces/books-list-interface";

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
    // get all books
    getBooks: build.query<TResponse, AuthSate>({
      query: (userInfo) => {
        return {
          url: "books",
          method: "GET",
          headers: {
            Key: userInfo.key,
            Sign: Md5.hashStr(`GET/books${userInfo.secret}`),
          },
        };
      },
      providesTags: ["Books"],
    }),
    // create book
    createBooks: build.mutation<
      TResponse,
      { isbn: string; userInfo: AuthSate }
    >({
      query({ isbn, userInfo }) {
        const body = { isbn: isbn };
        return {
          url: `books`,
          method: "POST",
          body: body,
          headers: {
            Key: userInfo.key,
            Sign: Md5.hashStr(
              `POST/books${JSON.stringify(body)}${userInfo.secret}`
            ),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    // edit book
    editBooks: build.mutation<
      TResponse,
      {
        id: number | undefined;
        body: IBookInfo;
        userInfo: AuthSate;
      }
    >({
      query({ id, body, userInfo }) {
        return {
          url: `books/${id}`,
          method: "PATCH",
          body: {
            book: {
              isbn: body.isbn,
              title: body.title,
              author: body.author,
              published: body.published,
              pages: body.pages,
            },
            status: body.status,
          },
          headers: {
            Key: userInfo.key,
            Sign: Md5.hashStr(
              `PATCH/books/${id}${JSON.stringify({
                book: {
                  isbn: body.isbn,
                  title: body.title,
                  author: body.author,
                  published: body.published,
                  pages: body.pages,
                },
                status: body.status,
              })}${userInfo.secret}`
            ),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    // delete book
    deleteBooks: build.mutation<
      TResponse,
      { id: number | undefined; userInfo: AuthSate }
    >({
      query({ id, userInfo }) {
        return {
          url: `books/${id}`,
          method: "DELETE",
          headers: {
            Key: userInfo.key,
            Sign: Md5.hashStr(`DELETE/books/${id}${userInfo.secret}`),
          },
        };
      },
      invalidatesTags: ["Books"],
    }),
    //search books
    searchBooks: build.mutation<
      TSearchResponse,
      { search: string; userInfo: AuthSate }
    >({
      query({ search, userInfo }) {
        return {
          url: `books${search.length > 0 ? `/${search}` : ""}`,
          method: "GET",
          headers: {
            Key: userInfo.key,
            Sign: Md5.hashStr(`GET/books/${search}${userInfo.secret}`),
          },
        };
      },
      // invalidatesTags: () => ["Books"],
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
