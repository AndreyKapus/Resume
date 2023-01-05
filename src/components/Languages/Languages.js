import { LanguagesTitle, LanguagesLi, LanguagesUl } from './Langueges.styled';

const Languages = () => {
  return (
    <div>
      <LanguagesTitle>Languages</LanguagesTitle>
      <LanguagesUl>
        <LanguagesLi>Ukrainian - Native</LanguagesLi>
        <LanguagesLi>Russian - Native</LanguagesLi>
        <LanguagesLi>English - Intermediate</LanguagesLi>
      </LanguagesUl>
    </div>
  );
};

export default Languages;
