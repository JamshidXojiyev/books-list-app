import { ChangeEvent, FC, useState } from "react";
import { SearchInputComponent, SearchInputWrap } from "./search-input.s";
import { SearchRefractionIcon } from "../../../../../../../assets";

interface ISearchInputProps {}

export const SearchInput: FC<ISearchInputProps> = (props) => {
  const [serach, setSearch] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <SearchInputWrap>
      <SearchRefractionIcon />
      <SearchInputComponent
        className="search-input"
        placeholder="Search for any training you want"
        value={serach}
        onChange={handleChange}
      />
    </SearchInputWrap>
  );
};
