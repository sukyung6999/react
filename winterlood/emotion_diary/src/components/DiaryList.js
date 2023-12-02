import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';

const setOptionList = [
  {value: 'latest', name: '최신순'},
  {value: 'oldest', name: '오래된 순'},
];

const filterOptionList = [
  {value: 'all', name: '전부다'},
  {value: 'good', name: '좋은 감정만'},
  {value: 'bad', name: '나쁜 감정만'},
]

function ControlMenu ({value, onChange, optionList}) {
  return <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
    {
      optionList.map((item,idx) => <option value={item.value} key={idx}>{item.name}</option>)
    }
  </select>
}

function DiaryList ({diaryList}) {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const processedDiaryList = () => {

    const filteredCallback = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3
      } else {
        return parseInt(item.emotion) > 3;
      }
    }

    const compare = (a,b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === 'all' ? copyList : copyList.filter((item) => filteredCallback(item));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  }

  return <div className='DiaryList'>
    <div className='menu_wrapper'>
      <div className="left_col">
        <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={setOptionList}
        />
        <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOptionList}
        />
      </div>
      <div className="right_col">
        <MyButton text={'새 일기 쓰기'} type={'positive'} onClick={() => navigate('/new')}/>
      </div>
    </div>
    {
      processedDiaryList().map((item) => (
        <DiaryItem key={item.id} {...item}/>
      ))
    }
  </div>
}

DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList;
