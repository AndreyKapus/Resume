import ContactInfo from './ContactInfo/ContactInfo';
import SoftSkills from './SoftSkills/SoftSkills';
import TechSkills from './TechSkills/TechSkils';
import Languages from './Languages/Languages';

export const App = () => {
  return (
    <div>
      <ContactInfo />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </div>
  );
};
