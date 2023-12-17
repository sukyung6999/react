import {useNavigate} from 'react-router-dom';
import {useState, useRef, useContext, useEffect, useCallback} from 'react';

import {DiaryDispatchesContext} from '../App';

import MyHeader from './MyHeader';
import MyButton from './MyButton'; 
import EmotionItem from './EmotionItem';
import { getStringDate } from '../util/Date';
import { emotionList } from '../util/emotion';

function DiaryEditor ({originData, isEdit}) {
  const navigate = useNavigate();

  const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchesContext);

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const contentRef = useRef();

  const handleClickEmotion = useCallback((emotion) => {
    setEmotion(emotion)
  }, [])

  const handleSubmit = () => {
    if(content.length < 1) {
      contentRef.current.focus();
    }

    if (window.confirm(isEdit ? '일기를 수정하겠습니까?' : '일기를 작성완료하시겠습니까')) {
      if (!isEdit) {
        onCreate(date,emotion,content);
      } else {
        onEdit(originData.id, date, content, emotion)
      }
  
      navigate('/', {replace: true})
    }

  }


  const handleRemove = () => {
    if(window.confirm('정말 삭제하시겠습니까?')) {
      onRemove(originData.id);
      navigate('/', {replace: true})
    }
  }

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className='DiaryEditor'>
      <MyHeader 
        leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)} />}
        headText={isEdit ? '일기 수정하기' : '새 일기 쓰기'} 
        rightChild={
          isEdit && <MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove} />
        }   
      />
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