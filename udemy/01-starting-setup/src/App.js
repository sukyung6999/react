import React, { useState } from 'react';

import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {
  const [usersData, setUsersData] = useState([]);

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
      <AddUser onAddUser={onAddUser}/>
      {usersData.length > 0 && <UserList usersData={usersData}/>}
    </div>
  );
}

export default App;
