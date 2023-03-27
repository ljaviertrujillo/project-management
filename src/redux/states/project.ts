import { createSlice } from "@reduxjs/toolkit";
import { ProjectInterface } from "../../models/project.model";

export interface ProjectState{
    projects: ProjectInterface[],
    loading: boolean,
    error: any
}

const initialState: ProjectState = {
    projects: [],
    loading: false,
    error: null
  };

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        FetchProjects: (state, action) => {
            return{
                ...state, 
                projects: action.payload
            }
            
        },
        FetchError: (state, action) => {
            return{
                ...state,
                error: action.payload             
            }
        },
        ResetProjects : () => {
            return initialState
        }
    }
}) 

export const { FetchProjects, FetchError, ResetProjects } = projectSlice.actions

export default projectSlice.reducer;