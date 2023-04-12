import andrii from '../../images/andrii.jpg';
import { StyledImg } from './Photo.styled';

const ProfileImage = () => {
  return (
      <>
        <StyledImg src={andrii} alt="img" width="350px" height="350px" />
      </>
  );
};

export default ProfileImage;
