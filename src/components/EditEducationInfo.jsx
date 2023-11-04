import { useState } from 'react';
import InputField from '../inputs/InputField';

function EditEducationInfo({ updateEducationInfo }) {
  const [educationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  function handleEducationlInfoChange(e, key) {
    setEducationInfo({
      ...educationInfo,
      [key]: e.target.value,
    });
  }
  return (
    <div className="card">
      <h2>Education</h2>
      <InputField
        label="School"
        objKey="school"
        info={educationInfo}
        handleChange={handleEducationlInfoChange}
      ></InputField>
      <InputField
        label="Degree"
        objKey="degree"
        info={educationInfo}
        handleChange={handleEducationlInfoChange}
      ></InputField>
      <InputField
        label="Start Date"
        objKey="startDate"
        info={educationInfo}
        handleChange={handleEducationlInfoChange}
      ></InputField>
      <InputField
        label="End Date"
        objKey="endDate"
        info={educationInfo}
        handleChange={handleEducationlInfoChange}
      ></InputField>
      <button onClick={() => updateEducationInfo(educationInfo)}>Save</button>
    </div>
  );
}

export default EditEducationInfo;
