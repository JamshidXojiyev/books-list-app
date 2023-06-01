import { FC } from "react";
import {
  BooksItemBottom,
  BooksItemEffectWrap,
  BooksItemTop,
  BooksItemWrap,
} from "./books-list.s";
import { CustomSkeleton } from "../../../../styles/custom-styles/custom-skeleton";

export const BookSkeleton: FC = () => {
  return (
    <BooksItemEffectWrap>
      <BooksItemWrap>
        <BooksItemTop>
          <CustomSkeleton w="70%" h="28px" />
          <CustomSkeleton w="100%" h="18px" />
          <CustomSkeleton w="100%" h="18px" />
          <CustomSkeleton w="100%" h="18px" />
          <CustomSkeleton w="60%" h="18px" />
        </BooksItemTop>
        <BooksItemBottom>
          <CustomSkeleton w="40%" />
          <CustomSkeleton w="30%" />
        </BooksItemBottom>
      </BooksItemWrap>
    </BooksItemEffectWrap>
  );
};
