import { List, Button, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contactlist = () => {
  const dispatch = useDispatch();
  const {
    contacts: { contacts },
  } = useSelector(state => state);
  const { filter } = useSelector(state => state);
  const filterName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filterName?.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            aria-label="Close"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
