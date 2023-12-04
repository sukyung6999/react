import { useContext, useEffect, useState } from 'react';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';
function Home() {

  const diaryList = useContext(DiaryStateContext);

  const [curDate, setCurDate] = useState(new Date());
  const [data, setData] = useState(diaryList);

  useEffect(() => {
    const startDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const lastDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0, 23, 59, 59);

    const processedList = diaryList.filter((item) => startDate <= item.date && item.date <= lastDate);
    setData(processedList);
  }, [diaryList, curDate]);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const onIncreaseDate = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
  }
  const onDecreaseDate = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
  }

  return (
    <div>
      <MyHeader 
        leftChild={<MyButton text={'<'} onClick={onDecreaseDate} />}
        headText={headText}
        rightChild={<MyButton text={'>'} onClick={onIncreaseDate} />}
      />
      <DiaryList diaryList={data}/>
    </div>
  )
}
export default Home;