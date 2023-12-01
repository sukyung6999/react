import MyButton from "./MyButton";

function MyHeader({leftButton, headText, rightButton}) {
  return <header>
    <MyButton text={leftButton.text} type={leftButton.type} />
    <h2 className="head_text">{headText}</h2>
    <MyButton text={rightButton.text} type={rightButton.type} />
  </header>
}
export default MyHeader;