import { useDispatch, useSelector } from 'react-redux';
import { ImCheckmark } from 'react-icons/im';
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/contacts-operations';
import { toast } from 'react-toastify';

import { selectContacts } from 'redux/selectors';

import {
  PhonebookForm,
  PhonebookFormBtn,
  PhonebookFormLabel,
  PhonebookFormInput,
  BtnWrapper,
  BtnText,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const errorArray = items.filter(
      contact => contact.name.toLowerCase() === userName.toLowerCase()
    );

    if (errorArray.length === 0) {
      const newContact = { name: userName, number: userNumber };

      dispatch(addContact(newContact));
      toast.info('You add a new contact in your Phonebook!');
    } else {
      toast.error('This contact is already in your Phonebook!');
    }

    form.reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookFormLabel htmlFor={nanoid(5)}>
        Name
        <PhonebookFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your contact's name"
          required
        />
      </PhonebookFormLabel>
      <PhonebookFormLabel htmlFor={nanoid(5)}>
        Number
        <PhonebookFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter your contact's phone number"
          required
        />
      </PhonebookFormLabel>
      <PhonebookFormBtn type="submit">
        <BtnWrapper>
          <BtnText>Add contact</BtnText>
          <ImCheckmark fill={'#fff'} />
        </BtnWrapper>
      </PhonebookFormBtn>
    </PhonebookForm>
  );
};
