import React, { useCallback, useEffect, useMemo, useReducer, useRef, createContext } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import LifeCycle from './LifeCycle';
import DiaryList from './DiaryList';

export const DiaryDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.processedData;
    case 'CREATE':
      return [action.newItem, ...state];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.targetId);
    case 'EDIT':
      return state.map((item) => item.id === action.targetId ? {...item, content: action.newContent} : item);
    default:
      return;
  }
}

 function App() {
  const [data, dispatch] = useReducer(reducer, []);
  // const [data, setData] = useState([]);
  const diaryId = useRef(0);

  const getData = async () => {

    const unprocessedData = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json());

    const processedData = unprocessedData.slice(0,20).map((item) => {
      return {
        id: diaryId.current++,
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
      }
    })

    // setData(processedData);
    dispatch({type: 'INIT', processedData})
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

  const onCreate = useCallback((author, content, emotion) => {
    const newItem = {
      id: diaryId.current++,
      author,
      emotion,
      created_date: new Date().getTime(),
      content,
    }
    // setData(data => [newItem, ...data]);
    dispatch({type: 'CREATE', newItem})
  }, []);

  const onRemove = useCallback((targetId) => {
    // setData(data => data.filter((item) => item.id !== targetId));
    dispatch({type: 'REMOVE', targetId})
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    // setData(data => data.map((item) => item.id === targetId ? {...item, content: newContent} : item));
    dispatch({type: 'EDIT', targetId, newContent})
  }, [])
  
  return (
    <div className="App">
      <DiaryDispatchContext.Provider value={data}>
        <LifeCycle/>
        <DiaryEditor onCreate={onCreate}/>
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList data={data} onRemove={onRemove} onEdit={onEdit}/>
      </DiaryDispatchContext.Provider>
    </div>
  );
}

export default App;
