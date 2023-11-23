function DiaryItem({
  author,
  emotion,
  content
}) {
  const date = new Date().getTime();
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author} | 감정점수 : {emotion}</span>
        <span className="date">{new Date(date).toLocaleString()}</span>
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