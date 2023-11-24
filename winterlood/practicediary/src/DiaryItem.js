import { useRef, useState } from "react";

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
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [editContent, setEditContent] = useState(content);
  const localContent = useRef();

  const handleQuitEdit = () => {
    setIsEdit(false);
  }

  const handeleEdit = () => {
    if (editContent.length < 5) {
      localContent.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, editContent)
    }
    toggleIsEdit();

  }
 
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자: {author} | 감정점수 : {emotion}</span>
        <p className="date">{new Date(created_date).toLocaleString()}</p>
      </div>
      <p className="content">
        {
          isEdit ?
          <textarea ref={localContent} value={editContent} onChange={(e) => setEditContent(e.target.value)} /> :
          editContent
        }
      </p>
      {
          isEdit ?
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handeleEdit}>수정완료</button>
          </> :
          <>
            <button onClick={() => onRemove(id)}>삭제하기</button>
            <button onClick={toggleIsEdit} >수정하기</button>
          </>
        }
    </div>
  )
}
export default DiaryItem;