import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import LifeCycle from './LifeCycle';
import DiaryList from './DiaryList';

 function App() {
  const [data, setData] = useState([]);
  const diaryId = useRef(0);

  const getData = async () => {
    const unprocessedData = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json());
    const processedData = unprocessedData.slice(0,20).map((item) => {
      const created_date = new Date().getTime();
      const randomEmotion = Math.floor(Math.random() * 5) + 1;
      return {
        id: diaryId.current++,
        author: item.email,
        content: item.body,
        emotion: randomEmotion,
        created_date,
      }
    })

    setData(processedData);
  }

  useEffect(() => {
    getData();
  }, []);

  const analyzeData = useMemo(() => {
    const goodCount = data.filter((item) => item.emotion >=3).length;
    const badCount = data.length - goodCount;
    const goodRatio = goodCount / data.length;

    return {goodCount, badCount, goodRatio};
  }, [data.length])

  const {goodCount, badCount, goodRatio} = analyzeData;

  const onCreate = (author, content, emotion) => {
    const newItem = {
      id: diaryId.current++,
      author,
      emotion,
      created_date: new Date().getTime(),
      content,
    }
    setData([newItem, ...data]);
  }
  const onRemove = (targetId) => {
    const newList = data.filter((item) => item.id !== targetId);
    setData(newList);
  }
  const onEdit = (targetId, newContent) => {
    const newList = data.map((item) => item.id === targetId ? {...item, content: newContent} : item);
    setData(newList);
  }
  
  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList data={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
