import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {DiaryDispatchesContext, DiaryStateContext} from '../App';
import { getDateString } from "../util/getDateString";
import MyButton from "./MyButton";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion1.png`,
    emotion_description: '완전 좋음'
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion2.png`,
    emotion_description: '좋음'
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion3.png`,
    emotion_description: '그럭저럭'
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion4.png`,
    emotion_description: '나쁨'
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion5.png`,
    emotion_description: '완전 좋음'
  },
]

function DiaryEditor() {

  const {onCreate, onEdit} = useContext(DiaryDispatchesContext);

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState('');

  const [isSelected, setIsSelected] = useState(3);

  const handleSubmit = () => {
    alert('새로운 일기를 작성하시겠습니까?');
    const emotion = isSelected;
    onCreate(date, content, emotion);


    navigate('/', {replace: true})
  }

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
            emotionList.map((item) => <div 
              key={item.emotion_id}
              onClick={() => setIsSelected(item.emotion_id)} 
              className={["EmotionItem", isSelected === item.emotion_id ? `EmotionItem_on_${item.emotion_id}` : 'EmotionItem_off' ].join(" ")} >
              <img src={item.emotion_img} alt="" />
              <span>{item.emotion_description}</span>
            </div> )
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