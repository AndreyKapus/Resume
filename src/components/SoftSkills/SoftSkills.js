import {
  SoftSkillsTitle,
  SoftSkillsLi,
  SoftSkillsUl,
} from './SoftSkills.styled';

const SoftSkills = () => {
  return (
    <div>
      <SoftSkillsTitle>Soft skills</SoftSkillsTitle>
      <SoftSkillsUl>
        <SoftSkillsLi>Broad-minded</SoftSkillsLi>
        <SoftSkillsLi>Calm</SoftSkillsLi>
        <SoftSkillsLi>Reliablе</SoftSkillsLi>
        <SoftSkillsLi>Determined</SoftSkillsLi>
        <SoftSkillsLi>Eager to learn</SoftSkillsLi>
        <SoftSkillsLi>Punctual</SoftSkillsLi>
        <SoftSkillsLi>Conflict management skills</SoftSkillsLi>
        <SoftSkillsLi>Decision making skills</SoftSkillsLi>
      </SoftSkillsUl>
    </div>
  );
};

export default SoftSkills;
