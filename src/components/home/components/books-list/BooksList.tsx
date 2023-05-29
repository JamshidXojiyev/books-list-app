import { FC, useState } from "react";
import { BooksListWrap } from "./books-list.s";
import { BooksItem } from "./BooksItem";
import { IBooksList } from "../../../../interfaces/books-list-interface";

interface IBooksListProps {}

export const BooksList: FC<IBooksListProps> = (props) => {
  const [booksList, setBooksList] = useState<IBooksList[]>([]);

  return (
    <BooksListWrap>
      {booksList.map((book) => (
        <BooksItem
          id={book.id}
          isbn={book.isbn}
          title={book.title}
          cover={book.cover}
          author={book.author}
          published={book.published}
          pages={book.pages}
          description={book.description}
        />
      ))}
    </BooksListWrap>
  );
};
