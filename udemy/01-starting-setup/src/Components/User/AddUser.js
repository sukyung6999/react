import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../Error/ErrorModal';

function AddUser({
  onAddUser,
}) {
  const [user, setUser] = useState({
    name: '',
    age: ''
  });

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  }

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

    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        text: 'Please enter a valid name and age(non-empty values)'
      })
      return;
    }
    
    if (parseInt(user.age) < 0) {
      setError({
        title: 'Invalid age',
        text: 'Please enter a valid age(> 0)'
      })
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
  return <>
    {error && <ErrorModal title={error.title} text={error.text} errorHandler={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addClickHandler}>
        <label htmlFor="name">Username</label>
        <input value={user.name} onChange={inputChangeHandler} type="text" id="name" />
        <label htmlFor="age">Age(Years)</label>
        <input value={user.age} onChange={inputChangeHandler} type="number" id="age" />
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  </>
}
export default AddUser;