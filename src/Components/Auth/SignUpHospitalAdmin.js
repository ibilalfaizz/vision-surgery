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
const SignUpHospitalAdmin = ({ chooseTypeHandler }) => {
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
    chooseTypeHandler("2FA");
    console.log(data);
  };
  return (
    <form>
      <h4>Create your account</h4>
      <h6>Enter your personal details to create account</h6>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>First Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <FiUser />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="John"
                {...register("firstName", {
                  required: "Please enter your first name",
                })}
              />
            </div>
            {errors.firstName && (
              <FormError errorMessage={errors.firstName.message} />
            )}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Last Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <FiUser />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="John"
                {...register("lastName", {
                  required: "Please enter your last name",
                })}
              />
            </div>
            {errors.lastName && (
              <FormError errorMessage={errors.lastName.message} />
            )}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>
          Email Address
          <small
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#827e7e",
              marginLeft: "5px",
            }}
          ></small>{" "}
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <FiMail />
          </span>
          <input
            className="form-control"
            type="email"
            placeholder="john@example.com"
            {...register("email", {
              required: "Please enter a valid Email Address",
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@(?!.*@gmail\.com)[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid Email Address",
              },
            })}
          />
        </div>
        {errors.email && <FormError errorMessage={errors.email.message} />}
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>

        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text">
              <FiPhone />
            </span>

            <input
              className="form-control"
              name="phone"
              defaultValue="+1"
              type="tel"
              {...register("phone", {
                required: "Please enter your phone number",
              })}
            />
          </div>
        </div>
        {errors.phone && <FormError errorMessage={errors.phone.message} />}
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-group">
          <span className="input-group-text">
            <FiLock />
          </span>
          <input
            className="form-control"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="*********"
            defaultValue={""}
            {...register("password", {
              required: " You must specify a password.",
            })}
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
        {errors.password && (
          <FormError errorMessage={errors.password.message} />
        )}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <div className="input-group">
          <span className="input-group-text">
            <FiLock />
          </span>
          <input
            className="form-control"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            defaultValue={""}
            placeholder="*********"
            {...register("confirmPassword", {
              required: " You must specify a password.",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          <div className="show-hide">
            <span className="show"> </span>
          </div>
        </div>
        {errors.confirmPassword && (
          <FormError errorMessage={errors.confirmPassword.message} />
        )}
      </div>

      <div className="form-group">
        <button
          className="btn btn-primary btn-block w-100"
          onClick={handleSubmit(onSubmit)}
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
  );
};
export default SignUpHospitalAdmin;
