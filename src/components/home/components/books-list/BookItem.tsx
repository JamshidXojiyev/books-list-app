import { FC } from "react";
import {
  BooksAuthor,
  BooksDescription,
  BooksItemBottom,
  BooksItemEffectWrap,
  BooksItemTop,
  BooksItemWrap,
  BooksPages,
  BooksTitle,
} from "./books-list.s";
import { IBookInfo } from "../../../../interfaces/books-list-interface";

export const BookItem: FC<IBookInfo> = ({
  id,
  isbn,
  title,
  cover,
  author,
  published,
  pages,
}) => {
  return (
    <BooksItemEffectWrap>
      <BooksItemWrap>
        <BooksItemTop>
          <BooksTitle>{title}</BooksTitle>
          <BooksDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
            veritatis facere numquam libero voluptatem in non maxime dignissimos
            laborum?
          </BooksDescription>
        </BooksItemTop>
        <BooksItemBottom>
          <BooksAuthor>
            {author}: {published}-year
          </BooksAuthor>
          <BooksPages>{pages} pages</BooksPages>
        </BooksItemBottom>
      </BooksItemWrap>
    </BooksItemEffectWrap>
  );
};
