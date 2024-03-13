import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrentPageSliceState {
  value: string;
}

const initialState: CurrentPageSliceState = {
  value: "home",
};

export const currentPageSlice = createAppSlice({
  name: "currentPage",
  initialState,
  reducers: (create) => ({
    setCurrentPage: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }),
  }),
  selectors: {
    selectCurrentPage: (state) => state.value,
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export const { selectCurrentPage } = currentPageSlice.selectors;
