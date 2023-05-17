import { useState, useRef } from "react";
import login3 from "../../assets/images/login/3.jpg";
//icons
import { FiLock, FiMail, FiEyeOff, FiEye } from "react-icons/fi";

//react hooks imports
import { useForm } from "react-hook-form";
import FormError from "../Utilities/Alerts/FormError";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiHospitalLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
const SignUpOptions = ({ chooseTypeHandler }) => {
  //states
  const [showPassword, setShowPassword] = useState(0);
  const [isLoading, setOsLoading] = useState(false);

  return (
    <div>
      <h5 className="text-center" style={{ fontWeight: "bold" }}>
        Choose your category!
      </h5>
      <p>Please choose one of these to continue</p>

      <div className="row mt-4">
        <div className="col-6">
          <div
            className="card cursor-pointer card-hover"
            onClick={() => chooseTypeHandler("hospitalAdmin")}
          >
            <div className="card-body">
              <div className="white-outline">
                <RiHospitalLine />
              </div>
              <p className="mt-3">Continue as Hospital Admin</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card cursor-pointer card-hover"
            onClick={() => chooseTypeHandler("surgeon")}
          >
            <div className="card-body">
              <div className="white-outline">
                <FaStethoscope />
              </div>
              <p className="mt-3">Continue as Surgeon</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Already have an account?
        <Link to="/login" className="ms-2">
          Sign in
        </Link>
      </p>
    </div>
  );
};
export default SignUpOptions;
