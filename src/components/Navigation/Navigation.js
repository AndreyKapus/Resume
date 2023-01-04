import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink>Work experience</NavLink>
        </li>
        <li>
          <NavLink>Education</NavLink>
        </li>
        <li>
          <NavLink>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
