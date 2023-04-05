import styled from '@emotion/styled';

export const EducationList = styled.ul`
  list-style: none;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

export const ListItem = styled.li`
  margin-top: 30px;
  padding: 30px;
  border: ${p => p.theme.colors.accent};
  box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
  1px 2px 4px 0px rgba(0,255,255,0.7),
  2px 4px 8px 0px rgba(0,255,255,0.7),
  2px 4px 16px 0px rgba(0,255,255,0.7);
`;

export const EducationTitle = styled.h2`
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: ${p => p.theme.fontSizes.titles};
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const EducationSubtitle = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.secondaryText};
font-family: ${p => p.theme.fonts.primaryFont};
margin-top: 16px;
margin-bottom: 0px;
`;

export const EducationText = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.primaryText};
font-family: ${p => p.theme.fonts.primaryFont};
margin-top: 30px;
margin-bottom: 0px;
`
