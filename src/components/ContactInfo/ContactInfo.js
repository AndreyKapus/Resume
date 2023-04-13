import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineIdcard, AiFillGithub } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useState } from 'react';
import {
  Title,
  ContactList,
  ContactListItem,
  ContactListLink,
  ContactLinkText,
  ContactLocation,
} from './ContactInfo.styled';
import MapModal from 'components/MapModal/MapModal';

const ContactInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            href="https://djinni.co/q/ed8b389060/"
            rel="noreferrer"
          >
            {' '}
            <AiOutlineIdcard />
            <ContactLinkText>Djinni</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListLink
            target="_blank"
            href="https://github.com/AndreyKapus"
            rel="noreferrer"
          >
            {' '}
            <AiFillGithub />
            <ContactLinkText>Github</ContactLinkText>
          </ContactListLink>
        </ContactListItem>
        <ContactListItem>
          <ContactLocation>
            <HiOutlineLocationMarker />
            <ContactLinkText onClick={() => openModal()}>Kyiv, Ukraine</ContactLinkText>
          </ContactLocation>
        </ContactListItem>
      </ContactList>
      <MapModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
};

export default ContactInfo;
