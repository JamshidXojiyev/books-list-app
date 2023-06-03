import { ChangeEvent, FC, useState, useEffect } from "react";
import { BooksListWrap } from "./books-list.s";
import { BookItem } from "./BookItem";
import { BookSkeleton } from "./BookSkeleton";
import {
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../../../services/booksApi";

export const BooksList: FC = () => {
  const { data: booksList, isLoading } = useGetBooksQuery();
  const [deleteBook, {}] = useDeleteBooksMutation();

  return (
    <>
      <BooksListWrap>
        {isLoading
          ? "hello".split("").map((item, index) => <BookSkeleton key={index} />)
          : booksList?.data?.map((item: any, index: number) => (
              <BookItem
                key={index}
                id={item.book?.id}
                isbn={item.book?.isbn}
                title={item.book?.title}
                cover={item.book?.cover}
                author={item.book?.author}
                published={item.book?.published}
                pages={item.book?.pages}
                onDelete={() => deleteBook(item.book?.id)}
                onEdit={() => console.log("edit")}
              />
            ))}
      </BooksListWrap>
    </>
  );
};
