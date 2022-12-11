import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { appendContact, removeContact } from 'redux/slice/contactsSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data: contacts } = await axios.get(`/contacts`);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const { data: newContact } = await axios.post(`/contacts/`, contact);
      dispatch(appendContact(newContact));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data: contacts } = await axios.delete(`/contacts/${Number(id)}`);
      dispatch(removeContact(id));

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
