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

interface IHomeHeaderProps {}

export const HomeHeader: FC<IHomeHeaderProps> = (props) => {
  const { isShown, toggle } = useModal();

  return (
    <HomeHeaderWrap>
      <HeaderTopBlock>
        <HeaderTopTitle>
          You’ve got <span>7 book</span>
        </HeaderTopTitle>
        <CustomButton color="primary" variant="contained" onClick={toggle}>
          <PlusIcon />
          Create a book
        </CustomButton>
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
