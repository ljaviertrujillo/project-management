import { configureStore } from '@reduxjs/toolkit'
import { UserInterface } from "../models";
import  userSliceReducer  from './states/user';

export interface AppStore {
    user: UserInterface;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer
    }
})