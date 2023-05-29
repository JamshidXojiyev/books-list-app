import { FC } from "react";
import {
  BooksAuthor,
  BooksDescription,
  BooksItemBottom,
  BooksItemTop,
  BooksItemWrap,
  BooksPages,
  BooksTitle,
} from "./books-list.s";
import { IBooksList } from "../../../../interfaces/books-list-interface";

export const BooksItem: FC<IBooksList> = ({
  id,
  isbn,
  title,
  cover,
  author,
  published,
  pages,
  description,
}) => {
  return (
    <BooksItemWrap>
      <BooksItemTop>
        <BooksTitle>{title}</BooksTitle>
        <BooksDescription>{description}</BooksDescription>
      </BooksItemTop>
      <BooksItemBottom>
        <BooksAuthor>
          {author}: {published}-year
        </BooksAuthor>
        <BooksPages>{pages} pages</BooksPages>
      </BooksItemBottom>
    </BooksItemWrap>
  );
};
