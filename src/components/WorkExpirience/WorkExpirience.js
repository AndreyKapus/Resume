import {ExpList, RespUl, JobTitle, ExpListItem, Period, RestListItem} from './WorkExpirience.styled'

const WorkExpirience = () => {
  return (
    <div>

      <ExpList>
        <ExpListItem>
          <JobTitle>Online store owner</JobTitle>
          <Period>( March 2016 - present )</Period>
          <RespUl>
            <RestListItem>Create store and increased it income from 0 to 2000$</RestListItem>
            <RestListItem>Over 10,000 satisfied customers</RestListItem>
            <RestListItem>98% positive feedback and recommendations from customers</RestListItem>
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
          </RespUl>
        </ExpListItem>
      </ExpList>
    </div>
  );
};

export default WorkExpirience;
