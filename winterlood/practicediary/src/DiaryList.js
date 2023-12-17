import React, { useCallback, useContext, useEffect } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

function DiaryList() {
  const dataList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{dataList.length}개의 일기가 있습니다.</h4>
      {dataList.map((item) => <DiaryItem key={item.id} {...item} />)}
    </div>
  )
}
export default React.memo(DiaryList);