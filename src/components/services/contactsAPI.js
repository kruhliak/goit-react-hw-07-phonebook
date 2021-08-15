import axios from 'axios';

axios.defaults.baseURL = 'https://611560258f38520017a3849b.mockapi.io/api/v1';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
