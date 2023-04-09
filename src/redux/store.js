import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  blogDataSlice  from '../features/blogs.slice';
import projectsDataSlice from '../features/projects.slice';



const persistConfig = {
  key: 'root',
  storage,
}



const rootReducer = combineReducers({

  projectsData: projectsDataSlice,
  blogsData: blogDataSlice,

})


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)