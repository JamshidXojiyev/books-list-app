import { FC } from "react";
import {
  BrandImage,
  HeaderLeft,
  HeaderRight,
  HeaderWrap,
  UserImage,
  UserImageWrap,
} from "./header.s";
import { SearchInput } from "./components";
import IconButton from "@mui/material/IconButton";
import { Bell01Icon } from "../../../../../assets";
import { Container } from "../../../../../styles/global-components";

// import BrandImageSRC from "../../../../../assets/images/logo-56.png";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderLeft>
          {/* <BrandImage src={BrandImageSRC} /> */}
          <SearchInput />
        </HeaderLeft>
        <HeaderRight>
          <IconButton aria-label="add to shopping cart">
            <Bell01Icon />
          </IconButton>
          <UserImageWrap>
            <UserImage src="https://randomuser.me/api/portraits/women/50.jpg" />
          </UserImageWrap>
        </HeaderRight>
      </Container>
    </HeaderWrap>
  );
};
