import {
  ExpList,
  RespUl,
  JobTitle,
  ExpListItem,
  Period,
  RestListItem,
  TechSTitle,
  TechsList,
} from './WorkExpirience.styled';

const WorkExpirience = () => {
  return (
    <div>
      <ExpList>
        <ExpListItem>
          <JobTitle>Web-storona (Front-end developer)</JobTitle>
          <Period>( September 2023 - present )</Period>
          <TechsList>
            Technologies:
            <TechSTitle> HTML, CSS, Java Script, Bitbucket.</TechSTitle>
          </TechsList>
          <RespUl>
            <RestListItem>
              Support for existing educational projects.
            </RestListItem>
            <RestListItem>
              Creation of new educational games for children.
            </RestListItem>
            <RestListItem>
              Work in accordance with the Scrum methodology.
            </RestListItem>
            <RestListItem>Bug fixing</RestListItem>
          </RespUl>
        </ExpListItem>
        <ExpListItem>
          <JobTitle>Online store owner</JobTitle>
          <Period>( March 2016 - September 2023 )</Period>
          <RespUl>
            <RestListItem>
              Create store and increased it income from 0 to 2000$
            </RestListItem>
            <RestListItem>Over 10,000 satisfied customers</RestListItem>
            <RestListItem>
              98% positive feedback and recommendations from customers
            </RestListItem>
          </RespUl>
        </ExpListItem>
        <ExpListItem>
          <JobTitle>VVN Ltd</JobTitle>
          <Period>( February 2012 - September 2016 )</Period>
          <RespUl>
            <RestListItem>Expanding the customer base</RestListItem>
            <RestListItem>Increased customer loyalty</RestListItem>
            <RestListItem>Сontracting</RestListItem>
            <RestListItem>Tracking accounts receivable</RestListItem>
            <RestListItem>Sales</RestListItem>
          </RespUl>
        </ExpListItem>
      </ExpList>
    </div>
  );
};

export default WorkExpirience;
