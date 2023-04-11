
import { AboutMeWrapper, AboutMeTittle, FirstPar, SecondPar, AboutMeText } from './AboutMe.styled';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeTittle>About me</AboutMeTittle>
      <AboutMeText>
        <FirstPar>I am a frontend developer, looking for a position in a company that
        creates interesting projects, making business more efficient and life
        easier.
        </FirstPar>
        <SecondPar>
        I have knowledge and practical skills of working with HTML, CSS,
        JavaScript, React, TypeScript, Node.js, and experience of working in a team (Agile
        and Scrum methodology). I am responsible, determined and eager to learn
        </SecondPar>
      </AboutMeText>

    </AboutMeWrapper>
  );
};

export default AboutMe;
