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
  return (
    <>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blink">
                  profile
                </a>
                <button>X</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
