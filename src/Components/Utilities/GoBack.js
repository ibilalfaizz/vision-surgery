import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button className="btn btn-inline p-0 pe-2" onClick={() => navigate(-1)}>
      <FiArrowLeft style={{ fontSize: "18px" }} />
    </button>
  );
};

export default GoBack;
