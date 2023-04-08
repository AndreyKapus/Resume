import styled from '@emotion/styled';
import { theme } from 'Utils/Vars.styled';

export const LanguagesTitle = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.primaryFont};
  font-size: ${p => theme.fontSizes.titles};
  border-bottom: 2px solid ${p => p.theme.colors.accent};
  margin-bottom: 0px;
  margin-top: 30px;
`;

export const LanguagesLi = styled.li`
  font-family: ${p => p.theme.fonts.contactsFont};
  font-size: ${p => theme.fontSizes.secondaryText};
  color: ${p => p.theme.colors.primaryTextColor};
  :not(:first-of-type) {
    margin-top: 5px;
  }
`;

export const LanguagesUl = styled.ul`
  margin-top: 30px;
  margin-bottom: 0px;
`;
