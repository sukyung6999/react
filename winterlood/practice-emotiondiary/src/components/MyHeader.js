import MyButton from "./MyButton";

function MyHeader({leftChild, headText, rightChild}) {
  return <header>
    <div className="head_btn_left">{leftChild}</div>
    <h2 className="head_text">{headText}</h2>
    <div className="head_btn_right">{rightChild}</div>
  </header>
}
export default MyHeader;