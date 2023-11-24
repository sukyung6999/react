import { useEffect, useRef, useState } from 'react';
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
      <DiaryList data={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
