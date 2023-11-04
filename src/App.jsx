import EditCV from './components/EditCV';
import ViewCV from './components/ViewCV';
import './assets/common.css';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  });

  const [educationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: '',
    job: '',
    startDate: '',
    endDate: '',
    desc: '',
  });

  function updateGeneralInfo(newGeneralInfo) {
    setGeneralInfo(newGeneralInfo);
  }

  function updateEducationInfo(newEducationInfo) {
    setEducationInfo(newEducationInfo);
  }

  function updateExperienceInfo(newExperienceInfo) {
    setExperienceInfo(newExperienceInfo);
  }

  return (
    <div className="app">
      <EditCV
        updateGeneralInfo={updateGeneralInfo}
        updateEducationInfo={updateEducationInfo}
        updateExperienceInfo={updateExperienceInfo}
      ></EditCV>
      <ViewCV
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      ></ViewCV>
    </div>
  );
}

export default App;
