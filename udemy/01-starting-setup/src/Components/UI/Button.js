import classes from './Button.module.css';

function Button({
  type,
  text,
  onClick
}) {
  return <button type={type} className={classes.button} onClick={onClick}>{text}</button>
}
export default Button;