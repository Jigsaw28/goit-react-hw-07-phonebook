import { useEffect } from 'react';
import { List, Button, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import { Circles } from 'react-loader-spinner';

export const Contactlist = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, isEmpty } = useSelector(
    state => state.contacts
  );
  const { filter } = useSelector(state => state);
  const filterName = items?.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <>
      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="#F08080"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="Loader"
          visible={true}
        />
      )}
      {error && <p>Oops!Something went wrong. Error: {error}</p>}
      <List>
        {items?.length > 0
          ? filterName.map(item => (
              <Item key={item.id}>
                {item.name}: {item.phone}
                <Button
                  type="button"
                  aria-label="Close"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </Item>
            ))
          : isEmpty && <p>Your contact book is empty</p>}
      </List>
    </>
  );
};
