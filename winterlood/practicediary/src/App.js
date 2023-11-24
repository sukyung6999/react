import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';

 function App() {
  const getData = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then((response) => response.json())

    comments.slice(0,20).map((item) =>{
      onCreate(item.email, item.body, Math.floor(Math.random() * 5) + 1)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const calculateResults = useMemo(() => {
    let countGood = 0;
    data.map((item) => {
      if (item.emotion >= 3) countGood++;
    })
    const countBad = data.length - countGood;
    const percentGood = countGood / data.length * 100;

    return {countGood, countBad, percentGood}
  }, [data])

  const {countGood, countBad, percentGood} = calculateResults; 
  

  const onRemove = (dataId) => {
    const newList = data.filter((item) => item.id !== dataId);
    setData(newList);
  }

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      id: dataId.current++,
      created_date,
      author,
      content,
      emotion
    }

    setData((data) => [newItem, ...data]);
  }
  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {countGood}</div>
      <div>기분 나쁜 일기 개수 : {countBad}</div>
      <div>기분 좋은 일기 비율 : {percentGood}</div>
      <DiaryList data={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
