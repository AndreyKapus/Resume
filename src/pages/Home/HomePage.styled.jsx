import styled from '@emotion/styled';

export const HomePage = styled.div`
  display: inline-block;

@media screen and (min-width: 768px) {
  display: flex;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
}
`;

export const HeaderStyledWrapper = styled.div`
  text-align: center;
  width: 800px;
  background-color: ${p => p.theme.colors.primaryBgColor};
`;

export const StyledSideBar = styled.div`
  color: #000000;
  background-color: ${p => p.theme.colors.secondaryBgColor};
`;

export const Info = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
