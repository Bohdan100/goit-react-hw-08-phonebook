import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slice';

import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const newFilter = e.target.value.trim().toLowerCase();
    dispatch(filterContacts(newFilter));
  };

  return (
    <FilterWrapper>
      <FilterLabel>Filter contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={changeFilter}
        placeholder="Search name"
      />
    </FilterWrapper>
  );
};
