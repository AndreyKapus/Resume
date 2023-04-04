import {
  NavigationList,
  NavListItem,
  NavigationLink,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavListItem>
          <NavigationLink to="/" end>
            About me
          </NavigationLink>
        </NavListItem>
        <NavListItem>
          <NavigationLink to="expirience">Work experience</NavigationLink>
        </NavListItem>
        <NavListItem>
          <NavigationLink to="education">Education</NavigationLink>
        </NavListItem>
        <NavListItem>
          <NavigationLink to="projects">Projects</NavigationLink>
        </NavListItem>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
