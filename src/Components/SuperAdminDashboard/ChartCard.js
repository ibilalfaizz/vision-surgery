import React, { useEffect, useState } from "react";
import { chartConfig, series } from "../../utils/config";
import Chart from "react-apexcharts";

const ChartCard = ({ title, data }) => {
  const [filterOption, setFilterOption] = useState("today");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="header-top d-sm-flex align-items-center">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <h5>Surgeries Graph</h5>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="theme-form">
                <div className="mb-3">
                  <select
                    value={"verify"}
                    placeholder="Yearly"
                    className="form-control digits form-select"
                  >
                    <option value="lastWeek" selected>
                      Yearly
                    </option>
                    <option value="lastMonth">Weekly</option>
                    <option value="lastMonth">Monthly</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="theme-form">
                <div className="mb-3">
                  <select
                    value={"verify"}
                    placeholder="Yearly"
                    className="form-control digits form-select"
                  >
                    <option value="2022" selected>
                      2022
                    </option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="theme-form">
                <div className="mb-3">
                  <select
                    value={"verify"}
                    placeholder="Yearly"
                    className="form-control digits form-select"
                  >
                    <option value="today" selected>
                      All Hospitals
                    </option>
                    <option value="hospital-1">Hospital 1</option>
                    <option value="hospital-2">Hospital 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body text-center p-t-0">
        <div className="row">
          <div id="chart-timeline-dashbord">
            <Chart
              options={chartConfig.options}
              series={series}
              height="395"
              width="100%"
              type="area"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
