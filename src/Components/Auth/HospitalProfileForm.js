import { useState, useRef, useEffect } from "react";

//react hooks imports
import { useForm } from "react-hook-form";
import FormError from "../Utilities/Alerts/FormError";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { states } from "../../data/states";
import { cities } from "../../data/cities";
import logo from "../../assets/images/logo/logo.png";
import { FiEdit } from "react-icons/fi";
const HospitalProfileForm = () => {
  const navigate = useNavigate();

  //states
  const [showPassword, setShowPassword] = useState(0);
  const [isLoading, setOsLoading] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  //react hook forms setup
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const state = watch("state");

  const onSubmit = (data) => {
    navigate("/dashboard");
    console.log(data);
  };
  useEffect(() => {
    console.log(cities[state]);

    setSelectedCities(cities[state]);
  }, [state]);
  return (
    <div>
      <h4>Create Hospital Profile</h4>
      <h6>Please fill the details tro continue</h6>
      <div className="row">
        <div className="col-4">
          <div className="edit-photo">
            <div className="img-wrraper">
              <div className="avatar">
                <img alt="" src={logo} className="step1 media" />
              </div>
              <div className="icon-wrapper">
                <FiEdit />
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-8"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div>
            <p className="mb-2">Upload Logo of Hospital</p>
            <button
              className="btn btn-sm btn-outline-primary ms-0"
              onClick={() => console.log("click")}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>
          Hospital Name
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
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Please enter a name",
            })}
          />
        </div>
        {errors.name && <FormError errorMessage={errors.name.message} />}
      </div>

      <div className="form-group">
        <label>State</label>
        <div className="input-group">
          <select
            className="form-control form-control-sm  form-select"
            name="state"
            {...register("state", {
              required: "Please select your state",
            })}
          >
            {states.map((el, i) => (
              <option key={i} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        {errors.state && <FormError errorMessage={errors.state.message} />}
      </div>

      <div className="form-group">
        <label>City</label>
        <div className="input-group">
          <select
            className="form-control form-control-sm  form-select"
            name="role"
            {...register("City", {
              required: "Please select your state",
            })}
          >
            {selectedCities &&
              selectedCities.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
          </select>
        </div>
        {errors.City && <FormError errorMessage={errors.City.message} />}
      </div>

      <div className="form-group">
        <label>
          Address
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
          <input
            className="form-control"
            type="text"
            placeholder="#123, Lorem ipsum"
            {...register("address", {
              required: "Please enter your Address",
            })}
          />
        </div>
        {errors.address && <FormError errorMessage={errors.address.message} />}
      </div>

      <div className="form-group">
        <label>
          Phone Number
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
          <input
            className="form-control"
            type="text"
            placeholder="#123, Lorem ipsum"
            {...register("phone", {
              required: "Please enter your phone number",
            })}
          />
        </div>
        {errors.phone && <FormError errorMessage={errors.phone.message} />}
      </div>

      <div className="form-group">
        <label>
          Zip/Postal Code
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
          <input
            className="form-control"
            type="text"
            placeholder="123"
            {...register("zip", {
              required: "Please enter your Zip Code",
            })}
          />
        </div>
        {errors.zip && <FormError errorMessage={errors.zip.message} />}
      </div>

      <div className="form-group">
        <button
          className="btn btn-primary btn-block w-100"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Create Profile
          {isLoading ? <Spinner size="sm" animation="border" /> : ""}
        </button>
      </div>
    </div>
  );
};
export default HospitalProfileForm;
