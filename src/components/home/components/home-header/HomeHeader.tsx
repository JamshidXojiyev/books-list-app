import { FC } from "react";
import {
  HeaderTopBlock,
  HeaderTopDescription,
  HeaderTopTitle,
  HomeHeaderWrap,
} from "./home-header.s";
import { CustomButton } from "../../../../styles/custom-styles";
import { PlusIcon } from "../../../../assets/icons";
import { useCreateBooksMutation } from "../../../../services/booksApi";

interface IHomeHeaderProps {}

export const HomeHeader: FC<IHomeHeaderProps> = (props) => {
  const [createBooks, {}] = useCreateBooksMutation();

  return (
    <HomeHeaderWrap>
      <HeaderTopBlock>
        <HeaderTopTitle>
          You’ve got <span>7 book</span>
        </HeaderTopTitle>
        <CustomButton color="primary" variant="contained">
          <PlusIcon />
          Create a book
        </CustomButton>
      </HeaderTopBlock>
      <HeaderTopDescription>
        Lorem ipsum dolor sit amet consectetur.
      </HeaderTopDescription>
    </HomeHeaderWrap>
  );
};
