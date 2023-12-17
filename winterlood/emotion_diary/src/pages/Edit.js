import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import {useContext, useEffect,useState } from 'react';
import DiaryEditor from "../components/DiaryEditor";

function Edit() {
  const diaryList = useContext(DiaryStateContext);

  const navigate = useNavigate();
  const {id} = useParams();

  const [originData, setOriginData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`
  })

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(id));

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate('/', {replace: true});
      }
    }
  }, [diaryList, id]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
  )
}
export default Edit;