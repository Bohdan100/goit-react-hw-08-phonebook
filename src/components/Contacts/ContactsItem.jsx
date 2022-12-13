import React from 'react';
import PropTypes from 'prop-types';
import { ImPhoneHangUp, ImBin } from 'react-icons/im';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-operations';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsListItem>
      <ContactsListText>
        <ImPhoneHangUp size={14} /> {name}: {number}
      </ContactsListText>

      <ContactsButtonDelete type="button" onClick={handleClick}>
        Delete <ImBin size={14} />
      </ContactsButtonDelete>
    </ContactsListItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
