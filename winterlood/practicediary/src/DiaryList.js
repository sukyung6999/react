import React from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({data}) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      {data.map((item) => <DiaryItem key={item.id} {...item}/>)}
    </div>
  )
}
export default DiaryList;