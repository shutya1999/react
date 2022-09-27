import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "Популярністю",
        sortProperty: "rating",
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
        },
    },
});
export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;

export const {
    setCategoryId,
    setSort,
    setCurrentPage,
    setFilters,
    setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
