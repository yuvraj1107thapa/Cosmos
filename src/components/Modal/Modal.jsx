import React from "react";
import "./Modal.css";
import CreatePost from "../CreatePost/CreatePost";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { useContext } from "react";
const Modal = ({ open }) => {
  const {editPost} = useContext(AsideDataContext)
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="cancelBtn">
          <h3>{editPost ? "Edit Post" : "New Post"}</h3>
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
