import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
  searchText: "",
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const data = await fetch("products.json")
  const jsonData = await data.json()
  return jsonData.products
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
    updateProductStatus: (state, action) => {
      state.productsList = state.productsList.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload
        }else {
          return product
        }
      })
    },
    searchTextUpdate: (state, action) => {
      state.searchText = action.payload
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productsList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct, updateProductStatus, searchTextUpdate } = productSlice.actions;

export default productSlice.reducer;
