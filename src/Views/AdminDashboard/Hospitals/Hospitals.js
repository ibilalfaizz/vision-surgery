import React, { Fragment, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Spinner } from "react-bootstrap";
import Container from "../../../Components/Layouts/Container";
import { hospitals } from "../../../data/hospitalsData";
import HospitalAction from "../../../Components/SuperAdminDashboard/HospitalAction";
const Hospitals = () => {
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
      <div className="row">
        <div className="col-xl-12 col-md-12 box-col-8 des-xl-80 mt-sm-5">
          <div className="card">
            <div className="card-header ">
              <div className="row">
                <div className="col-md-8 d-flex  align-items-center">
                  <h5 className="me-2">Hospitals</h5>
                </div>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  <div className="form-group mb-0 mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FiSearch />
                      </span>
                      <input
                        placeholder="Search.."
                        type="search"
                        className="form-control-plaintext form-control"
                        value={query}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body  p-t-0">
              <DataTable
                pagination="true"
                columns={columns}
                data={tableRowsData}
                striped={true}
                center={true}
                progressPending={isLoading}
                progressComponent={<Spinner size="sm" animation="border" />}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hospitals;
