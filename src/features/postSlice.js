import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk("posts/fetchPost", async()=>{
    const res = await axios.get("https://server-theta-umber.vercel.app/user");
    return res.data

})
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },

     reducers: {
    deletePost: (state, action) => {
      // action.payload হিসেবে id বা unique key আশা করছি
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },



    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null
        })
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });

    }

  

});
export const { deletePost } = postSlice.actions;
export default postSlice.reducer;