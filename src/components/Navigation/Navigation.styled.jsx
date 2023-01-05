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
  background-color: #c0c0c2;
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
  :hover {
    color: black;
  }
`;
