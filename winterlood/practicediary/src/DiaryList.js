import React, { useCallback, useEffect } from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({
  data,
  onRemove,
  onEdit
}) {

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      {data.map((item) => <DiaryItem key={item.id} {...item} onEdit={onEdit} onRemove={onRemove} />)}
    </div>
  )
}
export default React.memo(DiaryList);