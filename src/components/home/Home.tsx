import { FC } from "react";
import { HomeWrap } from "./home.s";
import { Container } from "../../styles/global-components";
import { BooksList, HomeHeader } from "./components";
import { useSelector } from "react-redux";
import { selectSearchBooks } from "../../app/features/searchBooksSlice";

export const Home: FC = () => {
  const searchBooks = useSelector(selectSearchBooks);

  return (
    <HomeWrap>
      <Container>
        <HomeHeader />
        <BooksList />
        {searchBooks.data && (
          <>
            <HomeHeader globalBooks />
            <BooksList globalBooks />
          </>
        )}
      </Container>
    </HomeWrap>
  );
};
