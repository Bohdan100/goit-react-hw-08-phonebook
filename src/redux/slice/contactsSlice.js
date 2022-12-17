import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../contacts-operations';

const setPending = state => {
  state.isLoading = true;
};
const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: setError,

    [addContact.pending]: setPending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: setError,

    [deleteContact.pending]: setPending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
      // state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected]: setError,
  },
});

export const contactsReducer = contactsSlice.reducer;
