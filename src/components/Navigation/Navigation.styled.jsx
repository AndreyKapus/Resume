import styled from '@emotion/styled';

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const NavListItem = styled.li`
  :not(:first-of-type) {
    margin-left: 20px;
  }
`;
