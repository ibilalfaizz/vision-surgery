import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiLink } from "react-icons/fi";

const ResetLinkModal = ({ modalStatus, handleClose }) => {
  return (
    <>
      <Modal show={modalStatus} onHide={handleClose}>
        <Modal.Body>
          <div className="white-outline mt-4">
            {" "}
            <FiLink />
          </div>
          <h6 className="text-center mt-3">
            Reset link has been sent to your email
          </h6>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="text-center">
            Didn't receive an email? <a href="#">Resnd Link</a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResetLinkModal;
