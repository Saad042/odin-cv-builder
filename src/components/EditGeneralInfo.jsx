import InputField from '../inputs/InputField';
import '../assets/common.css';
import { useState } from 'react';

function EditGeneralInfo({ updateGeneralInfo }) {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  });

  function handleGeneralInfoChange(e, key) {
    setGeneralInfo({
      ...generalInfo,
      [key]: e.target.value,
    });
  }
  return (
    <div className="card">
      <h2>General Info</h2>
      <InputField
        label="First Name"
        objKey="firstName"
        info={generalInfo}
        handleChange={handleGeneralInfoChange}
      ></InputField>
      <InputField
        label="Last Name"
        objKey="lastName"
        info={generalInfo}
        handleChange={handleGeneralInfoChange}
      ></InputField>
      <InputField
        label="Email"
        inputType="email"
        objKey="email"
        info={generalInfo}
        handleChange={handleGeneralInfoChange}
      ></InputField>
      <InputField
        label="Phone No"
        inputType="tel"
        objKey="phoneNo"
        info={generalInfo}
        handleChange={handleGeneralInfoChange}
      ></InputField>
      <button onClick={() => updateGeneralInfo(generalInfo)}>Save</button>
    </div>
  );
}

export default EditGeneralInfo;
