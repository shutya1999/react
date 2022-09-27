import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    "product/fetchProductStatus",
    async (params) => {
        const { sortParam, order, catParam, searchParam, currentPage } = params;
        const { data } = await axios.get(
            `https://62fa5e013c4f110faa97be0a.mockapi.io/product?page=${currentPage}&limit=4${catParam}&sortBy=${sortParam}&order=${order}${searchParam}`
        );

        return data;
    }
);

const initialState = {
    items: [],
    status: "loading", // loading/success/error
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.items = [];
            state.status = "loading";
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [fetchProduct.rejected]: (state) => {
            state.items = [];
            state.status = "error";
        },
    },
});

export const selectProductData = (state) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
