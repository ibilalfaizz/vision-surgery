import React from "react";
import { FaHospital } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { months, years } from "../../data/dates";

const DataCardWDropdown = ({
  yearlyIcon,
  title,
  yearlyCount,
  YearlySubtitle,

  yearlyDropDownData,
}) => {
  const Icon = yearlyIcon;

  return (
    <div className="income-card card-primary card h-100">
      <div className="text-center card-body">
        <h6>{title}</h6>
        <div className="theme-form">
          <div className="mb-3">
            <select
              value={"verify"}
              placeholder="Yearly"
              className="form-control digits form-select"
            >
              <option selected={true}>Year</option>
              {years.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="round-box">
          <Icon />
        </div>

        <h5>${yearlyCount}</h5>
        <p>{YearlySubtitle}</p>

        <hr />

        <div className="theme-form">
          <div className="mb-3">
            <select
              value={"verify"}
              placeholder="Yearly"
              className="form-control digits form-select"
            >
              <option selected={true}>Month</option>
              {months.map((el, i) => (
                <option value={el.name} key={i}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="round-box">
          <Icon />
        </div>

        <h5>${yearlyCount}</h5>
        <p>{YearlySubtitle}</p>

        <div className="parrten">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default DataCardWDropdown;
