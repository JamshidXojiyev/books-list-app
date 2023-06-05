import { FC, useState } from "react";
import {
  HeaderTopBlock,
  HeaderTopDescription,
  HeaderTopTitle,
  HomeHeaderWrap,
} from "./home-header.s";
import { CustomButton } from "../../../../styles/custom-styles";
import { PlusIcon } from "../../../../assets/icons";
import { useModal } from "../../../../hooks/useModal";
import { CustomModal } from "../../../ui";
import { CreateBookForm } from "../create-book-form";
import { useSelector } from "react-redux";
import { selectSearchBooks } from "../../../../app/features/searchBooksSlice";

interface IHomeHeaderProps {
  globalBooks?: boolean;
}

export const HomeHeader: FC<IHomeHeaderProps> = ({ globalBooks }) => {
  const { isShown, toggle } = useModal();
  const searchBooks = useSelector(selectSearchBooks);

  return (
    <HomeHeaderWrap>
      <HeaderTopBlock>
        <HeaderTopTitle>
          {!globalBooks ? (
            "Your books"
          ) : (
            <>
              The books you searched for
              <span> {searchBooks.data?.length} books</span>
            </>
          )}
        </HeaderTopTitle>
        {!globalBooks && (
          <CustomButton color="primary" variant="contained" onClick={toggle}>
            <PlusIcon />
            Create a book
          </CustomButton>
        )}
      </HeaderTopBlock>
      <HeaderTopDescription>
        Lorem ipsum dolor sit amet consectetur.
      </HeaderTopDescription>

      {/* modal */}
      <CustomModal isShown={isShown} hide={toggle} title="Create a book">
        <CreateBookForm hide={toggle} />
      </CustomModal>
    </HomeHeaderWrap>
  );
};
