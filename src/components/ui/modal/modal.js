import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const Modal = (props) => {
  const overlaysElement = document.getElementById("overlays");
  const ModalOvelay = (props) => {
    return (
      <div className={style.Overlay}>
        <div className={style.content}>{props.children}</div>
      </div>
    );
  };
  const Backdrops = (props) => {
    return <div className={style.backDrop} onClick={props.onClose}></div>;
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrops onClose={props.onClose} />,
        overlaysElement
      )}
      {ReactDOM.createPortal(
        <ModalOvelay>{props.children}</ModalOvelay>,
        overlaysElement
      )}
    </>
  );
};

export default Modal;
