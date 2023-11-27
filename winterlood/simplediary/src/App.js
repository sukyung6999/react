import React, { useRef, useReducer, useEffect, useMemo, useCallback } from 'react';
import './App.css'
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from './Lifecylce';
import OptimizeTest from './OptimizeTest';

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

export const DiaryDispatchContext = React.createContext();
export const DiaryStateContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'init':
      return action.data;
    case 'create': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state]
    }
    case 'remove': {
      return state.filter((item) => item.id !== action.targetId)
    }
    case 'edit': {
      return state.map((item) => item.id === action.targetId ? {...item, content: action.newContent} : item)
    }
    default:
      return state;
  }
}

function App() {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getDiaryAnalysis = useMemo(() => {

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return {goodCount, badCount, goodRatio};
  }, [data.length])

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

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
    // setData(initData)
    dispatch({
      type: "init", 
      data: initData
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    // const created_date = new Date().getTime();

    dispatch({
      type:'create', 
      data: {author, content, emotion, id: dataId.current}
    })
    // const newItem = {
    //   author, 
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current
    // }
    dataId.current += 1;
    // setData((data) => [newItem, ...data]);
  }, [])

  const onRemove = useCallback((targetId) => {
    dispatch({type: 'remove', targetId})
    // setData(data => data.filter((it) => it.id !== targetId));
  }, [])

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({type:'edit',targetId, newContent})
    // setData(
    //   data => data.map((it) => it.id === targetId ? {...it, content: newContent} : it)
    // )
  }, [])

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onEdit, onRemove}
  }, [])

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <Lifecycle/>
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList/>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
