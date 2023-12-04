import { useNavigate, useParams } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryEditor from "../components/DiaryEditor";

function Edit() {

  const navigate = useNavigate();

  const {id} = useParams();

  return (
    <div>
      <MyHeader 
        leftChild={
          <MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>
        }
        headText={'일기 수정하기'}
      />
      <DiaryEditor isEdit={true} targetId={id} />
    </div>
  )
}
export default Edit;