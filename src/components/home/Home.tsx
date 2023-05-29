import { FC } from "react";
import { HomeWrap } from "./home.s";
import { Container } from "../../styles/global-components";
import { BooksList, HomeHeader } from "./components";

interface IHomeProps {}

export const Home: FC<IHomeProps> = (props) => {
  return (
    <HomeWrap>
      <Container>
        <HomeHeader />
        <BooksList />
      </Container>
    </HomeWrap>
  );
};
