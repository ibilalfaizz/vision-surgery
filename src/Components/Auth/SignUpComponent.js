import { useState, useRef } from "react";
import login3 from "../../assets/images/login/3.jpg";
//icons
import { FiLock, FiMail, FiEyeOff, FiEye } from "react-icons/fi";

//react hooks imports
import { useForm } from "react-hook-form";
import FormError from "../Utilities/Alerts/FormError";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignUpComponent = () => {
  //states
  const [showPassword, setShowPassword] = useState(0);
  const [isLoading, setOsLoading] = useState(false);

  return (
    <div className="login-card">
      <form className="theme-form login-form">
        <h4>Create your account</h4>
        <h6>Enter your personal details to create account</h6>

        <div className="form-group">
          <label>Email Address</label>
          <div className="input-group">
            <span className="input-group-text">
              <FiMail />
            </span>
            <input
              className="form-control"
              type="email"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <FiLock />
            </span>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="*********"
            />
            <div className="show-hide">
              <span
                className="show"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <FiLock />
            </span>
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              placeholder="*********"
            />
            <div className="show-hide">
              <span className="show"> </span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary btn-block w-100"
            href="#"
            type="submit"
          >
            Create Account
            {isLoading ? <Spinner size="sm" animation="border" /> : ""}
          </button>
        </div>

        <p>
          Already have an account?
          <Link to="/login" className="ms-2">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignUpComponent;
