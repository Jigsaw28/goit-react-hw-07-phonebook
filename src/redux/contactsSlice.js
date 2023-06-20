import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contactsThunk';
import {
  handlePending,
  handleRejected,
  handleFulfilledAdd,
  handleFulfilledGet,
  handleFulfilledDelete,
} from './handleOptions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addCase(deleteContactsThunk.rejected, handleRejected);
  },
});

export const contactReducer = contactsSlice.reducer;
