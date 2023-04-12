
import { AboutMeWrapper, AboutMeTittle, FirstPar, Par, AboutMeText } from './AboutMe.styled';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeTittle>About me</AboutMeTittle>
      <AboutMeText>
        <FirstPar>I am a frontend developer, looking for a position in a company that
        creates interesting projects, making business more efficient and life
        easier.
        </FirstPar>
        <Par>
        I have knowledge and practical skills of working with HTML, CSS,
        JavaScript, React, TypeScript, Node.js, and experience of working in a team (Agile
        and Scrum methodology). Some of my projects are presented in the "projects" section.
        </Par>
        <Par>
        I am responsible, determined and eager to learn. I would be happy to work on interesting projects in a cool team.
        </Par>
      </AboutMeText>

    </AboutMeWrapper>
  );
};

export default AboutMe;
