import styled from '@emotion/styled';

export const HeaderBox = styled.div`
  height: 350px;
  position: relative;
`;

export const HeaderTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;

  font-family: Georgia, serif;
  font-size: 48px;
  border-bottom: 1px solid ${p => p.theme.colors.primaryTextColor};
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const HeaderSubtitle = styled.p`
  margin-top: 30px;
  margin-bottom: 0px;
  font-family: ${p => p.theme.fonts.primaryFont};
  font-size: 26px;
  color: ${p => p.theme.colors.primaryTextColor};
`;
