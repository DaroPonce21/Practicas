import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import authReducer from './authSlice'; 

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});

export default store;