import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: #1E1E1E;
`;

export const NavListItem = styled.li`
  :not(:first-of-type) {
    margin-left: 20px;
  }
  font-size: 26px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: underline;
  font-family: Georgia, serif;
  color: white;
  padding: 8px;
  border-radius: 5px;
  :hover {
    color: rgba(0,255,255,0.7);

  }
  &.active {
    color: rgba(0,255,255,0.7);
    box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
    1px 2px 4px 0px rgba(0,255,255,0.7),
    2px 4px 8px 0px rgba(0,255,255,0.7),
    2px 4px 16px 0px rgba(0,255,255,0.7);
  }
`;
