import styled from '@emotion/styled';

export const ProjectList = styled.ul`
  list-style: none;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const ProjectListItem = styled.li`
border-radius: 5px;
border: ${p => p.theme.colors.accent};
box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.accent},
1px 2px 4px 0px ${p => p.theme.colors.accent},
2px 4px 8px 0px ${p => p.theme.colors.accent},
2px 4px 16px 0px ${p => p.theme.colors.accent};
padding: 30px;
margin-top: 30px;
`

export const ProjectsTitle = styled.h3`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.titles};
margin-top: 0px;
margin-bottom: 0px;
border-bottom: 1px solid ${p => p.theme.colors.primaryTextColor};
`
export const ProjectSubtitle = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: 18px;
font-family: ${p => p.theme.fonts.primaryFont};
color: ${p => p.theme.colors.primaryTextColor};
font-style: italic;
margin-top: 0px;
margin-bottom: 0px;
`
export const ProjectText = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.primaryText};
font-family: ${p => p.theme.fonts.primaryFont};
margin-top: 16px;
margin-bottom: 0px;
`

export const ProjectRole = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.titles};
font-family: ${p => p.theme.fonts.primaryFont};
font-weight: 700;
margin-top: 30px;
margin-bottom: 0px;
`
export const RoleList = styled.ul`
list-style: none;
padding-left: 0px;
padding-right: 0px;
margin-top: 10px;
margin-bottom: 0px;
`

export const RoleListItem = styled.li`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.primaryText};
font-family: ${p => p.theme.fonts.primaryFont};

`

export const ProjectLink = styled.a`
color: ${p => p.theme.colors.accent};
:not(:first-of-type) {
  margin-left: 30px;
};
:hover {
  color: white;
  transition-duration: 300ms;

`

export const ProjectLinksWrapper = styled.div`
margin-top: 30px;
`
