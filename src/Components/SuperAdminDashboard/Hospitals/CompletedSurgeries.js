import React, { Fragment, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FiArrowLeft, FiPlus, FiSearch } from "react-icons/fi";

import { Spinner, Tab, Tabs } from "react-bootstrap";

import HospitalAction from "../HospitalAction";
import { hospitals, surgeries } from "../../../data/hospitalsData";
import { years } from "../../../data/dates";
const CompletedSurgeries = () => {
  const columns = [
    {
      name: "Sr.No",
      selector: (row) => row.srNo,
      sortable: true,
    },
    {
      name: "Surgery Name",
      selector: (row) => row.surgeryName,
      sortable: true,
    },
    {
      name: "Operation Theater",
      selector: (row) => row.operationTheater,
      sortable: true,
    },
    {
      name: "Surgeons Assigned",
      selector: (row) => row.surgeonsAssigned,
      sortable: true,
    },
    {
      name: "Date of Surgery",
      selector: (row) => row.dateOfSurgery,
      sortable: true,
    },
    {
      name: "Time of Surgery",
      selector: (row) => row.timeOfSurgery,
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
  const [tableRowsData, setTableRowsData] = useState(surgeries);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onChange = async (e) => {
    setQuery(e.target.value);

    var searchData = surgeries.filter((item) => {
      if (
        item.surgeryName
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

  return (
    <div className="card-body  p-t-0">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group mb-0 mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <FiSearch />
              </span>
              <input
                placeholder="Search by surgery name"
                type="search"
                className="form-control-plaintext form-control"
                value={query}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group mb-0 mb-3">
            <input
              type="date"
              placeholder="Date range"
              className="form-control form-control"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group mb-0 mb-3">
            <select
              placeholder="Filter by Operation Theater"
              className="form-control digits form-select"
            >
              <option selected={true}>Operation Theater</option>
              {surgeries.map((el, i) => (
                <option value={el.surgeryName} key={i}>
                  {el.operationTheater}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
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
  );
};

export default CompletedSurgeries;
