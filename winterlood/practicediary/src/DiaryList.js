import DiaryItem from "./DiaryItem";

function DiaryList({data}) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <p>{data.length}개의 일기가 있습니다.</p>
      {
        data.map((item) => <DiaryItem key={item.id} {...data}/>)
      }
    </div>
  )
}
export default DiaryList;