import axios from 'axios';

export const addContact = async newContact => {
  const { data } = await axios.post(
    'https://64915e102f2c7ee6c2c815a7.mockapi.io/api/v1/contacts',
    newContact
  );
  return data;
};
