import styled from '@emotion/styled';
import { theme } from 'Utils/Vars.styled';

export const Title = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.primaryFont};
  font-size: ${p => p.theme.fontSizes.titles};
  border-bottom: 2px solid ${p => p.theme.colors.accent};
  margin-bottom: 0px;
  margin-top: 30px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: ${p => theme.colors.primaryTextColor};
`;

export const ContactListItem = styled.li`
  font-family: ${p => p.theme.fonts.contactsFont};
  font-size: ${p => p.theme.fontSizes.secondaryText};
  margin-bottom: 5px;
  cursor: pointer;
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const ContactListLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.primaryTextColor};
  display: flex;
  align-items: center;
  :hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  }
  transition-property: transform, color;
  transition-duration: 250ms;
  transition-timing-function: linear;
`;

export const ContactLinkText = styled.span`
  margin-left: 10px;
`;

export const ContactLocation = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  :hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  };
  transition-property: transform, color;
  transition-duration: 250ms;
  transition-timing-function: linear;
`;
