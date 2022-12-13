import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/authorization';
import Avatar from 'react-avatar';

import { UserMenuWrapper, UserMenuText, ExitBtn } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <UserMenuWrapper>
      <Avatar
        name={name}
        size={32}
        fgColor={'#ffffff'}
        color={'#64b5f6'}
        round={true}
        mar
      />
      <UserMenuText>Welcome {name}</UserMenuText>
      <ExitBtn type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </ExitBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
