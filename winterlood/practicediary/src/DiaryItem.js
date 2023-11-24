import { useRef, useState } from "react";

function DiaryItem({
  onRemove,
  id,
  author,
  content,
  emotion,
  created_date
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const saveEditContent = useRef(editContent);

  const handleQuitEdit = () => {
    setEditContent(saveEditContent.current);
    setIsEdit(false);
  }

  const handeleEdit = () => {
    saveEditContent.current = editContent;
    setIsEdit(!isEdit);
  }
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
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
          <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} /> :
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
            <button onClick={handleIsEdit} >수정하기</button>
          </>
        }
    </div>
  )
}
export default DiaryItem;