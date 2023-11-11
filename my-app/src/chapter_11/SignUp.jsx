import React, { useState } from 'react';

function SignUp(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('여자');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`이름: ${name}, 성별: ${gender}`)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별
        <select name="" id="" value={gender} onChange={handleChangeGender}>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </label>
      <button>제출</button>
    </form>
  )
}
export default SignUp;