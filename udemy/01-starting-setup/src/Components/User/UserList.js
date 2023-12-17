import Card from "../UI/Card";
import classes from "./UserList.module.css";

function UserList({ usersData }) {
  return (
    <Card className={classes.users}>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UserList;
