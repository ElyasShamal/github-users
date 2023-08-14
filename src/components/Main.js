import { useEffect, useState } from "react";

// Api link
const url = "https://api.github.com/users";

function Main() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return <div></div>;
}

export default Main;
