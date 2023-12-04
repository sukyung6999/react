import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { getDateString } from "../util/getDateString";
import { emotionList } from "../util/emotionList";

function Diary() {
  const navigate = useNavigate();
  const {id} = useParams();

  const diaryList = useContext(DiaryStateContext);
  const targetDiary = diaryList.find((item) => item.id === parseInt(id));

  const emotion = emotionList[targetDiary.emotion - 1];

  return (
    <div className="DiaryPage">
      <MyHeader 
        leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>}
        headText={getDateString(targetDiary.date) + '기록'}
        rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${id}`)}/>}
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div className={["diary_img_wrapper", `diary_img_wrapper_${emotion.emotion_id}`].join(" ")}>
            <img src={emotion.emotion_img} alt="" />
            <div className="emotion_descript">{emotion.emotion_description}</div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content_wrapper">
            <p>{targetDiary.content}</p>
          </div>
        </section>
      </article>
    </div>
  )
}
export default Diary;