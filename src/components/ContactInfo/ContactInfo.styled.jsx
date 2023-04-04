import styled from '@emotion/styled';

export const Title = styled.h2`
  color: rgba(0,255,255,0.7);
  font-family: Georgia, serif;
  font-size: 26px;
  border-bottom: 2px solid rgba(0,255,255,0.7);
  margin-bottom: 0px;
  margin-top: 30px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #D4D4D4;
`;

export const ContactListItem = styled.li`
  font-family: Verdana, sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  cursor: pointer;
  color: #D4D4D4
`;

export const ContactListLink = styled.a`
  text-decoration: none;
  color: #D4D4D4;
  display: flex;
  align-items: center;
  :hover {
    color: rgba(0,255,255,0.7);
  }
`;

export const ContactLinkText = styled.span`
  margin-left: 10px;
`;

export const ContactLocation = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  :hover {
    color: white;
  }
`;
