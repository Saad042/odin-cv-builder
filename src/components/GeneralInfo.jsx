import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/common.css'

function GeneralInfo({ firstName, lastName, email, phoneNo }) {
  return (
    <div>
      <h1>{`${firstName}  ${lastName}`}</h1>
      <div className="contact-info-container">
        {email && (
          <div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            &nbsp;
            <span>{` ${email}`}</span>
          </div>
        )}
        {phoneNo && (
          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            &nbsp;

            <span>{` ${phoneNo}`}</span>
          </div>
        )}
      </div>
      {}
    </div>
  );
}

export default GeneralInfo;
