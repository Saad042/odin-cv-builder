import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';

function ViewCV({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="preview-view">
      <GeneralInfo {...generalInfo}></GeneralInfo>
      <EducationInfo {...educationInfo}></EducationInfo>
      <ExperienceInfo {...experienceInfo}></ExperienceInfo>
    </div>
  );
}

export default ViewCV;
