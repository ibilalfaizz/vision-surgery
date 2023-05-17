import { FaDollarSign, FaHandHoldingMedical, FaHospital } from "react-icons/fa";
import { GiMedicalDrip } from "react-icons/gi";
import { RiSurgicalMaskLine } from "react-icons/ri";
import Container from "../../Components/Layouts/Container";
import ChartCard from "../../Components/SuperAdminDashboard/ChartCard";
import DataCard from "../../Components/SuperAdminDashboard/DataCard";
import DataCardWDropdown from "../../Components/SuperAdminDashboard/DataCardWDropdown";

const Index = () => {
  return (
    <Container>
      <div className="row">
        <div className="box-col-12 des-xl-100 ">
          <div className="row">
            <div className="box-col-3 des-xl-25 rate-sec col-sm-6 col-md-3 ">
              <DataCard
                icon={FaHospital}
                title="Total Number Of Hospitals"
                count="224"
                percent="90"
              />
            </div>
            <div className="box-col-3 des-xl-25 rate-sec col-sm-6 col-md-3 ">
              <DataCard
                icon={RiSurgicalMaskLine}
                title="Total Number Of operation Theaters"
                count="520"
                percent="10"
              />
            </div>
            <div className="box-col-3 des-xl-25 rate-sec col-sm-6 col-md-3 ">
              <DataCard
                icon={FaHandHoldingMedical}
                title="Total Number Of Surgeons"
                count="735"
                percent="6"
              />
            </div>
            <div className="box-col-3 des-xl-25 rate-sec col-sm-6 col-md-3 ">
              <DataCard
                icon={GiMedicalDrip}
                title="Total Number Of Surgeries"
                count="2007"
                percent="36"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 d-flex flex-column">
              <ChartCard />
            </div>

            <div className="col-md-3 d-flex flex-column">
              <div>
                <DataCardWDropdown
                  title="Revenue Stats"
                  YearlySubtitle="Total Revenue Generated"
                  yearlyIcon={FaDollarSign}
                  yearlyCount="224k"
                  monthlyCount="90"
                  yearlyDropDownData={["2020", "2021", "2022", "2023"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Index;
