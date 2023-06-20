import axios from 'axios';

export const deleteContact = async (id) => {
  const { data } = await axios.delete(
    `https://64915e102f2c7ee6c2c815a7.mockapi.io/api/v1/contacts/${id}`
  );
  return data;
};
