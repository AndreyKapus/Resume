import ContactInfo from './ContactInfo/ContactInfo';
import SoftSkills from './SoftSkills/SoftSkills';
import TechSkills from './TechSkills/TechSkils';
import Languages from './Languages/Languages';
import ProfileImage from './photo/photo';

export const App = () => {
  return (
    <div>
      <ProfileImage />
      <ContactInfo />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </div>
  );
};
