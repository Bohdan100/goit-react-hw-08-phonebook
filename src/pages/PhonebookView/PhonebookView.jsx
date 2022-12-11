import { Box } from 'constants';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

import { PhonebookTitle, ContactsTitle } from './PhonebookView.styled';

const PhonebookView = () => {
  return (
    <Box width="380px" m={[4, 'auto']} as="div">
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Contacts />
    </Box>
  );
};

export default PhonebookView;
