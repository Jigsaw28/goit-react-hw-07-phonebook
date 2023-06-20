import { nanoid } from 'nanoid';
import { FormStyle, Input, BtnDelete } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Form = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);
  let inputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    }
    const dublContact = items.find(item => item.name === newContact.name);
    if (dublContact) {
      toast.error(`${newContact.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    dispatch(addContactsThunk(newContact));
    toast.success('Contact successfully added', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    })
    e.target.reset()
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label htmlFor={inputId}>Name</label>
      <br></br>
      <Input
        type="text"
        name="name"
        
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br></br>
      <label htmlFor={inputId}>Number</label>
      <br></br>
      <Input
        
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br></br>
      <BtnDelete type="submit" name="addContact">
        Add contact
      </BtnDelete>
      <ToastContainer />
    </FormStyle>
  );
};
