import { FC } from "react";
import { BooksListWrap } from "./books-list.s";
import { BookItem } from "./BookItem";
import { BookSkeleton } from "./BookSkeleton";
import {
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../../../app/services/booksApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../../app/features/authSlice";
import { selectSearchBooks } from "../../../../app/features/searchBooksSlice";

interface IBooksListProps {
  globalBooks?: boolean;
}

export const BooksList: FC<IBooksListProps> = ({ globalBooks }) => {
  const userInfo = useSelector(selectAuth);
  const searchBooks = useSelector(selectSearchBooks);
  const { data: booksList, isLoading } = useGetBooksQuery(userInfo);
  const [deleteBook] = useDeleteBooksMutation();

  if (!globalBooks) {
    return (
      <>
        <BooksListWrap>
          {isLoading
            ? "hello"
                .split("")
                .map((item, index) => <BookSkeleton key={index} />)
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
                  status={item.status}
                  onDelete={() => deleteBook({ id: item.book?.id, userInfo })}
                />
              ))}
        </BooksListWrap>
      </>
    );
  } else {
    return (
      <>
        <BooksListWrap>
          {searchBooks.data?.map((item: any, index: number) => (
            <BookItem
              key={index}
              author={item.author}
              cover={item.cover}
              isbn={item.isbn}
              published={item.published}
              title={item.title}
              globalBooks
            />
          ))}
        </BooksListWrap>
      </>
    );
  }
};
