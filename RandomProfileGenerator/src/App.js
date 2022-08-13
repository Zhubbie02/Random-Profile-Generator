import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [users, setUsers] = useState([]);

  const ProfileData =() => {
    axios.get("https://randomuser.me/api")
      .then((response) => {
        setUsers(response.data);
        
      })
     
  };

  useEffect(() => {
    ProfileData();
  }, []);

  return (
    <>
      {users.results?.map((user) => (
      <div className="container">
        <div className="user-profile-container" key={user.id}>
          <h1 className="headerTitle">
            Random Profile Generator from API
          </h1>
          <img src={user.picture.large} alt="user" />
          <h1>
            {user.name.first} {user.name.last}
          </h1>
          <button onClick={() => ProfileData()}>New User</button>
        </div>
      </div>
      ))}
    </>
  );
};
export default App;
