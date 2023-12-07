import { useNavigate, useParams } from "react-router-dom";

import DiaryEditor from "../components/DiaryEditor";
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";

function Edit() {

  const diaryList = useContext(DiaryStateContext);
  const [originData, setOriginData] = useState();

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  })

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((diary) => parseInt(diary.id) === parseInt(id));

      if (targetDiary) {
        console.log(targetDiary);
        setOriginData(targetDiary);
      } else {
        alert('유효하지 않은 페이지입니다.');
        navigate('/', {replace: true})
      }
    }
  }, [diaryList, id]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  )
}
export default Edit;

 /**
  * 윈터루드 코드로 수정한 이유 :
  * 
  * 1. 수정 페이지에서 필요한 데이터만을 필터링해서 전달해준다는 것
  * 2. onRemove는 onEdit, onCreate이랑 같은 페이지(DiaryEditor.js)에서 관리할 수 있음
  * 3. MyHeader도 DiaryEditor와 함께 쓰이는 레이아웃이여서 한 페이지에서 관리하는게 효율적인 것 같음
  * 
  */