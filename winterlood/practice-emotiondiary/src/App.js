import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import React, { useEffect, useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      newState = [action.data, ...state];
      break;
    case 'REMOVE': 
      newState = state.filter((item) => parseInt(item.id) !== parseInt(action.targetId));
      break;
    case 'EDIT':
        newState = state.map((item) => parseInt(item.id) === parseInt(action.data.id) ? {...action.data} : item);
      break;
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(newState));
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchesContext = React.createContext();

function App() {

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem('diary'));

    if (localdata) {
      dispatch({type: 'INIT', data: localdata})
    }
  }, [])

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
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
              <Route path={'/edit/:id'} element={<Edit/>} />
              <Route path={'/diary/:id'} element={<Diary/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchesContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
