import { ImAddressBook } from 'react-icons/im';

import { HomeViewWrapper, HomeViewText, IconWrapper } from './HomeView.styled';

const HomeView = () => {
  return (
    <HomeViewWrapper>
      <HomeViewText>Write your contacts in the phone book</HomeViewText>
      <IconWrapper> <ImAddressBook size={400}/></IconWrapper>   
    </HomeViewWrapper>
  );
};

export default HomeView;
