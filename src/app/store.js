import { configureStore } from '@reduxjs/toolkit';

import viewportReducer from '../features/common/viewportSlice';

export const store = configureStore({
  reducer: {
    viewport: viewportReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
