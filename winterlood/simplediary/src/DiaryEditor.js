import React, { useEffect, useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "./App";

function DiaryEditor() {

  const {onCreate}= useContext(DiaryDispatchContext);

  useEffect(() => {
    // console.log('DIARY 렌더')
  })

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  // const [author, setAuthor] = useState('');
  // const [content, setContent] = useState('');

  const handleSubmit = () => {
    if(state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    
    if(state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion)
    alert('성공');
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
        ref={authorInput}
        type="text" 
        name="author"
        value={state.author} 
        onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea 
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
        ></textarea>
      </div>
      <div>
        <label htmlFor="">오늘의 감정점수 :</label>
        <select 
          name="emotion" 
          value={state.emotion} 
          onChange={handleChangeState}
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}
export default React.memo(DiaryEditor);