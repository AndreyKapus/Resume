import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${p => p.theme.colors.secondaryBgColor};
`;

export const NavListItem = styled.li`
  :not(:first-of-type) {
    margin-left: 20px;
  }
  font-size: 26px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: underline;
  font-family: ${p => p.theme.fonts.primaryFont};
  color: white;
  padding: 8px;
  border-radius: 5px;
  :hover {
    color: ${p => p.theme.colors.accent};
    transition-duration: 300ms;

  }
  &.active {
    color: ${p => p.theme.colors.accent};
    box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.accent},
    1px 2px 4px 0px ${p => p.theme.colors.accent},
    2px 4px 8px 0px ${p => p.theme.colors.accent},
    2px 4px 16px 0px ${p => p.theme.colors.accent};
  }
`;
