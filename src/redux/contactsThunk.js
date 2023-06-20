import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact } from 'api/addContact';
import { deleteContact } from 'api/deleteContact';
import { fetchContacts } from 'api/fetchContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact) => {
    return await addContact(newContact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    return await deleteContact(id);
  }
);