import {
  HeaderBox,
  HeaderTitle,
  HeaderWrapper,
  HeaderSubtitle,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderWrapper>
        <HeaderTitle>Kapustnikov Andrii</HeaderTitle>
        <HeaderSubtitle>Fulstack developer</HeaderSubtitle>
      </HeaderWrapper>
    </HeaderBox>
  );
};

export default Header;
