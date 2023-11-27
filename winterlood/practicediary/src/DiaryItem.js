import React, { useRef, useState } from "react";

function DiaryItem({
  onEdit,
  onRemove,
  id,
  author,
  content,
  emotion,
  created_date
}) {
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {setIsEdit(!isEdit)};

  const [newContent, setNewContent] = useState(content);
  const newContentInput = useRef();

  const handleQuitEdit = () => {
    toggle();
    setNewContent(content);
  }

  const handleEdit = () => {
    
    if (newContent.length < 5) {
      newContentInput.current.focus();
      return;
    }

    toggle();
    
    window.confirm(`${id + 1}번째 일기를 수정하시겠습니까?`);

    onEdit(id, newContent);
  }

  const handleRemove = () => {
    window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)
    onRemove(id);
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <div>작성자 :{author} | 감정점수 : {emotion}</div>
        <span className="date">{new Date().toLocaleString(created_date)}</span>
      </div>
      <p className="content">
        {
          isEdit ?
          <textarea ref={newContentInput} value={newContent} onChange={(e) => setNewContent(e.target.value)} /> :
          content
        }
      </p>
      <div>
        { 
          isEdit ?
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </> :
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggle}>수정하기</button>
          </>
        }
      </div>
    </div>
  )
}
export default DiaryItem;