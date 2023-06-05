import { FC } from "react";
import {
  BookItemBtn,
  BookItemBtnBlock,
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
import { Edit04Icon, Trash01Icon } from "../../../../assets/icons";
import { useModal } from "../../../../hooks/useModal";
import { CustomModal } from "../../../ui";
import { EditBookForm } from "../edit-book-form";

export const BookItem: FC<IBookInfo> = ({
  id,
  isbn,
  title,
  cover,
  author,
  published,
  pages,
  status,
  onDelete,
  globalBooks,
}) => {
  const { isShown, toggle } = useModal();

  return (
    <>
      <BooksItemEffectWrap>
        <BooksItemWrap>
          <BooksItemTop>
            <BooksTitle>{title}</BooksTitle>
            <BooksDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
              veritatis facere numquam libero voluptatem in non maxime
              dignissimos laborum?
            </BooksDescription>
          </BooksItemTop>
          <BooksItemBottom>
            <BooksAuthor>
              {author}: {published}-year
            </BooksAuthor>
            <BooksPages>{pages} pages</BooksPages>
          </BooksItemBottom>
        </BooksItemWrap>
        {!globalBooks && (
          <BookItemBtnBlock>
            <BookItemBtn action="delete" onClick={onDelete}>
              <Trash01Icon />
            </BookItemBtn>
            <BookItemBtn onClick={toggle}>
              <Edit04Icon />
            </BookItemBtn>
          </BookItemBtnBlock>
        )}
      </BooksItemEffectWrap>

      {/* edit book item modal */}
      <CustomModal isShown={isShown} hide={toggle} title="Create a book">
        <EditBookForm
          hide={toggle}
          id={id}
          body={{ isbn, title, cover, author, published, pages }}
          status={status}
        />
      </CustomModal>
    </>
  );
};
