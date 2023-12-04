import {useNavigate} from 'react-router-dom';

import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import DiaryEditor from '../components/DiaryEditor';

function New() {

  const navigate = useNavigate();

  return (
    <>
      <MyHeader
        leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>}
        headText={'새 일기 쓰기'}
      />
      <DiaryEditor/>
    </>
  )
}
export default New;