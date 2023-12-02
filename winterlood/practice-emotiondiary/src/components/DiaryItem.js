import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

function DiaryItem({
  id,
  emotion,
  content,
  date
}) {

  const navigate = useNavigate();

  const toDetail = () => {
    navigate(`/detail/${id}`)
  }

  return (
    <div className="DiaryItem">
      <div 
      className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(" ")}
      onClick={toDetail}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt="" />
      </div>
      <div className="info_wrapper" onClick={toDetail}>
        <div className="diary_date">{new Date(date).toLocaleString()}</div>
        <div className="diary_content_preview">{content.slice(0,25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={'수정하기'} onClick={() => navigate(`/edit/${id}`)} />
      </div>
    </div>
  )
}
export default DiaryItem;