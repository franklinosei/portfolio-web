import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs: [],
  selectedCategory: "All",
  allCategories: [],
  filteredBlogs: []

}

export const blogDataSlice = createSlice({
  name: 'Blogs Data',
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },

    setAllCategories: (state, action) => {
      state.allCategories = action.payload
    },

    setFilteredBlogs: (state, action) => {
      let query = action.payload;
      if (query === "All") {
        state.filteredBlogs = state.blogs
      } else {
        let tmp = state.blogs.filter((json) => json.blogSeries === query);
        state.filteredBlogs = tmp;
      }
    },


  },
})

// Action creators are generated for each case reducer function
export const { setBlogs, setCategory, setAllCategories, setFilteredBlogs } = blogDataSlice.actions

export default blogDataSlice.reducer