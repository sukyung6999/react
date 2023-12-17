import classes from './UserList.module.css';

function UserList({usersData}) {
  return <div className={classes.users}>
    <ul>
      {
        usersData.map((user) => <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>)
      }  
    </ul>    
  </div>
}
export default UserList;