import { useNavigate, useParams } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryEditor from "../components/DiaryEditor";
import { useContext } from "react";
import { DiaryDispatchesContext } from "../App";

function Edit() {

  const {onRemove} = useContext(DiaryDispatchesContext);

  const navigate = useNavigate();

  const {id} = useParams();

  const handleRemove = () => {
    if (window.confirm('일기를 삭제하시겠습니까?')) {
      onRemove(id);
    }
    navigate('/', {replace: true});
  }

  return (
    <div>
      <MyHeader 
        leftChild={
          <MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>
        }
        headText={'일기 수정하기'}
        rightChild={
          <MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove} />
        }
      />
      <DiaryEditor isEdit={true} targetId={id} />
    </div>
  )
}
export default Edit;