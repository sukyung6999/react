import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

function ErrorModal({ title, text, errorHandler }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={errorHandler}></div>
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
    </div>
  );
}
export default ErrorModal;
