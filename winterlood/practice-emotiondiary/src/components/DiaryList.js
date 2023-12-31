import React, { useState } from "react";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const dateOptionList = [
  {type: 'latest', name: '최신순'},
  {type: 'oldest', name: '오래된 순'},
];
const emotionOptionList = [
  {type: 'all', name: '전부다'},
  {type: 'good', name: '좋은 감정 순'},
  {type: 'bad', name: '나쁜 감정 순'},
]

const ControlMenu = React.memo(({value, onChange, optionList}) => {
  return <select className='ControlMenu' value={value} onChange={(e) => onChange(e.target.value)}>
    {
      optionList.map((item, idx) => <option key={idx} value={item.type}>{item.name}</option>)
    }
  </select>
})

function DiaryList({diaryList}) {

  const navigate = useNavigate();

  const [dateFilter, setDateFilter] = useState('latest');
  const [emotionFilter, setEmotionFilter] = useState('all');

  const compare = (item) => {
    if (emotionFilter === 'good') {
      return item.emotion <= 3;
    } else {
      return item.emotion > 3;
    }
  }

  const copyList = JSON.parse(JSON.stringify(diaryList));
  const filteredList = copyList.filter((item) => emotionFilter === 'all' ? item : compare(item));
  filteredList.sort((a, b) => dateFilter === 'latest' ? b.date - a.date : a.date - b.date);

  return <div className='DiaryList' >
    <div className="menu_wrapper">
      <div className="left_col">
        <ControlMenu
          value={dateFilter}
          onChange={setDateFilter}
          optionList={dateOptionList}
          />
        <ControlMenu
          value={emotionFilter}
          onChange={setEmotionFilter}
          optionList={emotionOptionList}
        />
      </div>
      <div className="right_col">
        <MyButton text={'새 일기 쓰기'} type={'positive'} onClick={() => navigate('/new')} />
      </div>
    </div>
    {
      filteredList.map((item, idx) => (
        <DiaryItem key={idx} {...item} />
      ))
    }
  </div>
}
DiaryList.defaultProps = {
  diaryList: []
}
export default DiaryList;