import { ImAddressBook } from 'react-icons/im';

import { HomeViewText } from './HomeView.styled';

const HomeView = () => {
  return (
    <div>
      <HomeViewText>Write your contacts in the phone book</HomeViewText>
      <ImAddressBook size={400} fill="#64b5f6" opacity={0.8} />
    </div>
  );
};

export default HomeView;
