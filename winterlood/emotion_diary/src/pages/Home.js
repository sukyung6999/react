import React, {useState, useContext, useEffect} from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';

function Home() {
  const diaryList = useContext(DiaryStateContext);
  
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
  
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();
  
      setData(diaryList.filter((item) => firstDay <= item.date && item.date <= lastDay));
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1))
  }
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1))
  }
  return (
    <div>
      <MyHeader 
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />} 
        headText={headText}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data}/>
    </div>
  )
}
export default Home;