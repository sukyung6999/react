import { useEffect, useRef, useState } from 'react';
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
  
  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor/>
      <DiaryList data={data}/>
    </div>
  );
}

export default App;
