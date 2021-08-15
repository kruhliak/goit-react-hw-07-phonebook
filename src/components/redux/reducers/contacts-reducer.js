import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsList,
  createItem,
  deleteItem,
} from '../Operations/contacts-operations';
import { changeFilter } from '../actions/contacts-action';

const items = createReducer([], {
  [fetchContactsList.fulfilled]: (_, action) => action.payload,
  [createItem.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteItem.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsList.pending]: () => true,
  [fetchContactsList.fulfilled]: () => false,
  [fetchContactsList.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, action) => action.payload,
  [fetchContactsList.pending]: () => null,
  [createItem.rejected]: (_, action) => action.payload,
  [createItem.pending]: () => null,
  [deleteItem.rejected]: (_, action) => action.payload,
  [deleteItem.pending]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
