import { convertStrToHTMLAttribute } from '../lib/utils';
import '../assets/InputField.css';

function InputField({
  label = '',
  inputType = 'text',
  objKey = 'placholder',
  info = { placholder: 'wah' },
  handleChange,
}) {
  const attr = convertStrToHTMLAttribute(label);
  return (
    <div className="input-group">
      <label htmlFor={attr}>{label}</label>
      <input
        value={info[objKey]}
        type={inputType}
        id={attr}
        onChange={(e) => handleChange(e, objKey)}
      />
    </div>
  );
}

export default InputField;
