import { NavLink } from 'react-router-dom';
import { NavigationList, NavListItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavListItem>
          <NavLink to="/about" end>
            About me
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="expirience">Work experience</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="education">Education</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="projects">Projects</NavLink>
        </NavListItem>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
