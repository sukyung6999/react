import { useRef, useState, useEffect } from 'react';
import './App.css'
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from './Lifecylce';

// const dummyList = [
//   {
//     id: 1,
//     author: '이수경',
//     content: '하이 에브리원1',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: '수정',
//     content: '하이 에브리원2',
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: '예삐',
//     content: '하이 에브리원3',
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: '뽀삐',
//     content: '하이 에브리원4',
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 5,
//     author: '수길',
//     content: '하이 에브리원5',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json())

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    });
    setData(initData)
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      author, 
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onRemove = (targetId) => {
    console.log(`${targetId}`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content: newContent} : it)
    )
  }

  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
