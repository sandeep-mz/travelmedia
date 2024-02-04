import { configureStore } from "@reduxjs/toolkit";
import openPostReducer from "../features/openPostSlice";
import postsReducer from "../features/posts";

const store = configureStore({
  reducer: { openPost: openPostReducer, posts: postsReducer },
});

export default store;