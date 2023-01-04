import ContactInfo from '../../components/ContactInfo/ContactInfo';
import SoftSkills from '../../components/SoftSkills/SoftSkills';
import TechSkills from '../../components/TechSkills/TechSkils';
import Languages from '../../components/Languages/Languages';
import ProfileImage from '../../components/photo/photo';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { HomePage, HeaderStyledWrapper } from './HomePage.styled';

const Home = () => {
  return (
    <HomePage>
      <div>
        <ProfileImage />
        <ContactInfo />
        <TechSkills />
        <SoftSkills />
        <Languages />
      </div>
      <HeaderStyledWrapper>
        <Header />
        <Navigation />
      </HeaderStyledWrapper>
    </HomePage>
  );
};

export default Home;
