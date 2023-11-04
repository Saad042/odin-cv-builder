import '../assets/common.css';

function EducationInfo({ school, degree, startDate, endDate }) {
  return (
    <div>
      <h2 className="section-header">Education</h2>
      <p>
        <b>{school}</b>
      </p>
      <p>{degree}</p>
      <p>{`${startDate}-${endDate}`}</p>
    </div>
  );
}

export default EducationInfo;
