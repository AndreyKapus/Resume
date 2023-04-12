import ContactInfo from '../../components/ContactInfo/ContactInfo';
import SoftSkills from '../../components/SoftSkills/SoftSkills';
import TechSkills from '../../components/TechSkills/TechSkils';
import Languages from '../../components/Languages/Languages';
import ProfileImage from '../../components/photo/photo';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import {
  HomePage,
  HeaderStyledWrapper,
  StyledSideBar,
  Info,
  Container,
} from './HomePage.styled';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
    <HomePage>
      <StyledSideBar>
        <ProfileImage />
        <Info>
          <ContactInfo />
          <TechSkills />
          <SoftSkills />
          <Languages />
        </Info>
      </StyledSideBar>
      <HeaderStyledWrapper>
        <Header />
        <Navigation />
        <Outlet />
      </HeaderStyledWrapper>
    </HomePage>
    </Container>
  );
};

export default Home;
