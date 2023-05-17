import React from "react";
import { FaHospital } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const DataCard = ({ icon, title, count, percent }) => {
  const Icon = icon;
  return (
    <div className="income-card card-primary card flex-grow-1">
      <div className="text-center card-body">
        <div className="round-box">
          <Icon />
        </div>

        <p>{title}</p>
        <h5>{count}</h5>
        <a className="btn-arrow arrow-primary" href="#javascript">
          <FiArrowUp className="me-2" />
          {percent}%{" "}
        </a>
        <div className="parrten">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default DataCard;
