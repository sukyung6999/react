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
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find((item) => item.id === parseInt(id));
      console.log(targetDiary);

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