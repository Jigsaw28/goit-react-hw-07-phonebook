// import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contactlist } from './ContactList/ContactList';
import { Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contactlist />
    </Container>
  );
};

