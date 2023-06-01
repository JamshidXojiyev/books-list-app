import { FC, useState, useEffect } from "react";
import { SearchInputComponent, SearchInputWrap } from "./search-input.s";
import { SearchRefractionIcon } from "../../../../../../../assets";
import { useDebounce } from "../../../../../../../hooks/useDebounce";

interface ISearchInputProps {}

export const SearchInput: FC<ISearchInputProps> = (props) => {
  const [serach, setSearch] = useState<string>("");
  const debounced = useDebounce(serach);

  useEffect(() => {
    console.log("debounced: ", debounced);
  }, [debounced]);

  return (
    <SearchInputWrap>
      <SearchRefractionIcon />
      <SearchInputComponent
        className="search-input"
        placeholder="Search for any training you want"
        value={serach}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchInputWrap>
  );
};
