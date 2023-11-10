import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList'
import Ref from './chapter_06/ref';
import State from './chapter_06/state';
import Effect from './chapter_06/effect';
import Effect2 from './chapter_06/effect2';
import Memo from './chapter_06/memo';
import Memo2 from './chapter_06/memo2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Memo2/>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
