import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/authorization';
// import defaultAvatar from './default-avatar.png';

import { UserMenuWrapper, UserMenuText, ExitBtn } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <UserMenuWrapper>
      {/* <img src={avatar} alt="" width="32" /> */}
      <UserMenuText>Welcome {name}</UserMenuText>
      <ExitBtn type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </ExitBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
