import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import React, { useReducer, useRef } from 'react';

const dummyData = [
  {
    id: 1,
    date: 1701491273655,
    emotion: 1,
    content: '오늘의 일기 1번'
  },
  {
    id: 2,
    date: 1701491274656,
    emotion: 2,
    content: '오늘의 일기 2번'
  },
  {
    id: 3,
    date: 1701491275656,
    emotion: 3,
    content: '오늘의 일기 3번'
  },
  {
    id: 4,
    date: 1701491276655,
    emotion: 4,
    content: '오늘의 일기 4번'
  },
  {
    id: 5,
    date: 1701491277655,
    emotion: 5,
    content: '오늘의 일기 5번'
  },
  {
    id: 6,
    date: 1802492278655,
    emotion: 6,
    content: '오늘의 일기 6번'
  },
]

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      newState = [action.data, ...state];
      break;
    case 'REMOVE': 
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    case 'EDIT':
      newState = state.map((item) => item.id === action.targetId ? {...action.data} : item);
      break;
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchesContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  const onCreate = (content, emotion, date) => {
    dispatch({
      type: 'CREATE',
      data: {
      id: dataId.current++,
      date: new Date(date).getTime(),
      content,
      emotion
    }
  })
  }

  const onRemove = (targetId) =>{
    dispatch({
      type: 'REMOVE',
      targetId
    });
  }

  const onEdit = (targetId, content, emotion, date) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }
  
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchesContext.Provider value={{onCreate, onRemove, onEdit}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path={'/'} element={<Home/>} />
              <Route path={'/new'} element={<New/>} />
              <Route path={'/edit'} element={<Edit/>} />
              <Route path={'/diary/?id&move'} element={<Diary/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchesContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
