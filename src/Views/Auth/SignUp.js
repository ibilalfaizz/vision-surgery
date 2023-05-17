import SignUpComponent from "../../Components/Auth/SignUpComponent";

import login3 from "../../assets/images/login/3.jpg";
import { FiLock, FiMail, FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpOptions from "../../Components/Auth/SignUpOptions";
import SignUpHospitalAdmin from "../../Components/Auth/SignUpHospitalAdmin";
import SignUp2FA from "../../Components/Auth/SignUp2FA";
import HospitalProfileForm from "../../Components/Auth/HospitalProfileForm";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(0);
  const [isLoading, setOsLoading] = useState(false);
  const [option, setOption] = useState("");
  console.log(option);
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div
            className="d-none d-xl-block col-xl-5 b-center bg-size"
            style={{
              backgroundImage: `url(${login3})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              display: "block",
            }}
          ></div>
          <div className="col-xl-7 p-0">
            <div className="login-card">
              <div className="theme-form login-form">
                {option == "hospitalAdmin" ? (
                  <SignUpHospitalAdmin
                    chooseTypeHandler={(e) => setOption(e)}
                  />
                ) : option == "2FA" ? (
                  <SignUp2FA chooseTypeHandler={(e) => setOption(e)} />
                ) : option == "hospitalForm" ? (
                  <HospitalProfileForm />
                ) : (
                  <SignUpOptions chooseTypeHandler={(e) => setOption(e)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
