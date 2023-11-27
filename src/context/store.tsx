import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counter';

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
