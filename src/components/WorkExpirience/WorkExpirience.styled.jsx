import styled from '@emotion/styled';

export const ExpList = styled.ul`
  list-style: none;
  padding-left: 50px;
  padding-right: 50px;
`;
export const ExpListItem = styled.li`
  border: 1px solid ${p => p.theme.colors.accent};
  box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.accent},
    1px 2px 4px 0px ${p => p.theme.colors.accent},
    2px 4px 8px 0px ${p => p.theme.colors.accent},
    2px 4px 16px 0px ${p => p.theme.colors.accent};
  border-radius: 5px;
  margin-top: 30px;
  padding: 30px;
`;

export const JobTitle = styled.h3`
  color: ${p => p.theme.colors.primaryTextColor};
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: ${p => p.theme.fontSizes.titles};
  font-family: ${p => p.theme.fonts.primaryFont};
`;

export const Period = styled.p`
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: ${p => p.theme.fontSizes.secondaryText};
  font-family: ${p => p.theme.fonts.primaryFont};
  margin-bottom: 0px;
`;

export const RespUl = styled.ul`
  list-style: none;
  margin-top: 30px;
  margin-left: 0px;
  margin-rightl: 0px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const RestListItem = styled.li`
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: ${p => p.theme.fontSizes.primaryText};
  font-family: ${p => p.theme.fonts.primaryFont};
`;

export const TechSTitle = styled.span`
  font-style: italic;
  font-size: 18px;
`;

export const TechsList = styled.p`
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: ${p => p.theme.fontSizes.primaryText};
  font-family: ${p => p.theme.fonts.primaryFont};
`;
