import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import { Forms } from './types/FormTypes';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState> & Forms;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
