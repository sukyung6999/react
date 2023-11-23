import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

 function App() {
  const dummyList = [
  {
    id: 1,
    author: '이수경',
    content: '하이 에브리원1',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: '수정',
    content: '하이 에브리원2',
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: '예삐',
    content: '하이 에브리원3',
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: '뽀삐',
    content: '하이 에브리원4',
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id: 5,
    author: '수길',
    content: '하이 에브리원5',
    emotion: 5,
    created_date: new Date().getTime()
  },
]
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList data={dummyList}/>
    </div>
  );
}

export default App;
