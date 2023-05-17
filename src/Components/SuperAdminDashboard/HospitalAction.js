import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

function HospitalAction({
  hospitalName,
  hospitalAddress,
  hospitalContact,
  hospitalAdmin,
  adminEmail,
  adminContact,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="fade offcanvas-backdrop d-none" />

      <button
        onClick={handleShow}
        className="me-2 btn btn-outline-primary btn-sm"
      >
        <FaEllipsisV />
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        name={"end"}
        backdrop={true}
      >
        <Offcanvas.Header></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="user-profile hospital-action">
            <div className="post-about card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <div>
                    <p>Hospital Name</p>
                    <h5>{hospitalName}</h5>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <p>Hospital Address</p>
                    <h5> {hospitalAddress}</h5>
                  </div>
                </li>

                <li className="list-group-item">
                  <div>
                    <p>Hospital Contact</p>
                    <h5> {hospitalContact}</h5>
                  </div>
                </li>

                <li className="list-group-item">
                  <div>
                    <p>Hospital Admin</p>
                    <h5> {hospitalAdmin}</h5>
                  </div>
                </li>

                <li className="list-group-item">
                  <div>
                    <p>Admin Email</p>
                    <h5> {adminEmail}</h5>
                  </div>
                </li>

                <li className="list-group-item">
                  <div>
                    <p>Admin Contact</p>
                    <h5> {adminContact}</h5>
                  </div>
                </li>

                <li className="list-group-item">
                  <div>
                    <p>Action</p>
                    <Link
                      to="/admin/hospital/123"
                      className="btn btn-sm btn-secondary"
                    >
                      View
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
}

export default HospitalAction;
