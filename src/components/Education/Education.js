import {EducationTitle, EducationList, EducationSubtitle, ListItem, EducationText} from './Education.styled'

const Education = () => {
  return (
    <div>
      <EducationList>
        <ListItem>
          <EducationTitle>IT school Go IT (Kyiv)</EducationTitle>
          <EducationSubtitle>( Fullstack Developer )</EducationSubtitle>
          <EducationText>HTML/CSS/SASS, Java Script, React, Redux, React native, Node.JS, REST API, Webpack, Parcel, Handlebars, MongoDB, Type Script, Git, Responsive/Adaptive design</EducationText>
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
    </div>
  );
};

export default Education;
