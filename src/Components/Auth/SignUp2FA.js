import { useState, useRef } from "react";
import login3 from "../../assets/images/login/3.jpg";
//icons
import {
  FiLock,
  FiMail,
  FiEyeOff,
  FiEye,
  FiUser,
  FiPhone,
} from "react-icons/fi";

//react hooks imports
import { useForm } from "react-hook-form";
import FormError from "../Utilities/Alerts/FormError";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignUp2FA = ({ chooseTypeHandler }) => {
  //states
  const [showPassword, setShowPassword] = useState(0);
  const [isLoading, setOsLoading] = useState(false);

  //react hook forms setup
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    chooseTypeHandler("hospitalForm");
  };
  return (
    <form>
      <h4>Two Factor Verification</h4>
      <h6>
        We've sent you 4 digit confirmation code on your email. PLease confirm
        your email
      </h6>

      <div className="mb-3">
        <label className="form-label">James@gmail.com</label>
        <div className="row">
          <div className="col">
            <input
              maxLength={2}
              type="text"
              className="form-control text-center opt-text form-control"
            />
          </div>
          <div className="col">
            <input
              maxLength={2}
              type="text"
              className="form-control text-center opt-text form-control"
            />
          </div>
          <div className="col">
            <input
              maxLength={2}
              type="text"
              className="form-control text-center opt-text form-control"
            />
          </div>
          <div className="col">
            <input
              maxLength={2}
              type="text"
              className="form-control text-center opt-text form-control"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <button
          className="btn btn-primary btn-block w-100"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          Confirm
          {isLoading ? <Spinner size="sm" animation="border" /> : ""}
        </button>
      </div>
    </form>
  );
};
export default SignUp2FA;
