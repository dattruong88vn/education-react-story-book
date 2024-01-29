import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
