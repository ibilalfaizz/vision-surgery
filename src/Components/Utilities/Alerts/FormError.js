import "./formError.css";
const FormError = (props) => {
  return (
    <small className="text-danger font-10 mt-2">
      {props.errorMessage && props.errorMessage}
    </small>
  );
};
export default FormError;
