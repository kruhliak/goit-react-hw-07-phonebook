import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getContacts,
  addContact,
  deleteContact,
} from '../../services/contactsAPI';

const displayToastError = e => toast.error(`${e}`);

const displayToastSuccess = message => toast.success(`${message}`);

export const fetchContactsList = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error);
    }
  },
);

export const createItem = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      displayToastSuccess(`Contact ${contact.name} added`);
      const response = await addContact(contact);
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error);
    }
  },
);

export const deleteItem = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error);
    }
  },
);
