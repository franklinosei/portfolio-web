import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],

}

export const projectsDataSlice = createSlice({
  name: 'Projects Data',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setProjects } = projectsDataSlice.actions

export default projectsDataSlice.reducer