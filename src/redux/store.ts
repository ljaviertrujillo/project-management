import { configureStore } from '@reduxjs/toolkit'
import { UserInterface } from "../models";
import { ProjectInterface } from '../models/project.model';
import  userReducer  from './states/user';
import projectSliceReducer, { ProjectState } from './states/project';

export interface AppStore {
    user: UserInterface,
    project: ProjectState
}

export default configureStore<AppStore>({
    reducer: {
        user: userReducer,
        project: projectSliceReducer
      }
})