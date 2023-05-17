import React, { Fragment, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FiArrowLeft, FiPlus, FiSearch } from "react-icons/fi";

import { Spinner, Tab, Tabs } from "react-bootstrap";
import Container from "../../../Components/Layouts/Container";
import { hospitals } from "../../../data/hospitalsData";
import HospitalAction from "../../../Components/SuperAdminDashboard/HospitalAction";
import { Link } from "react-router-dom";
import GoBack from "../../../Components/Utilities/GoBack";
import CompletedSurgeries from "../../../Components/SuperAdminDashboard/Hospitals/CompletedSurgeries";
const HospitalDetails = () => {
  const columns = [
    {
      name: "Hospital Name",
      selector: (row) => row.hospitalName,

      sortable: true,
    },
    {
      name: "Hospital Admin",
      selector: (row) => row.hospitalAdmin,
      sortable: true,
    },
    {
      name: "Admin Email",
      selector: (row) => row.adminEmail,
      sortable: true,
    },
    {
      name: "Admin Contact",
      selector: (row) => row.adminContact,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
      cell: (row) => (
        <HospitalAction
          hospitalName={row.hospitalName}
          hospitalAddress={"lorem ipsum address"}
          hospitalContact={"+1 123455667"}
          hospitalAdmin={row.hospitalAdmin}
          adminEmail={row.adminEmail}
          adminContact={row.adminContact}
        />
      ),
    },
  ];

  //searchable table
  const [tableRowsData, setTableRowsData] = useState(hospitals);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onChange = async (e) => {
    setQuery(e.target.value);

    var searchData = hospitals.filter((item) => {
      if (
        item.hospitalName
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setTableRowsData(searchData);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {}, [tableRowsData]);
  //   useEffect(() => {
  //     setTableRowsData(hospitals);
  //   }, [quizzes]);

  return (
    <Container>
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-6">
              <h3>
                <GoBack />
                General Hospital (California)
              </h3>
            </div>
            <div className="col-sm-6">
              <div className="text-end">
                <Link
                  to="/admin/hospital/edit/123"
                  className="btn btn-outline-danger me-2 btn-sm"
                >
                  Delete
                </Link>

                <Link
                  to="/admin/hospital/edit/123"
                  className="btn  btn-outline-primary btn-sm"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="project-list col-md-12">
          <div className="card mb-0">
            <div className="card-header">
              <div className="row">
                <div className="col-sm-6 ">
                  <div className="detailed-text-wrapper">
                    <h5>Hospital Information</h5>
                    <hr />
                    <p>General Hospital (California)</p>
                    <p>+1 123456</p>
                    <p>#123, Lorem ipsum, San Jose</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h5>Hospital Admin</h5>
                  <hr />
                  <div className="detailed-text-wrapper">
                    <p>james Williams</p>
                    <p>+1 123456</p>
                    <p>james@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-md-12 box-col-8 des-xl-80 mt-sm-5">
          <div className="card">
            <div className="card-header ">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 border-tab nav nav-tabs"
              >
                <Tab eventKey="completedSurgeries" title="Completed Surgeries (124)">
                  <CompletedSurgeries />
                </Tab>
                <Tab eventKey="profile" title="Surgeon (4)">
                  bb
                </Tab>
                <Tab eventKey="contact" title="Operation Theaters (4)">
                  cc
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HospitalDetails;
