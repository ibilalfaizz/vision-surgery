import { useState, useRef, useEffect } from "react";
import login3 from "../../assets/images/login/3.jpg";
//icons
import { FiLock, FiMail, FiEyeOff, FiEye } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormError from "../Utilities/Alerts/FormError";
const LoginComponent = ({}) => {
  //states
  const [showPassword, setShowPassword] = useState(0);
  let navigate = useNavigate();
  //react hook forms setup
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isDirty, isValid },
  } = useForm();
  console.log(isValid, "isValid	");
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            className="d-none d-xl-block col-xl-5 b-center bg-size"
            style={{
              backgroundImage: `url(${login3})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              display: "block",
            }}
          >
            {/* <img
              className="bg-img-cover bg-center"
              src={login3}
              alt="login page illustration"
            /> */}
          </div>
          <div className="col-xl-7 p-0">
            <div className="login-card">
              <form className="theme-form login-form">
                <h4>Login</h4>
                <h6>Welcome back! Log in to your account.</h6>

                {/* <Alert variant="success">{"Logged in successfully"}</Alert> */}

                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i>
                        {" "}
                        <FiMail />{" "}
                      </i>
                    </span>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Please enter a valid Email Address",
                        pattern: {
                          value: /^\S+@\S+$/,
                          message: "Please enter a valid Email Address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <FormError errorMessage={errors.email.message} />
                  )}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i>
                        {" "}
                        <FiLock />{" "}
                      </i>
                    </span>
                    <input
                      className="form-control"
                      type={showPassword ? "text" : "password"}
                      name="login[password]"
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
                        {" "}
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                      </span>
                    </div>
                  </div>
                  {errors.password && (
                    <FormError errorMessage={errors.password.message} />
                  )}
                </div>
                <div className="form-group">
                  <Link to="/forgot-password" className="ms-2">
                    Forgot password?
                  </Link>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block w-100"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    // disabled={!isValid}
                  >
                    Sign in{" "}
                  </button>
                </div>
                <p className="mt-4 mb-0" style={{ textAlign: "left" }}>
                  Don't have account?
                  <Link to="/signup" className="ms-2">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginComponent;
