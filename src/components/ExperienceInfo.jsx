import '../assets/common.css';

function ExperienceInfo({ company, job, startDate, endDate, desc }) {
  return (
    <div>
      <h2 className="section-header">Experience</h2>
      <p>
        <b>{company}</b>
      </p>
      <p>{job}</p>
      <p>{`${startDate}-${endDate}`}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ExperienceInfo;
