import ReactDOM from "react-dom";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ errorHandler }) => {
  return <div className={classes.backdrop} onClick={errorHandler}></div>;
};

const ModalOverlay = ({ title, text, errorHandler }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{text}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={errorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal({ title, text, errorHandler }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={errorHandler}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          text={text}
          errorHandler={errorHandler}
        ></ModalOverlay>,
        document.getElementById("modal-root")
      )}
      ;
    </>
  );
}
export default ErrorModal;
