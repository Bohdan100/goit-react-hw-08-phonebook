import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts-operations';

import { ContactsList } from './Contacts.styled';
import { ContactsItem } from './ContactsItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactsLoader } from './ContactsLoader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    <>
      {isLoading && <ContactsLoader />}
      {error && <b>{error}</b>}
      <ContactsList>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
      </ContactsList>
    </>
  );
};
