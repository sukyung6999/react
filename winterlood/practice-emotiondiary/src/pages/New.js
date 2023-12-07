import DiaryEditor from '../components/DiaryEditor';
import { useEffect } from 'react';

function New() {

  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = '감정 일기장 - 새 일기'
  })

  return (
    <>
      <DiaryEditor/>
    </>
  )
}
export default New;