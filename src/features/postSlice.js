import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const res = await axios.get("https://southeast-asia-server-three.vercel.app/addTourist");
  return res.data;
});

// delete the server
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axios.delete(`https://southeast-asia-server-three.vercel.app/addTourist/${id}`);
  return id;
});


const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  reducers: {},

  // delete only ui

  //      reducers: {
  //     deletePost: (state, action) => {
  //       // action.payload হিসেবে id বা unique key আশা করছি
  //       state.posts = state.posts.filter((post) => post._id !== action.payload);
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    // delete the server
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    });
  },
});

// delete only ui
// export const { deletePost } = postSlice.actions;

export default postSlice.reducer;
