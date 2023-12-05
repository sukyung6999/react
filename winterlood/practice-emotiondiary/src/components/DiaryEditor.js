import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {DiaryDispatchesContext, DiaryStateContext} from '../App';
import { getDateString } from "../util/getDateString";
import MyButton from "./MyButton";

import { emotionList } from "../util/emotionList";
import EmotionItem from "./EmotionItem";

function DiaryEditor({isEdit, targetId}) {

  const diaryList = useContext(DiaryStateContext);
  const {onCreate, onEdit} = useContext(DiaryDispatchesContext);

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState('');

  const [isSelected, setIsSelected] = useState(3);

  const handleSubmit = () => {
    window.confirm(isEdit ? '일기를 수정하시겠습니까?' : '일기를 생성하시겠습니까?');
    
    if (isEdit) {
      onEdit(targetId, content, isSelected, date);
    } else {
      onCreate(date, content, isSelected);
    }

    navigate('/', {replace: true})
  }

  useEffect(() => {
    if (isEdit) {
      const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(targetId));

      console.log(targetDiary);
      setDate(targetDiary.date);
      setIsSelected(targetDiary.emotion);
      setContent(targetDiary.content);
    }
  }, []);

  return (
    <div className="DiaryEditor">
      <section>
        <h4>오늘은 언제인가요?</h4>
        <input className="input_date" type="date" value={getDateString(date)} onChange={(e) => setDate(e.target.value)} />
      </section>

      <section>
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {
            emotionList.map((item, idx) => <EmotionItem key={idx} onClick={setIsSelected} emotion={isSelected} {...item} /> )
          }
        </div>
      </section>
      
      <section>
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘 어땠나유?" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
      </section>

      <section className="control_box"> 
        <MyButton text={'취소하기'} onClick={() => navigate('/')} />
        <MyButton text={'작성완료'} type={'positive'} onClick={handleSubmit} />
      </section>
    </div>
  )
}
export default DiaryEditor;