import React, {useContext, useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";

import {DiaryStateContext} from '../App';

import { getStringDate } from '../util/Date';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { emotionList } from '../util/emotion';

function Diary() {
  const navigate = useNavigate();
  
  const diaryList = useContext(DiaryStateContext);

  const {id} = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(id));
      
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert('존재하지 않는 일기입니다');
        navigate('/', {replace: true})
      }
    }
  }, [diaryList, id]);

  if (!data) {
    return <div className='DiaryPage'>로딩중입니다...</div>
  } else {

    const curEmotionData = emotionList.find((item) => parseInt(item.emotion_id) === data.emotion);

    return (
      <div className="DiaryPage">
        <MyHeader 
        headText={`${getStringDate(new Date(data.date))} 기록`} 
        leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate('/')}/>}
        rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${data.id}`)}/>}
        />

        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div className={["diary_img_wrapper", `diary_img_wrapper_${data.emotion}`].join(' ')}>
              <img src={curEmotionData.emotion_img} alt="" />
              <div className="emtoion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    )
  }
}
export default Diary;