import { useEffect, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import LifeCycle from './LifeCycle';
import DiaryList from './DiaryList';

 function App() {
  const [data, setData] = useState([]);
  const diaryId = useRef(0);
  
  const getData = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())

    const initData = comments.slice(0, 20).map((item) => {
      return {
        id: diaryId.current++,
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1
      }
    });
    setData(initData);
  };

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      id: diaryId.current,
      created_date,
      author,
      content,
      emotion
    }
    setData((data) => [newItem, ...data])
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate} diaryId={diaryId} />
      <div>전체일기: </div>
      <div>기분 좋은 일기 개수 : </div>
      <div>기분 나쁜 일기 개수 : </div>
      <div>기분 좋은 일기 비율 : </div>
      <DiaryList data={data} />
    </div>
  );
}

export default App;
