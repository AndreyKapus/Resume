import React from 'react';
import Modal from 'react-modal';
import Certificate from '../../images/certificate.jpg';
import CertificateModalStyles, { CertificateImg, CloseMapBtn } from './ModalCertificate.styled';
import { RiCloseLine } from 'react-icons/ri';

Modal.setAppElement('#root');

function CertificateModal({isModalOpen, closeModal}) {

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={CertificateModalStyles}
      >
        <CertificateImg src={Certificate} alt='Certificate' />
        <CloseMapBtn onClick={closeModal}><RiCloseLine style={{ fontSize: 25 }}/></CloseMapBtn>
      </Modal>
    </div>
  );
}

export default CertificateModal;
