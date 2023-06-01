import { FC } from "react";
import { HomeWrap } from "./home.s";
import { Container } from "../../styles/global-components";
import { BooksList, HomeHeader } from "./components";

export const Home: FC = () => {
  return (
    <HomeWrap>
      <Container>
        <HomeHeader />
        <BooksList />
      </Container>
    </HomeWrap>
  );
};
