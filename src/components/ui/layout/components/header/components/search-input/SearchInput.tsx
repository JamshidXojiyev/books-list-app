import { FC, useState, useEffect } from "react";
import { SearchInputComponent, SearchInputWrap } from "./search-input.s";
import { SearchRefractionIcon } from "../../../../../../../assets";
import { useDebounce } from "../../../../../../../hooks/useDebounce";
import { useSearchBooksMutation } from "../../../../../../../app/services/booksApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../../../../../app/features/authSlice";
import { useDispatch } from "react-redux";
import { setSearchBooks } from "../../../../../../../app/features/searchBooksSlice";
import { toast } from "react-toastify";
import { LinearProgress } from "@mui/material";

interface ISearchInputProps {}

export const SearchInput: FC<ISearchInputProps> = (props) => {
  const dispatch = useDispatch();
  const [serach, setSearch] = useState<string>("");
  const debounced: string = useDebounce(serach);
  const userInfo = useSelector(selectAuth);

  const [searchBook, { isLoading }] = useSearchBooksMutation();

  useEffect(() => {
    fetchSearchAPI();
  }, [debounced]);

  async function fetchSearchAPI() {
    if (debounced.length > 3) {
      const resData: any = await searchBook({ search: debounced, userInfo });
      if (resData?.data?.isOk) {
        await dispatch(setSearchBooks(resData.data));
      } else {
        toast.error(resData.error.data.message);
      }
    }
  }

  return (
    <>
      <SearchInputWrap>
        <SearchRefractionIcon />
        <SearchInputComponent
          className="search-input"
          placeholder="Search for any training you want"
          value={serach}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isLoading && <LinearProgress />}
      </SearchInputWrap>
    </>
  );
};
