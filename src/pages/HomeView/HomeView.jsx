import { ImAddressBook } from 'react-icons/im';

import { HomeViewWrapper, HomeViewText, IconWrapper } from './HomeView.styled';

const HomeView = () => {
  const screenWidth = window.innerWidth;

  const findSizeIcon = screenWidth => {
    if (screenWidth > 1199) {
      return 400;
    }
    if (screenWidth < 400) {
      return 250;
    }
    return 320;
  };

  return (
    <HomeViewWrapper>
      <HomeViewText>Write your contacts in the phone book</HomeViewText>
      <IconWrapper>
        <ImAddressBook size={findSizeIcon(screenWidth)} />
      </IconWrapper>
    </HomeViewWrapper>
  );
};

export default HomeView;
