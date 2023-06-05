import { FC } from "react";
import {
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
import { BrandSvg } from "../../../../../assets/icons";

export const Header: FC = (props) => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderLeft>
          <BrandSvg />
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
