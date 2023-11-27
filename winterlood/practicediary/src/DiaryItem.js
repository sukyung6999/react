import React from "react";

function DiaryItem({
  author,
  content,
  emotion,
  created_date
}) {
  return (
    <div className="DiaryItem">
      <div className="info">
        <div>작성자 :{author} | 감정점수 : {emotion}</div>
        <span className="date">{new Date().toLocaleString(created_date)}</span>
      </div>
      <p className="content">{content}</p>
      <div>
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </div>
  )
}
export default DiaryItem;