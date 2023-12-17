import Button from '../UI/Button';
import classes from './ErrorModal.module.css';

function ErrorModal({
  onChangeValid
}) {
  const clickHanlder = () => {
    onChangeValid(true);
  }
  return <div>
    <div className={classes.backdrop} onClick={clickHanlder}></div>
    <div className={classes.modal}>
      <header className={classes.header}>Invalid input</header>
      <p className={classes.content}>Please enter a valid name and age(non-empty values)</p>
      <Button type={'button'} text={'Okay'} onClick={clickHanlder}/>
    </div>
  </div>
}
export default ErrorModal;