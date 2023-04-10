import { useState } from 'react';
import {EducationTitle, EducationList, EducationSubtitle, OpenCertificateBtn, ListItem, EducationText} from './Education.styled'
import CertificateModal from 'components/Modal/Modal';


const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <EducationList>
        <ListItem>
          <EducationTitle>IT school Go IT (Kyiv)</EducationTitle>
          <EducationSubtitle>( Fullstack Developer )</EducationSubtitle>
          <EducationText>HTML/CSS/SASS, Java Script, React, Redux, React native, Node.JS, REST API, Webpack, Parcel, Handlebars, MongoDB, Type Script, Git, Responsive/Adaptive design</EducationText>
          <OpenCertificateBtn type='button' onClick={() => openModal()}>
            CERTIFICATE
            </OpenCertificateBtn>
        </ListItem>
        <ListItem>
          <EducationTitle>National Pedagogical Drahomanov University (Kyiv)</EducationTitle>
          <EducationSubtitle>( Master's degree )</EducationSubtitle>
          <EducationText>
            Higher education pedagogy. Department of "Psychology, sociology,
            management"
          </EducationText>
        </ListItem>
      </EducationList>
      <CertificateModal isModalOpen={isOpen} closeModal={closeModal}/>
    </div>
  );
};

export default Education;
