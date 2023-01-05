import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineIdcard } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  Title,
  ContactList,
  ContactListItem,
  ContactListLink,
  ContactLinkText,
  ContactLocation,
} from './ContactInfo.styled';

const ContactInfo = () => {
  return (
    <div>
      <Title>Contact information</Title>
      <ContactList>
        <ContactListItem>
          <ContactListLink href="tel:+380934066204">
            <BsTelephone />
            <ContactLinkText>+380934066204</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink
            target="_blank"
            href="mailto:andriikapustnikov@gmail.com"
            rel="noreferrer"
          >
            {' '}
            <FiMail />
            <ContactLinkText>andriikapustnikov@gmail.com</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink
            target="_blank"
            href="https://www.linkedin.com/in/andrii-kapustnikov-473925254/"
            rel="noreferrer"
          >
            {' '}
            <AiOutlineLinkedin />
            <ContactLinkText>Linkedin</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink
            target="_blank"
            href="https://djinni.co/q/01f7dd72a3/"
            rel="noreferrer"
          >
            {' '}
            <AiOutlineIdcard />
            <ContactLinkText>Djinni</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactLocation>
            <HiOutlineLocationMarker />
            <ContactLinkText>Kyiv, Ukraine</ContactLinkText>
          </ContactLocation>
        </ContactListItem>
      </ContactList>
    </div>
  );
};

export default ContactInfo;
