import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios(
    'https://64915e102f2c7ee6c2c815a7.mockapi.io/api/v1/contacts'
  );
  return data;
};
