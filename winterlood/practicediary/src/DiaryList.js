import DiaryItem from "./DiaryItem";

function DiaryList({data}) {
  
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <strong>{data.length}개의 일기가 있습니다</strong>
      {
        data.map(item => <DiaryItem key={item.id} {...item} />)
      }
    </div>
  )
  
}
export default DiaryList;