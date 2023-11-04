import EditGeneralInfo from './EditGeneralInfo';
import EditEducationInfo from './EditEducationInfo';
import EditExperienceInfo from './EditExperienceInfo';
import '../assets/common.css';

function EditCV({
  updateGeneralInfo,
  updateEducationInfo,
  updateExperienceInfo,
}) {
  return (
    <div className="edit-view">
      <EditGeneralInfo updateGeneralInfo={updateGeneralInfo}></EditGeneralInfo>
      <EditEducationInfo
        updateEducationInfo={updateEducationInfo}
      ></EditEducationInfo>
      <EditExperienceInfo
        updateExperienceInfo={updateExperienceInfo}
      ></EditExperienceInfo>
    </div>
  );
}

export default EditCV;
