import React, {useState, useEffect} from 'react';

function Effect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  // 1) 렌더링될때마다 실행
  // useEffect(() => {
  //   console.log('렌더링');
  // });

  // 2) 마운트 + 의존성 배열에 있는게 바뀔 때마다 실행
  // useEffect(() => {
  //   console.log('카운트가 바뀔때만');
  // }, [count]);
  
  // 3) 마운트될때만
  useEffect(() => {
    console.log('마운트 될때만');
  }, []);

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  )
}

export default Effect;