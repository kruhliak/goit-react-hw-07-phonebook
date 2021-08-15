import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/add', ({ name, phone }) => ({
//   payload: {
//     name,
//     phone,
//   },
// }));

// export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

const contactsActions = {
  // addContact,
  // deleteContact,
  changeFilter,
};
export default contactsActions;
