import Modal from 'react-modal';
import customStyles from './Modal.styles';
import { GoogleMap } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';
import {CloseMapBtn} from './Modal.styles'

const MARKER_KEY = "AIzaSyA18isizDhB7dc7B3Ujq4VIbYV0iA-HnDE"

const MapModal = ({modalIsOpen, closeModal}) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MARKER_KEY,
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 50.450001,
    lng: 30.523333,
  };

  const position = { lat: 50.450001, lng: 30.523333 };

  Modal.setAppElement('body');

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseMapBtn onClick={closeModal}>close</CloseMapBtn>

{  isLoaded && <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            Key={MARKER_KEY}
            position={position}
        />
        </GoogleMap>}
      </Modal>

    </>
  )
}

export default MapModal;
