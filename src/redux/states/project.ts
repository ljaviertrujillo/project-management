import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectInterface } from "../../models/project.model";

export interface ProjectState {
  data: ProjectInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  data: [],
  isLoading: false,
  error: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    FetchStart: (state) => {
      state.isLoading = true;
      state.error = null
    },
    FetchSucess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    },
    FetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    FavoriteProject: (state, action) => {
      const project = state.data.find(project => project.id === action.payload)
      if(project){
        project.favorite = !project.favorite
      }
    },
  },
});

export const { FetchSucess, FetchStart, FetchError, FavoriteProject } = projectSlice.actions;

export default projectSlice.reducer;
