import {useNavigate} from 'react-router-dom';
import {useState, useRef, useContext} from 'react';

import {DiaryDispatchesContext} from '../App';

import MyHeader from './MyHeader';
import MyButton from './MyButton'; 
import EmotionItem from './EmotionItem';

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion1.png`,
    emotion_descript: '완전 좋음',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion2.png`,
    emotion_descript: '좋음',
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion3.png`,
    emotion_descript: '그럭저럭',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion4.png`,
    emotion_descript: '나쁨',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `assets/emotion5.png`,
    emotion_descript: '완전 나쁨',
  },
]

const getStringDate = (date) => {
  return new Date(date).toISOString().slice(0,10);
}

function DiaryEditor () {
  const navigate = useNavigate();

  const {onCreate} = useContext(DiaryDispatchesContext);

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const contentRef = useRef();

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion)
  }

  const handleSubmit = () => {
    if(content.length < 1) {
      contentRef.current.focus();
    }
    onCreate({
      date,
      emotion,
      content
    });

    navigate('/', {replace: true})
  }

  return (
    <div className='DiaryEditor'>
      <MyHeader 
      headText={'새 일기 쓰기'} 
      leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)} />}/>
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className='input-box'>
            <input 
            className='input-date'
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value) } />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className='input_box emotion_list_wrapper'>
            {
              emotionList.map((item) => {
                return <EmotionItem 
                key={item.emotion_id} 
                {...item} 
                onClick={handleClickEmotion} 
                isSelected={item.emotion_id === emotion}
                />
              })
            }
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea placeholder='오늘은 어땠나유' ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)}>

            </textarea>
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={'취소하기'} onClick={() => navigate(-1)}/>
            <MyButton text={'작성완료'} type={'positive'} onClick={handleSubmit} />
          </div>
        </section>
      </div>
    </div>
  )
}
export default DiaryEditor;