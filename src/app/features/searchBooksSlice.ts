import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IBookInfo } from "../../interfaces/books-list-interface";

type TSearchResponse = {
  data?: IBookInfo[] | null;
  isOk?: boolean;
  message?: string;
};

export const SearchResponseIS: TSearchResponse = {
  data: null,
  isOk: true,
  message: "",
};

export const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState: SearchResponseIS,
  reducers: {
    setSearchBooks: (state, action: PayloadAction<TSearchResponse>) => {
      state.data = action.payload.data;
      state.isOk = action.payload.isOk;
      state.message = action.payload.message;
    },
  },
});

export const selectSearchBooks = (state: RootState) => state.searchBooks;

export const { setSearchBooks } = searchBooksSlice.actions;

export default searchBooksSlice.reducer;
