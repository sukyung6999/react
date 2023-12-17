import React, { useState } from 'react';

import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
import ErrorModal from './Components/Error/ErrorModal';


function App() {
  const [usersData, setUsersData] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const onChangeValid = (state) => {
    setIsValid(state);
  }

  const onAddUser = (newUser) => {
    setUsersData((prevData) => {
      return [...prevData, {
        id: Math.random(),
        ...newUser
      }]
    })
  }
  return (
    <div className='content'>
      <AddUser onAddUser={onAddUser} onChangeValid={onChangeValid}/>
      {usersData && <UserList usersData={usersData}/>}
      {!isValid && <ErrorModal onChangeValid={onChangeValid}/>}
    </div>
  );
}

export default App;
