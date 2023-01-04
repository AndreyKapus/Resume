import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/about" end>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="expirience">Work experience</NavLink>
        </li>
        <li>
          <NavLink to="education">Education</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
