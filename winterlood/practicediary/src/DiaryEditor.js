import React, {useRef, useState} from 'react';

function DiaryEditor({
  onCreate
}) {
  const [obj, setObj] = useState({
    author: '',
    content: '',
    emotion: 1
  })
  const authorInput = useRef();
  const contentInput = useRef();

  const handleChange = (e) => {
    setObj({
      ...obj, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (obj.author.length < 3) {
      authorInput.current.focus();
      return;
    }
    if (obj.content.length <= 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(obj.author, obj.content, obj.emotion);
    setObj({
      author: '',
      content: '',
      emotion: 1
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} type="text" name="author" value={obj.author} onChange={handleChange} />
      </div>
      <div>
        <textarea ref={contentInput} name="content" id="" cols="30" rows="10" value={obj.content} onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor="">오늘의 감정점수 : </label>
        <select name="emotion" id="" value={obj.emotion} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  )
}
export default React.memo(DiaryEditor);