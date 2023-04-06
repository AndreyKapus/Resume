import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/home';
import AboutMe from './AboutMe/aboutMe';
import WorkExpirience from './WorkExpirience/WorkExpirience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import PageNotFound from './PageNotFound/PageNotFound';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const App = () => {
  // const [modalActive, setModalActive] = useState(true);


    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" index element={<AboutMe />} />
          <Route path="/expirience" element={<WorkExpirience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};
