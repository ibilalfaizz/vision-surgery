import MenuBar from "./MenuBar";
import LeftSideBar from "./LeftSideBar";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div>
      <div
        className="page-wrapper compact-wrapper default-sidebar"
        id="pageWrapper"
      >
        {/* Page Header Start*/}
        <MenuBar />

        {/* Page Header Ends                              */}
        {/* Page Body Start*/}
        <div className="page-body-wrapper sidebar-icon">
          {/* Page Sidebar Start*/}
          <LeftSideBar />

          {/* Page Sidebar Ends*/}
          <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid dashboard-default-sec">
              {children}
            </div>
            {/* Container-fluid Ends*/}
          </div>
          {/* footer start*/}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Container;
