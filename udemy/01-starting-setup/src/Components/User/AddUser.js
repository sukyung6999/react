import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser({
  onAddUser,
  onChangeValid
}) {
  const [user, setUser] = useState({
    name: '',
    age: ''
  });

  const inputChangeHandler = (event) => {
    setUser((prev) => {
     return {
      ...prev,
      [event.target.id]: event.target.value
     }
    })
  }

  const addClickHandler = (event) => {
    event.preventDefault();

    if (user.name.length === 0 ) {
      onChangeValid(false);
      return;
    } else if (user.name.length === 0){
      onChangeValid(false);
      return;
    }
    const newUser = {
      name: user.name,
      age: user.age
    }

    onAddUser(newUser);

    setUser({
      name: '',
      age: 0
    })
  }
  return <form onSubmit={addClickHandler}>
    <div className={classes.input}>
      <label htmlFor="name">Username</label>
      <input value={user.name} onChange={inputChangeHandler} type="text" id="name" />
    </div>
    <div className={classes.input}>
      <label htmlFor="age">Age(Years)</label>
      <input value={user.age} onChange={inputChangeHandler} type="number" id="age" />
    </div>
    <Button type={'submit'} text={'Add User'}/>
  </form>
}
export default AddUser;