import { useState } from 'react';
import InputField from '../inputs/InputField';

function EditExperienceInfo({ updateExperienceInfo }) {
  const [experienceInfo, setExperienceInfo] = useState({
    company: '',
    job: '',
    startDate: '',
    endDate: '',
    desc: '',
  });

  function handleExperienceInfoChange(e, key) {
    setExperienceInfo({
      ...experienceInfo,
      [key]: e.target.value,
    });
  }

  return (
    <div className="card">
      <h2>Experience</h2>
      <InputField
        label="Company Name"
        objKey="company"
        info={experienceInfo}
        handleChange={handleExperienceInfoChange}
      ></InputField>
      <InputField
        label="Job Title"
        objKey="job"
        info={experienceInfo}
        handleChange={handleExperienceInfoChange}
      ></InputField>
      <InputField
        label="Start Date"
        objKey="startDate"
        info={experienceInfo}
        handleChange={handleExperienceInfoChange}
      ></InputField>
      <InputField
        label="End Date"
        objKey="endDate"
        info={experienceInfo}
        handleChange={handleExperienceInfoChange}
      ></InputField>
      <InputField
        label="Description"
        objKey="desc"
        info={experienceInfo}
        handleChange={handleExperienceInfoChange}
      ></InputField>
      <button onClick={() => updateExperienceInfo(experienceInfo)}>Save</button>
    </div>
  );
}

export default EditExperienceInfo;
