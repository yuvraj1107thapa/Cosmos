import React from "react";
import "./Modal.css";
import CreatePost from "../CreatePost/CreatePost";
const Modal = ({ open }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="cacelBtn">
          <h3>New Post</h3>
          <button id="btnCancel" onClick={() => open(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <CreatePost />


      </div>
    </div>
  );
};

export default Modal;