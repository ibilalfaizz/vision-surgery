import { useState, useRef, useEffect } from "react";
import login3 from "../../assets/images/login/1.jpg";
//icons
import { FiLock, FiMail, FiEyeOff, FiEye, FiArrowLeft } from "react-icons/fi";

//react hooks imports
import { useForm } from "react-hook-form";
import FormError from "../Utilities/Alerts/FormError";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ResetLinkModal from "./ResetLinkModal";

const ForgotPassword_ = () => {
  //states
  const [showPassword, setShowPassword] = useState(0);
  const [modalStatus, setModalStatus] = useState(0);
  let navigate = useNavigate();
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
    setModalStatus(true);
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
                <h4>Reset Password</h4>
                <h6>Enter your email to reset your password</h6>

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
                      })}
                    />
                  </div>
                  {errors.email && (
                    <FormError errorMessage={errors.email.message} />
                  )}
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block w-100"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    // disabled={isLoading}
                  >
                    reset
                  </button>
                </div>
                <Link to="/login" className="cursor-pointer">
                  <h6>
                    <FiArrowLeft /> Back to login{" "}
                  </h6>
                </Link>
                <p className="text-left" style={{ textAlign: "left" }}>
                  Not a member yet?
                  <Link to="/signup" className="ms-2 cursor-pointer">
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ResetLinkModal
        modalStatus={modalStatus}
        handleClose={() => setModalStatus(!modalStatus)}
      />
    </section>
  );
};
export default ForgotPassword_;
