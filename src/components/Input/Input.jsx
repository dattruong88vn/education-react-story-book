import PropTypes from "prop-types";
import "./Input.css";

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

function Input(props) {
  const {
    size = "medium",
    label = "",
    name = "medium",
    type = "text",
    placeholder = "placeholder",
    ...rest
  } = props;
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        type={type}
        className={`input ${size}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;
