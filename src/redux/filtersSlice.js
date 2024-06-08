import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            ga: true,
          },
        };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
