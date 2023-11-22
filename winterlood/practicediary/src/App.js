import { useEffect } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import LifeCycle from './LifeCycle';

 function App() {
  const getData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/comments';

    const data = await fetch(URL)
      .then((response) => response.json())
  
    const initData = data.slice(0, 20);

  }

  useEffect(() => {
    getData();
  })

  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor/>
    </div>
  );
}

export default App;
