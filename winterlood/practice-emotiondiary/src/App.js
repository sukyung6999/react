import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader leftButton={{text: '이전'}} headText={'일기장'} rightButton={{text: '다음', type: 'positive'}} />
        <h1>App.js</h1>
        <MyButton text={'기본'} type={'default'} onClick={() => alert('기본 버튼 클릭')}/>
        <MyButton text={'positive'} type={'positive'} onClick={() => alert('positive 버튼 클릭')}/>
        <MyButton text={'negative'} type={'negative'} onClick={() => alert('negative 버튼 클릭')}/>
        <MyButton text={'negative'} type={'dd'} onClick={() => alert('negative 버튼 클릭')}/>
        <MyButton text={'negative'} onClick={() => alert('negative 버튼 클릭')}/>
        <img src={process.env.PUBLIC_URL + `./assets/emotion1.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `./assets/emotion2.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `./assets/emotion3.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `./assets/emotion4.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `./assets/emotion5.png`} alt="" />
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/new'} element={<New/>} />
          <Route path={'/edit'} element={<Edit/>} />
          <Route path={'/diary/?id&move'} element={<Diary/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
