import './App.css';
import React , {useReducer, useRef} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New'; 
import Edit from './pages/Edit';
import Diary from './pages/Diary';

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
      newState = state.map((item) => item.id === action.data.id ? {...action.data} : item);
      break;
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();

export const DiaryDispatchesContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1번',
    date: 1701421107061
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘의 일기 2번',
    date: 1701421107062
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 3번',
    date: 1701421107063
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘의 일기 4번',
    date: 1701421107064
  },
  {
    id: 5,
    emotion: 5,
    content: '오늘의 일기 5번',
    date: 1701421107065
  },
  {
    id: 6,
    emotion: 2,
    content: '오늘의 일기 6번',
    date: 1801421107065
  },
]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, emotion, content) => {
    dispatch({
      type: 'CREATE', 
      data: {
        id: dataId.current++,
        date: new Date(date).getTime(),
        content,
        emotion
    }});
  }

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({type: 'REMOVE',targetId})
  }

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
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
              <Route path='/' element={<Home/>}/>
              <Route path='/new' element={<New/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
              <Route path='/diary/:id' element={<Diary/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchesContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;