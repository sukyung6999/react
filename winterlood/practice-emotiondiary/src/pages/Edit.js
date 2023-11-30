import { useNavigate, useSearchParams } from "react-router-dom";

function Edit() {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  console.log(id);

  const mode = searchParams.get('mode');
  console.log(mode);
  
  const navigate = useNavigate();

  return (
    <div>
      <h2>Edit</h2>
      <p>이곳은 일기장 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({who: 'sukyung', mode: 'white'})}>QS바꾸기</button>
      <button onClick={() => {navigate('/')}}>HOME으로 가기</button>
      <button onClick={() => {navigate(-1)}}>뒤로 가기</button>
    </div>
  )
}
export default Edit;