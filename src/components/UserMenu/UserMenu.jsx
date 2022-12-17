import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/authorization';
import Avatar from 'react-avatar';

import { UserMenuWrapper, UserMenuText, ExitBtn } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const screenWidth = window.innerWidth;
  return (
    <UserMenuWrapper>
      <Avatar
        name={name}
        size={screenWidth < 768 ? 16 : 32}
        fgColor={'#ffffff'}
        color={`var(--textFirst)`}
        round={true}
      />
      <UserMenuText>Welcome {screenWidth > 768 && name}</UserMenuText>
      <ExitBtn type="button" onClick={() => dispatch(authOperations.logOut())}>
        {screenWidth < 768 ? 'Exit' : 'Log out'}
      </ExitBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
