function DiaryItem({data}) {
  return (
    <div>
      <div>
        <span className="info"></span>
        <span className="emotion"></span>
      </div>
      <span className="date"></span>
      <p className="content"></p>
      <div>
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </div>
  )
}
export default DiaryItem;