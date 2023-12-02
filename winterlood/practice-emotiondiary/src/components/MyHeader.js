import MyButton from "./MyButton";

function MyHeader({leftChild, headText, rightChild}) {
  return <header>
    {leftChild}
    <h2 className="head_text">{headText}</h2>
    {rightChild}
  </header>
}
export default MyHeader;