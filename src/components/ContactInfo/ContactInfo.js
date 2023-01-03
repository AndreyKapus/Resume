import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineIdcard } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact information</h2>
      <ul>
        <li>
          <a href="tel:+380934066204">
            <BsTelephone /> +380934066204
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:andriikapustnikov@gmail.com"
            rel="noreferrer"
          >
            {' '}
            <FiMail />
            andriikapustnikov@gmail.com
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andrii-kapustnikov-473925254/"
            rel="noreferrer"
          >
            {' '}
            <AiOutlineLinkedin />
            Linkedin
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://djinni.co/q/01f7dd72a3/"
            rel="noreferrer"
          >
            {' '}
            <AiOutlineIdcard />
            Djinni
          </a>
        </li>
        <li>
          <p>
            <HiOutlineLocationMarker /> Kyiv, Ukraine
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
