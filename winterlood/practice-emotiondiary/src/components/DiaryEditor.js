import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {DiaryDispatchesContext } from '../App';
import { getDateString } from "../util/getDateString";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

import { emotionList } from "../util/emotionList";
import EmotionItem from "./EmotionItem";

function DiaryEditor({isEdit, originData}) {

  const navigate = useNavigate();

  const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchesContext);

  const [date, setDate] = useState(new Date());
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState('');

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion)
  }

  const handleRemove = () => {
    if (window.confirm('일기를 삭제하시겠습니까?')) {
      onRemove(originData.id);
      navigate('/', {replace: true});
    }
  }

  const handleSubmit = () => {
    if (window.confirm(isEdit ? '일기를 수정하시겠습니까?' : '일기를 생성하시겠습니까?')) {
      if (isEdit) {
        onEdit(originData.id, content, emotion, date);
      } else {
        onCreate(date, content, emotion);
      }
  
      navigate('/', {replace: true})
    }
    
  }

  useEffect(() => {
    if (isEdit) {
      console.log(originData);
      setDate(originData.date);
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader 
        leftChild={
          <MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>
        }
        headText={isEdit ? '일기 수정하기' : '새 일기 쓰기'}
        rightChild={
          isEdit && <MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove} />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <input className="input_date" type="date" value={getDateString(date)} onChange={(e) => setDate(e.target.value)} />
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="emotion_list_wrapper">
            {
              emotionList.map((item, idx) => <EmotionItem 
              key={idx} 
              onClick={handleClickEmotion} 
              isSelected={item.emotion_id === emotion}
              {...item}
               /> )
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
    </div>
  )
}
export default DiaryEditor;

/**
 * 윈터루드 코드로 수정한 이유 :
 * 
 * 1. emotion 상태 관리해야하는 데 내가 짠 코드에서는 상태관리하는 이름이 emotion으로 안한것도 좀 이상했음
 * 
 */